import styles from "./filter-modal.module.css";
import { useNotes, useFilter } from "../../../contexts";
import { getAllLabels } from "../../../utils";

export const FilterModal = ({ data: { showModal, setModalState } }) => {
  const { notes } = useNotes();
  const labels = getAllLabels(notes);
  const { filterState, filterDispatch } = useFilter();
  const { priority, sortByDate, labels: filterLabels } = filterState;
  return (
    <div
      className={`${styles.modal_wrapper} ${
        showModal ? styles.show_modal : ""
      }`}
    >
      <div className={styles.sortby_container}>
        <div className={`text-end ${styles.clear_filter_container}`}>
          <button
            className="btn"
            onClick={() => {
              filterDispatch({ type: "CLEAR_FILTER" });
              setModalState((prev) => !prev);
            }}
          >
            Clear Filters
          </button>
        </div>

        <p className="p-t-md"> Sort By Date</p>
        <div className={`${styles.label} m-t-md`}>
          <label htmlFor="Oldest">Oldest</label>
          <input
            name="sortByDate"
            type="radio"
            id="Oldest"
            value={"Oldest"}
            checked={sortByDate === "Oldest"}
            onChange={(e) =>
              filterDispatch({
                type: "SET_DATE",
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className={`${styles.label}`}>
          <label htmlFor="Latest">Latest</label>
          <input
            name="sortByDate"
            type="radio"
            id="Latest"
            value={"Latest"}
            checked={sortByDate === "Latest"}
            onChange={(e) =>
              filterDispatch({
                type: "SET_DATE",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>

      <section className={styles.filterby_tags_container}>
        {labels.length > 0 ? <p>Filter By Labels</p> : ""}
        {labels?.map((label, index) => {
          return (
            <div key={index} className={`${styles.label}`}>
              <label htmlFor={label}>{label}</label>
              <input
                name={label}
                type="checkbox"
                id={label}
                value={label}
                onChange={() =>
                  filterDispatch({
                    type: "SET_LABEL",
                    payload: label,
                  })
                }
                checked={filterLabels?.find((filterLabel) =>
                  filterLabel === label ? true : false
                )}
              />
            </div>
          );
        })}
      </section>

      <section className={styles.filterby_priority_container}>
        <p>Filter By Priority</p>
        <div className={`${styles.label}`}>
          <label htmlFor="High">High</label>
          <input
            name="priority"
            type="radio"
            id="High"
            value={"High"}
            checked={priority === "High"}
            onChange={(e) =>
              filterDispatch({
                type: "SET_PRIORITY",
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className={`${styles.label}`}>
          <label htmlFor="Medium">Medium</label>
          <input
            name="priority"
            type="radio"
            id="Medium"
            value={"Medium"}
            checked={priority === "Medium"}
            onChange={(e) =>
              filterDispatch({
                type: "SET_PRIORITY",
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className={`${styles.label}`}>
          <label htmlFor="Basic">Basic</label>
          <input
            name="priority"
            type="radio"
            id="Basic"
            value={"Basic"}
            checked={priority === "Basic"}
            onChange={(e) =>
              filterDispatch({
                type: "SET_PRIORITY",
                payload: e.target.value,
              })
            }
          />
        </div>
      </section>
    </div>
  );
};
