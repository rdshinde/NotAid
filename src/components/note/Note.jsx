import styles from "./note.module.css";

import { useState, useEffect } from "react";
import {
  BsPin,
  BsArchive,
  VscSymbolColor,
  BsTrash,
  MdOutlineModeEditOutline,
} from "../../services";
import { useColor } from "react-color-palette";
import { textColorGetter } from "../../utils";
import { NoteLabel } from "../note-label/NoteLabel";
import { NoteColorPicker } from "../note-color-picker/NoteColorPicker";

export const Note = ({
  data: {
    note: { title, body, cardColor, createdAt, labels, priority },
  },
}) => {
  const [isColorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useColor("hex", cardColor);
  const [backgroundcolor, setBackgroundColor] = useState({
    background: "fff",
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
            className={`${styles.note_priority} ${
              priority === "Basic"
                ? "bg-success"
                : priority === "Medium"|| "medium"
                ? "bg-warning"
                : "bg-danger"
            } text-offwhite text-4 bold-lg p-x-md text-center border-rounded-md`}
          >
            <span title={`Priority - ${priority}`}>{priority}</span>
          </div>
        </div>
        <div>
          <BsPin title="Pin" />
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
          <span className="text-4">Created At </span>
          <span className="bold-lg">{createdAt}</span>
        </div>
        <div className={`${styles.action_btns_container} text-3`}>
          <span>
            <MdOutlineModeEditOutline title="Edit" />
          </span>
          <span>
            <VscSymbolColor
              title="Add Color"
              onClick={() => setColorPicker((prev) => !prev)}
            />
          </span>
          <span>
            <BsArchive title="Add To Archiev" />
          </span>
          <span>
            <BsTrash title="Delete" />
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
};
