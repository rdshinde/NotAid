import styles from "./labels-input.module.css";
import { useState } from "react";
import { BsChevronUp, BsChevronDown } from "../../../services/icon-imports";
import { LabelDropdown } from "../label-dropdown/LabelDropdown";

export const LabelsInput = () => {
  const [isLabelDropdown, setLabelDropdown] = useState(false);

  return (
    <div className={`${styles.add_labels_container}`}>
      <button
        className={`${styles.add_label_btn} btn text-3`}
        onClick={() => setLabelDropdown((prev) => !prev)}
      >
        Add Label
      </button>
      <span
        className={`text-5 text-secondary`}
        onClick={() => setLabelDropdown((prev) => !prev)}
      >
        {isLabelDropdown ? (
          <BsChevronUp />
        ) : (
          <BsChevronDown title="Add Labels" />
        )}
      </span>
      <LabelDropdown
        data={{
          isLabelDropdown: isLabelDropdown,
          setLabelDropdown: setLabelDropdown,
        }}
      />
    </div>
  );
};
