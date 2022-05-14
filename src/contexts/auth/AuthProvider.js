import { createContext, useContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { useFetch } from "../../services";
import { authReducer } from "./authReducer";
import { Toast } from "../../utils";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const initialUserAuthState = {
  userAuthState: {
    isUserLoggedIn: false,
    encodedToken: "",
    user: {},
  },
};

const AuthContext = createContext(initialUserAuthState);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userAuthState, userAuthDispatch] = useReducer(
    authReducer,
    initialUserAuthState
  );
  const [apiData, setApiData] = useState({
    apiURL: "",
    method: "",
    apiPostData: {},
  });
  const { apiURL, method, apiPostData } = apiData;
  const { isLoaderLoading, serverResponse } = useFetch(
    apiURL,
    method,
    apiPostData
  );
  const signupHandler = (signupCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "/api/auth/signup",
      method: "POST",
      apiPostData: { ...prev, ...signupCredentials },
    }));
  };
  const loginHandler = (loginCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "/api/auth/login",
      method: "POST",
      apiPostData: { ...prev, ...loginCredentials },
    }));
  };

  const logoutHandler = (firstName) => {
    userAuthDispatch({ type: "LOGOUT" });
    localStorage.clear("token");
    Toast({
      type: "success",
      msg: `${firstName} logged out successfully!`,
    });
    navigate(`/`);
  };
  useEffect(() => {
    let setTimeOutId;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        const decodedToken = jwt_decode(
          encodedTokenTemp,
          process.env.REACT_APP_JWT_SECRET
        );
        userAuthDispatch({
          type: "LOGIN",
          payload: {
            isUserLoggedIn: true,
            encodedToken: encodedTokenTemp,
            user: { ...decodedToken },
          },
        });
        Toast({
          type: "success",
          msg: `Logged in as ${decodedToken.firstName} ${decodedToken.lastName}`,
        });
        navigate(`/home`);
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);

  useEffect(() => {
    if (serverResponse) {
      if (serverResponse.status === 200) {
        const {
          data: { foundUser },
        } = serverResponse;
        userAuthDispatch({
          type: "LOGIN",
          payload: {
            isUserLoggedIn: true,
            encodedToken: serverResponse.data.encodedToken,
            user: { ...foundUser },
          },
        });
        localStorage.setItem("token", serverResponse.data.encodedToken);
        Toast({
          type: "success",
          msg: `${serverResponse.data.foundUser.firstName} logged in successfully!`,
        });

        navigate("/home");
      } else if (serverResponse.status === 201) {
        localStorage.setItem("signup_token", serverResponse.data.encodedToken);
        Toast({
          type: "success",
          msg: `User created successfully!`,
        });
        navigate(`/auth/login`);
      }
    }
  }, [serverResponse]);
  return (
    <AuthContext.Provider
      value={{
        userAuthState,
        userAuthDispatch,
        isLoaderLoading,
        serverResponse,
        signupHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
