const editorReducer = (state, { type, payload }) => {
  switch (type) {
    case "RESET_EDITOR":
      return {
        ...state,
        editor: {
          title: "",
          body: "",
          priority: "medium",
          labels: [],
          createdAt: "",
          cardColor: "white",
        },
      };
    case "OPEN_EDITOR":
      return {
        ...state,
        isNoteEditorActive: true,
      };
    case "CLOSE_EDITOR":
      return {
        ...state,
        isNoteEditorActive: false,
        isNoteEdit: false,
      };
    case "ADD_TITLE":
      return {
        ...state,
        editor: { ...state.editor, title: payload },
      };
    case "ADD_BODY":
      return {
        ...state,
        editor: { ...state.editor, body: payload },
      };
    case "SET_PRIORITY":
      return {
        ...state,
        editor: { ...state.editor, priority: payload },
      };
    case "ADD_LABELS":
      return {
        ...state,
        editor: { ...state.editor, labels: [...payload] },
      };
    case "SET_CARD_COLOR":
      return {
        ...state,
        editor: { ...state.editor, cardColor: payload },
      };
    case "SET_CREATED_AT":
      return {
        ...state,
        editor: { ...state.editor, createdAt: payload },
      };
    case "EDIT":
      return {
        ...state,
        isNoteEditorActive: true,
        isNoteEdit: true,
        _id: payload.Id,
        editor: {
          ...state.editor,
          title: payload.title,
          body: payload.body,
          priority: payload.priority,
          labels: [...payload.labels],
          createdAt: payload.createdAt,
          cardColor: payload.cardColor,
        },
      };

    default:
      return { ...state };
  }
};
export { editorReducer };
