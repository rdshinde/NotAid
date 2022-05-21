import styles from "./note.module.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useState, useEffect } from "react";
import {
  BsPin,
  BsFillPinFill,
  BsArchive,
  VscSymbolColor,
  BsTrash,
  MdOutlineModeEditOutline,
  MdOutlineRestore,
  notePinHandler,
} from "../../services";
import { useColor } from "react-color-palette";
import { textColorGetter, isNoteInList } from "../../utils/helper-functions";
import { NoteLabel } from "../note-label/NoteLabel";
import { NoteColorPicker } from "../note-color-picker/NoteColorPicker";
import { useNotes, useEditor } from "../../contexts";

export const Note = ({
  data: {
    note,
    note: {
      _id,
      title,
      body,
      cardColor,
      createdAt,
      labels,
      priority,
      isPinned,
      
    },
  },
}) => {
  TimeAgo.locale(en);
  const timeAgo = new TimeAgo("en-US");

  const { notesApiDispatch, archives, trash, setNotes } = useNotes();
  const { editorDispatch } = useEditor();
  const [isColorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useColor("hex", cardColor);

  const [backgroundcolor, setBackgroundColor] = useState({
    background: color.hex,
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
  useEffect(() => {
    let textColor = getContrastYIQ(cardColor);
    setBackgroundColor((prev) => ({
      ...prev,
      background: cardColor,
      textColor: textColor,
    }));
  }, [cardColor]);

  const pinHandler = () => {
    notePinHandler(note, setNotes);
  };

  return (
    <article
      className={`${styles.note_wrapper}`}
      style={{
        backgroundColor: backgroundcolor.background,
        color: backgroundcolor.textColor,
      }}
    >
      <section className={styles.note_header}>
        <div className={`flex-center gap-md`}>
          <h3>{title}</h3>
          <div
            className={`${styles.note_priority} ${priorityColorDecider()}
            text-offwhite text-4 bold-lg p-x-md text-center border-rounded-md`}
          >
            <span title={`Priority - ${priority}`}>{priority}</span>
          </div>
        </div>
        <div>
          {isPinned ? (
            <BsFillPinFill title="Remove From Pinned" onClick={pinHandler} />
          ) : (
            <BsPin title="Pin" onClick={pinHandler} />
          )}
        </div>
      </section>
      <section
        className={`${styles.note_body}`}
        dangerouslySetInnerHTML={{ __html: body }}
      ></section>
      <section className={styles.tags_container}>
        {labels?.map((label, index) => {
          return <NoteLabel key={index} data={{ labelName: label }} />;
        })}
      </section>
      <section className={styles.note_footer}>
        <div className={styles.date_container}>
          <span className="text-4">Created </span>
          <span className="bold-lg">{`${timeAgo.format(
            new Date(createdAt * 1000)
          )}`}</span>
        </div>
        <div className={`${styles.action_btns_container} text-3`}>
          {isNoteInList(_id, archives) || isNoteInList(_id, trash) ? (
            ""
          ) : (
            <span>
              <MdOutlineModeEditOutline
                title="Edit"
                onClick={editActionHandler()}
              />
            </span>
          )}
          <span>
            <VscSymbolColor
              title="Add Color"
              onClick={() => setColorPicker((prev) => !prev)}
            />
          </span>
          {isNoteInList(_id, trash) ? "" : <span>{archiveActionHander()}</span>}
          {isNoteInList(_id, trash) ? (
            <span>
              <MdOutlineRestore
                title="Restore from Trash"
                onClick={() =>
                  notesApiDispatch({
                    type: "RESTORE_FROM_TRASH",
                    payload: _id,
                  })
                }
              />
            </span>
          ) : (
            ""
          )}
          <span>
            <BsTrash title="Delete" onClick={deleteActionHandler()} />
          </span>
          <NoteColorPicker
            data={{
              color: color,
              setColor: setColor,
              isColorPicker: isColorPicker,
              setColorPicker: setColorPicker,
            }}
          />
        </div>
      </section>
    </article>
  );

  function archiveActionHander() {
    return isNoteInList(_id, archives) ? (
      <MdOutlineRestore
        title="Restore from archives"
        onClick={() =>
          notesApiDispatch({
            type: "RESTORE_FROM_ARCHIVE",
            payload: _id,
          })
        }
      />
    ) : (
      <BsArchive
        title="Add To Archive"
        onClick={() =>
          notesApiDispatch({
            type: "ADD_TO_ARCHIVE",
            payload: { note_id: _id, note: { ...note } },
          })
        }
      />
    );
  }

  function priorityColorDecider() {
    return priority === "Basic"
      ? "bg-success"
      : priority === "Medium" || priority === "medium"
      ? "bg-warning"
      : "bg-danger";
  }

  function editActionHandler() {
    return () => {
      editorDispatch({
        type: "EDIT",
        payload: {
          Id: _id,
          title: title,
          body: body,
          priority: priority,
          labels: labels,
          createdAt: createdAt,
          cardColor: cardColor,
        },
      });
    };
  }

  function deleteActionHandler() {
    return () => {
      if (isNoteInList(_id, archives)) {
        notesApiDispatch({
          type: "DELETE_FROM_ARCHIVE",
          payload: _id,
        });
      } else if (isNoteInList(_id, trash)) {
        notesApiDispatch({
          type: "DELETE_FROM_TRASH",
          payload: _id,
        });
      } else {
        notesApiDispatch({
          type: "MOVE_TO_TRASH",
          payload: { note_id: _id, note: { ...note } },
        });
      }
    };
  }
};
