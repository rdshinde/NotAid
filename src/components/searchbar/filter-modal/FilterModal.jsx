import styles from "./filter-modal.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FilterModal = ({ data: { showModal, setModalState } }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      className={`${styles.modal_wrapper} ${
        showModal ? styles.show_modal : ""
      }`}
    >
      <div className={styles.sortby_container}>
        <div className={`text-end ${styles.clear_filter_container}`}>
          <button className="btn">Clear Filters</button>
        </div>
        <label htmlFor="sortbydate">Sort By Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className={styles.datepicker}
          id="sortbydate"
        />
      </div>
      <div className={styles.filterby_tags_container}>
        <p>Filter By tags</p>
        <label htmlFor="label1">
          <input name="label" type="checkbox" id="label1" /> Label 1
        </label>
        <label htmlFor="label2">
          <input name="label" type="checkbox" id="label2" /> Label 1
        </label>
      </div>
      <div className={styles.filterby_priority_container}>
        <p>Filter By Priority</p>
        <label htmlFor="priority1">
          <input name="priority" type="radio" id="priority1" /> High
        </label>
        <label htmlFor="priority2">
          <input name="priority" type="radio" id="priority2" /> Medium
        </label>
        <label htmlFor="priority3">
          <input name="priority" type="radio" id="priority3" /> Low
        </label>
      </div>
    </div>
  );
};
