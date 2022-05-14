import styles from "./searchbar.module.css";
import { useRef, useState } from "react";
import { FiSearch, BiFilterAlt } from "../../services/icon-imports";
import { FilterModal } from "./filter-modal/FilterModal";
export const SearchBar = () => {
  const inputReference = useRef(null);
  const [showModal, setModal] = useState(false);
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
