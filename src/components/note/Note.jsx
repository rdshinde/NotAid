import styles from "./note.module.css";

import { useState, useEffect } from "react";
import {
  BsPin,
  BsArchive,
  VscSymbolColor,
  BsTrash,
  MdOutlineModeEditOutline,
} from "../../services/icon-imports";
import { useColor } from "react-color-palette";
import { textColorGetter } from "../../utils/helper-functions";
import { NoteLabel } from "../note-label/NoteLabel";
import { NoteColorPicker } from "../note-color-picker/NoteColorPicker";

export const Note = () => {
  const [isColorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useColor("hex", "#fff");
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
          <h3>Note Title</h3>
          <div
            className={`${styles.note_priority} bg-warning text-offwhite text-4 bold-lg p-x-md text-center border-rounded-md`}
          >
            <span title="Priority - Medium">Medium</span>
          </div>
        </div>
        <div>
          <BsPin title="Pin" />
        </div>
      </section>
      <section className={styles.note_body}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          voluptates quos totam incidunt illo libero necessitatibus expedita qui
        </p>
      </section>
      <section className={styles.tags_container}>
        <NoteLabel data={{ labelName: "Work" }} />
      </section>
      <section className={styles.note_footer}>
        <div className={styles.date_container}>
          <span className="text-4">Created At </span>
          <span className="bold-lg">01/01/2022</span>
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
