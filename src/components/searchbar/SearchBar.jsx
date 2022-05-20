import styles from "./searchbar.module.css";
import { useRef, useState } from "react";
import { FiSearch, BiFilterAlt } from "../../services/icon-imports";
import { FilterModal } from "./filter-modal/FilterModal";
import { useFilter } from "../../contexts";
export const SearchBar = () => {
  const inputReference = useRef(null);
  const [showModal, setModal] = useState(false);
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      <div className={`${styles.searchbar_wrapper}`}>
        <div className={styles.search_icon_container}>
          <FiSearch onClick={() => inputReference.current.focus()} />
        </div>
        <input
          type="search"
          ref={inputReference}
          className={styles.search_input}
          placeholder="Search"
          value={filterState.searchText}
          onChange={(e) => {
            filterDispatch({ type: "SET_SEARCH", payload: e.target.value });
          }}
        />
        <div className={styles.filter_icon_container}>
          <BiFilterAlt onClick={() => setModal((prev) => !prev)} />
          <FilterModal
            data={{ showModal: showModal, setModalState: setModal }}
          />
        </div>
      </div>
    </>
  );
};
