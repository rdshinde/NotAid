import styles from "./homepage.module.css";
import { Header, Note, SearchBar, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services";
import { useNotes, useFilter } from "../../contexts";
export const Homepage = () => {
  SetDocumentTitle("NotAid | Homepage");
  const { notes } = useNotes();
  const { filteredNotes, filterState } = useFilter();
  const isFilterApplied = filterState?.isFilterApplied;
  const isPinnedNotesAvailable = notes.some((note) => note.isPinned);
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
          <section>
            {isPinnedNotesAvailable ? (
              <div className={styles.notes_container}>
                <h3>Pinned Notes</h3>
                {notes?.map((note) => {
                  if (note.isPinned) {
                    return <Note data={{ note }} />;
                  }
                })}
              </div>
            ) : (
              ""
            )}

            <div className={styles.notes_container}>
              <h3>All Notes</h3>
              {notes?.map((note) => {
                if (!note.isPinned) {
                  return <Note data={{ note }} />;
                }
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};
