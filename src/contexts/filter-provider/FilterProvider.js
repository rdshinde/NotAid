import { useContext, createContext, useReducer, useEffect } from "react";
import { useNotes } from "../index";
import { filterReducer } from "./filterReducer";
import { useNavigate } from "react-router-dom";
import {
  compose,
  filterByPriority,
  filterByLabels,
  sortByDate,
  filterBySearchText,
} from "../../utils";

const initialValue = {
  searchText: "",
  sortByDate: "",
  priority: "",
  labels: [],
  isFilterApplied: false,
};
const filterContext = createContext(initialValue);

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [filterState, filterDispatch] = useReducer(filterReducer, initialValue);
  const { notes } = useNotes();

  const filteredNotes = compose(
    filterState,
    sortByDate,
    filterByPriority,
    filterByLabels,
    filterBySearchText
  )(notes);
  useEffect(() => {
    if (filterState.isFilterApplied) {
      navigate("/home");
    }
  }, []);
  return (
    <filterContext.Provider
      value={{ filterState, filterDispatch, filteredNotes }}
    >
      {children}
    </filterContext.Provider>
  );
};
export { useFilter, FilterProvider };
