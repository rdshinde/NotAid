import styles from "./note-label.module.css";
import React from "react";

export const NoteLabel = ({ data: { labelName } }) => {
  return (
    <div className={styles.note_label}>
      <span title={`Label - ${labelName}`}>{labelName}</span>
    </div>
  );
};
