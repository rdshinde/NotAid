import styles from "./editor.module.css";
import { IoMdClose, VscSymbolColor } from "../../services/icon-imports";
import { useState, useEffect } from "react";
import { ReactQuillEditor } from "./react-quil-editor/ReactQuillEditor";
import { NoteColorPicker } from "../note-color-picker/NoteColorPicker";
import { useColor } from "react-color-palette";
import { textColorGetter } from "../../utils/helper-functions";
import { NoteLabel } from "../note-label/NoteLabel";
import { LabelsInput } from "./labels-input/LabelsInput";

export const Editor = () => {
  const [editorText, setEditorText] = useState(``);
  const [isColorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useColor("hex", "#fff");
  const [backgroundcolor, setBackgroundColor] = useState({
    background: "#fff",
    textColor: "black",
  });
  const getContrastYIQ = textColorGetter();
  useEffect(() => {
    let textColor = getContrastYIQ(color.hex);
    setBackgroundColor((prev) => ({
      ...prev,
      background: color.hex,
      textColor: textColor,
    }));
  }, [color]);

  return (
    <div className={`${styles.editor_wrapper} shadow-md centered`}>
      <div className={`${styles.close_editor} text-3`}>
        <IoMdClose title="Close" />
      </div>
      <section className={`${styles.editor_header}`}>
        <div className={`${styles.editor_title_input_container}`}>
          <input
            type="text"
            placeholder="Add Title"
            autoFocus
            className="text-3"
          />
        </div>
        <div className={`${styles.priority_input_container} `}>
          <select name="priority" id="priority" className="text-3">
            <option value="select-priority" defaultValue={true} disabled>
              Add Priority
            </option>
            <option value="Basic">Basic</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <LabelsInput />
      </section>
      <section className={`${styles.react_quill_container}`}>
        <ReactQuillEditor
          data={{ value: editorText, setValue: setEditorText }}
        />
      </section>
      <section className={styles.labels_container}>
        <NoteLabel data={{ labelName: "Work" }} />
      </section>
      <section
        className={`${styles.add_color_container}`}
        style={{
          backgroundColor: backgroundcolor.background,
          color: backgroundcolor.textColor,
        }}
      >
        <span
          className={`text-4 bold-lg ${styles.color_picker_btn}`}
          onClick={() => setColorPicker((prev) => !prev)}
        >
          <span className="m-x-md">Add BackgroundColor</span>
          <VscSymbolColor title="Add Background Color" />
        </span>
        <NoteColorPicker
          data={{
            color: color,
            setColor: setColor,
            isColorPicker: isColorPicker,
            setColorPicker: setColorPicker,
          }}
        />
      </section>

      <section className={`${styles.note_cta_btns_container}`}>
        <button
          type="button"
          title="Close"
          className={`${styles.close_btn} btn`}
        >
          Close
        </button>
        <button
          type="submit"
          title="Save Note"
          className={`${styles.save_btn} btn`}
        >
          Save
        </button>
      </section>
    </div>
  );
};
