import styles from "./homepage.module.css";
import { Header, Note, SearchBar, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services";
import { useNotes } from "../../contexts";
export const Homepage = () => {
  SetDocumentTitle("NotAid | Homepage");
  const { notes } = useNotes();
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <div className={styles.notes_container}>
          <h3>All Notes</h3>
          {notes?.map((note) => {
            return <Note data={{ note }} />;
          })}
        </div>
      </div>
    </>
  );
};
