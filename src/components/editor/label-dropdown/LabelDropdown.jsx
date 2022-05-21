import styles from "./label-dropdown.module.css";
import { useState, useEffect } from "react";
import { useEditor, useNotes } from "../../../contexts";
export const LabelDropdown = ({
  data: { isLabelDropdown, setLabelDropdown },
}) => {
  const { labels, setlabels } = useNotes();
  const { editorDispatch, editorState } = useEditor();
  const [labelInput, setLabelInput] = useState("");
  const addNewLabel = (e) => {
    e.stopPropagation();
    setlabels((prev) => [...prev, labelInput]);
    setLabelInput("");
  };
  const arr = editorState.editor.labels;
  const [addedLabels, setAddedLabels] = useState([...arr]);
  const labelChangeHandler = (e) => {
    if (e.target.checked) {
      setAddedLabels((prev) => [...prev, e.target.value]);
    } else {
      setAddedLabels((prev) => prev.filter((item) => item !== e.target.value));
    }
  };
  const isLabelChecked = (value) => {
    return arr.some((item) => item === value);
  };
  useEffect(() => {
    editorDispatch({ type: "ADD_LABELS", payload: [...addedLabels] });
  }, [addedLabels]);
  return (
    <div
      className={`${styles.labels_dropdown} ${
        isLabelDropdown ? styles.show_labels_dropdown : ""
      }`}
    >
      <div className={`${styles.create_label_container}`}>
        <input
          type="text"
          value={labelInput}
          id="label-input"
          placeholder="Add label"
          onChange={(e) => setLabelInput(e.target.value)}
        />
        <button
          className={`${styles.create_label_btn} btn btn-secondary`}
          onClick={(e) => addNewLabel(e)}
        >
          Create
        </button>
      </div>
      <ul>
        {labels?.map((label, index) => {
          return (
            <li key={index} className={`grid-container col-2`}>
              <input
                type="checkbox"
                className={styles.checkbox_input}
                id={label}
                value={label}
                onChange={(e) => labelChangeHandler(e)}
                checked={isLabelChecked(`${label}`)}
              />
              <div className={styles.label_container}>
                <label htmlFor={label}>
                  <span className="p-x-md flex-center">{label}</span>
                </label>{" "}
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className={`${styles.close_btn} btn btn-secondary`}
        onClick={() => setLabelDropdown((prev) => !prev)}
      >
        Close
      </button>
    </div>
  );
};
