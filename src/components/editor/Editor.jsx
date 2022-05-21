import styles from "./editor.module.css";
import { IoMdClose, VscSymbolColor } from "../../services";
import { useState, useEffect } from "react";
import { ReactQuillEditor } from "./react-quil-editor/ReactQuillEditor";
import { NoteColorPicker } from "../note-color-picker/NoteColorPicker";
import { useColor } from "react-color-palette";
import { textColorGetter, Toast } from "../../utils";
import { NoteLabel } from "../note-label/NoteLabel";
import { LabelsInput } from "./labels-input/LabelsInput";
import { useEditor, useNotes } from "../../contexts";

export const Editor = () => {
  const { notesApiDispatch } = useNotes();
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
  const {
    editorDispatch,
    editorState,
    editorState: {
      editor: { labels },
    },
  } = useEditor();
  useEffect(() => {
    editorDispatch({
      type: "ADD_BODY",
      payload: editorText,
    });
  }, [editorText]);

  useEffect(() => {
    editorDispatch({
      type: "SET_CARD_COLOR",
      payload: backgroundcolor.background,
    });
    editorDispatch({
      type: "SET_CREATED_AT",
      payload: Math.floor(Date.now() / 1000),
    });
  }, [backgroundcolor]);
  useEffect(() => {
    if (!editorState.isNoteEdit) {
      editorDispatch({
        type: "RESET_EDITOR",
      });
    } else {
      setEditorText(editorState.editor.body);
      setBackgroundColor((prev) => ({
        ...prev,
        background: editorState.editor.cardColor,
      }));
    }
  }, []);
  const editorSubmitHandler = (e) => {
    e.stopPropagation();
    if (editorState.editor.title && editorState.editor.body) {
      if (editorState.isNoteEdit) {
        notesApiDispatch({
          type: "EDIT_NOTE",
          payload: {
            note_id: editorState._id,
            note: { ...editorState.editor },
          },
        });
      } else {
        notesApiDispatch({
          type: "ADD_NEW_NOTE",
          payload: { ...editorState.editor },
        });
      }
      editorDispatch({ type: "CLOSE_EDITOR" });
    } else {
      Toast({ type: "warning", msg: "Note's title and body is required!" });
    }
  };
  return (
    <div className={`${styles.editor_wrapper} shadow-md centered`}>
      <div className={`${styles.close_editor} text-3`}>
        <IoMdClose
          title="Close"
          onClick={() => editorDispatch({ type: "CLOSE_EDITOR" })}
        />
      </div>
      <section className={`${styles.editor_header}`}>
        <div className={`${styles.editor_title_input_container}`}>
          <input
            type="text"
            placeholder="Add Title"
            autoFocus
            className="text-3"
            value={editorState?.editor?.title}
            onChange={(e) =>
              editorDispatch({ type: "ADD_TITLE", payload: e.target.value })
            }
          />
        </div>
        <div className={`${styles.priority_input_container} `}>
          <select
            name="priority"
            id="priority"
            className="text-3"
            value={editorState?.editor?.priority}
            onChange={(e) =>
              editorDispatch({ type: "SET_PRIORITY", payload: e.target.value })
            }
          >
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
        {labels.map((label, index) => {
          return <NoteLabel key={index} data={{ labelName: label }} />;
        })}
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
          style={{
            backgroundColor: backgroundcolor.background,
            color: backgroundcolor.textColor,
          }}
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
          onClick={() => editorDispatch({ type: "CLOSE_EDITOR" })}
        >
          Close
        </button>
        <button
          type="submit"
          title="Save Note"
          className={`${styles.save_btn} btn`}
          onClick={(e) => editorSubmitHandler(e)}
        >
          {editorState.isNoteEdit ? "Save Changes" : "Save"}
        </button>
      </section>
    </div>
  );
};
