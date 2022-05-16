const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { encodedToken, user } = payload;
      return {
        ...state,
        isUserLoggedIn: true,
        encodedToken: encodedToken,
        user: { ...user },
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        encodedToken: "",
        user: {},
      };

    default:
      return { ...state };
  }
};

export { authReducer };
