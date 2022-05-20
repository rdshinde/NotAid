const filterReducer = (state, { type, payload }) => {
  const defaultFilterState = {
    sortByDate: "",
    priority: "",
    labels: [],
    isFilterApplied: false,
    searchText: "",
  };

  switch (type) {
    case "SET_PRIORITY":
      return {
        ...state,
        priority: payload,
        isFilterApplied: true,
      };
    case "SET_SEARCH":
      return {
        ...state,
        searchText: payload,
        isFilterApplied:
          payload === "" ? (state.isFilterApplied ? false : true) : true,
      };
    case "SET_DATE":
      return {
        ...state,
        sortByDate: payload,
        isFilterApplied: true,
      };

    case "SET_LABEL":
      const labelsSearched = state.labels.includes(payload)
        ? state.labels.filter((note) => note !== payload)
        : [...state.labels, payload];

      return {
        ...state,
        labels: labelsSearched,
        isFilterApplied: true,
      };

    case "CLEAR_FILTER":
      return defaultFilterState;

    default:
      return { ...state };
  }
};
export { filterReducer };
