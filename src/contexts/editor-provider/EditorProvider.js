import { createContext, useContext, useState, useReducer } from "react";
import { editorReducer } from "./editorReducer";
const initialValue = {
  isNoteEditorActive: false,
  editor: {
    title: "",
    body: "",
    priority: "Basic",
    labels: [],
    createdAt: "",
    cardColor: "white",
    isPinned: false,
  },
};

const EditorContext = createContext(initialValue);

const useEditor = () => useContext(EditorContext);

const EditorProvider = ({ children }) => {
  const [editorState, editorDispatch] = useReducer(editorReducer, initialValue);
  return (
    <EditorContext.Provider value={{ editorDispatch, editorState }}>
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider, useEditor };
