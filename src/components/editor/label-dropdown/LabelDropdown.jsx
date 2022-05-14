import styles from "./label-dropdown.module.css";
import React from "react";

export const LabelDropdown = ({
  data: { isLabelDropdown, setLabelDropdown },
}) => {
  return (
    <div
      className={`${styles.labels_dropdown} ${
        isLabelDropdown ? styles.show_labels_dropdown : ""
      }`}
    >
      <div className={`${styles.create_label_container}`}>
        <input type="text" id="label-input" placeholder="Add label" />
        <button className={`${styles.create_label_btn} btn btn-secondary`}>
          Create{" "}
        </button>
      </div>
      <ul>
        <li>
          <label htmlFor="label1">
            <input type="checkbox" id="label1" />
            <span className="p-x-md">Label 1</span>
          </label>
        </li>
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
