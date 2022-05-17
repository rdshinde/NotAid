import styles from "./archieve-page.module.css";
import React from "react";
import { SearchBar, Note, Header, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services";
import { useNotes } from "../../contexts";
export const ArchievePage = () => {
  SetDocumentTitle("NotAid | Archieve");
  const { archives } = useNotes();
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <section className={styles.notes_container}>
          <h3>Archieved Notes</h3>
          {archives?.map((note) => {
            return <Note key={note._id} data={{ note }} />;
          })}
        </section>
      </div>
    </>
  );
};
