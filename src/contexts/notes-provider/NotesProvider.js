import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useFetch, serverResponseHandler } from "../../services";
import { useAuth } from "../index";
import { notesApiReducer } from "./notesApiReducer";
import { useNavigate } from "react-router-dom";

const initialValue = {
  apiData: {
    apiURL: "",
    apiMethod: "",
    postData: {
      note: {},
    },
  },
};

const NotesContext = createContext(initialValue);

const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [archives, setArchives] = useState([]);
  const [labels, setlabels] = useState([
    "Home",
    "Work",
    "Daily",
    "Other",
    "Weekly",
  ]);
  const [trash, setTrash] = useState([]);

  const [notesApiData, notesApiDispatch] = useReducer(
    notesApiReducer,
    initialValue
  );

  const {
    apiData: { apiURL },
    apiData: { apiMethod },
    apiData: { postData },
  } = notesApiData;
  const { userAuthState } = useAuth();

  const { serverResponse, isLoaderLoading } = useFetch(
    apiURL,
    apiMethod,
    postData,
    userAuthState?.encodedToken
  );

  useEffect(() => {
    serverResponseHandler(
      serverResponse,
      setNotes,
      setArchives,
      setTrash,
      userAuthState,
      navigate
    );
  }, [serverResponse]);

  return (
    <NotesContext.Provider
      value={{
        notesApiData,
        notesApiDispatch,
        notes,
        archives,
        labels,
        setlabels,
        trash,
        isLoaderLoading,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes, NotesProvider };
