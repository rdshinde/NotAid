const notesApiReducer = (state, { type, payload }) => {
  switch (type) {
    case "RESET_NOTES_API_DATA":
      return {
        ...state,
        apiData: {
          apiURL: "",
          apiMethod: "",
          postData: {
            note: {},
          },
        },
      };
    /**
     * NOTES ROUTES
     */
    case "GET_NOTES":
      return {
        ...state,
        apiData: {
          apiURL: "/api/notes",
          apiMethod: "GET",
        },
      };
    case "ADD_NEW_NOTE":
      return {
        ...state,
        apiData: {
          apiURL: "/api/notes",
          apiMethod: "POST",
          postData: {
            note: { ...payload },
          },
        },
      };
    case "EDIT_NOTE":
      return {
        ...state,
        apiData: {
          apiURL: `/api/notes/${payload.note_id}`,
          apiMethod: "POST",
          postData: {
            note: { ...payload.note },
          },
        },
      };
    case "DELETE_NOTE":
      return {
        ...state,
        apiData: {
          apiURL: `/api/notes/${payload}`,
          apiMethod: "DELETE",
        },
      };
    /**
     * ARCHIVE NOTES ROUTES
     */
    case "GET_ARCHIVED":
      return {
        ...state,
        apiData: {
          apiURL: `/api/archives`,
          apiMethod: "GET",
        },
      };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        apiData: {
          apiURL: `/api/notes/archives/${payload.note_id}`,
          apiMethod: "POST",
          postData: {
            note: { ...payload.note },
          },
        },
      };
    case "RESTORE_FROM_ARCHIVE":
      return {
        ...state,
        apiData: {
          apiURL: `/api/archives/restore/${payload}`,
          apiMethod: "POST",
        },
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...state,
        apiData: {
          apiURL: `/api/archives/delete/${payload}`,
          apiMethod: "DELETE",
        },
      };
    /**
     * TRASH NOTES ROUTES
     */
    case "GET_TRASH":
      return {
        ...state,
        apiData: {
          apiURL: `/api/trash`,
          apiMethod: "GET",
        },
      };
    case "MOVE_TO_TRASH":
      return {
        ...state,
        apiData: {
          apiURL: `/api/notes/trash/${payload.note_id}`,
          apiMethod: "POST",
          postData: {
            note: { ...payload.note },
          },
        },
      };
    case "RESTORE_FROM_TRASH":
      return {
        ...state,
        apiData: {
          apiURL: `/api/trash/restore/${payload}`,
          apiMethod: "POST",
        },
      };
    case "DELETE_FROM_TRASH":
      return {
        ...state,
        apiData: {
          apiURL: `/api/trash/delete/${payload}`,
          apiMethod: "DELETE",
        },
      };
    default:
      return { ...state };
  }
};

export { notesApiReducer };
