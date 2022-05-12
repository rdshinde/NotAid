import styles from "./note-color-picker.module.css";
import React from "react";
import { ColorPicker } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { IoMdClose } from "../../services/icon-imports";
export const NoteColorPicker = ({
  data: { isColorPicker, setColorPicker, setColor, color },
}) => {
  return (
    <div
      className={`${styles.color_picker} ${
        isColorPicker ? styles.show_color_picker : ""
      }`}
    >
      <div className={styles.close_color_picker_btn}>
        <button className="btn text-4 bold-md">
          <IoMdClose
            title="Close Color Pallate"
            onClick={() => setColorPicker((prev) => !prev)}
          />
        </button>
      </div>
      <ColorPicker
        width={270}
        height={80}
        color={color}
        onChange={setColor}
        hideHSV
        hideRGB
      />
    </div>
  );
};
