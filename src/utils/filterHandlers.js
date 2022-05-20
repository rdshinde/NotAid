const compose =
  (state, ...functions) =>
  (data) => {
    return functions.reduce((acc, cur) => cur(state, acc), data);
  };

const sortByDate = (state, data) => {
  switch (state.sortByDate) {
    case "Oldest":
      return [...data].sort((a, b) => a.createdAt - b.createdAt);
    case "Latest":
      return [...data].sort((a, b) => b.createdAt - a.createdAt);
    default:
      return data;
  }
};

const filterByPriority = (state, data) => {
  switch (state.priority) {
    case "High":
      return data.filter((item) => item.priority === "High");
    case "Medium":
      return data.filter(
        (item) => item.priority === "medium" || item.priority === "Medium"
      );
    case "Basic":
      return data.filter((item) => item.priority === "Basic");
    default:
      return data;
  }
};

const filterByLabels = (state, data) => {
  return state.labels.length === 0
    ? data
    : data.filter((note) =>
        note.labels.some((label) => state.labels.indexOf(label) >= 0)
      );
};

const filterBySearchText = (state, data) =>
  data.filter((item) =>
    item.title.toLowerCase().includes(state.searchText.toLowerCase())
  );

export {
  compose,
  sortByDate,
  filterByPriority,
  filterByLabels,
  filterBySearchText,
};
