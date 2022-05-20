import styles from "./homepage.module.css";
import { Header, Note, SearchBar, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services";
import { useNotes, useFilter } from "../../contexts";
export const Homepage = () => {
  SetDocumentTitle("NotAid | Homepage");
  const { notes } = useNotes();
  const { filteredNotes, filterState } = useFilter();
  const isFilterApplied = filterState?.isFilterApplied;
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        {isFilterApplied ? (
          <div className={styles.notes_container}>
            <h3>Filtered Notes</h3>
            {filteredNotes?.map((note) => {
              return <Note data={{ note }} />;
            })}
          </div>
        ) : (
          <div className={styles.notes_container}>
            <h3>All Notes</h3>
            {notes?.map((note) => {
              return <Note data={{ note }} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
