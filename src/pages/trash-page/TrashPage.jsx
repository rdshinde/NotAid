import styles from "./trash-page.module.css";
import React from "react";
import { SearchBar, Note, Header, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services";
import { useNotes } from "../../contexts";
export const TrashPage = () => {
  SetDocumentTitle("NotAid | Trash");
  const { trash } = useNotes();
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <section className={`${styles.notes_container} text-default`}>
          <h3>Trash</h3>
          {trash?.map((note) => {
            return <Note key={note._id} data={{ note }} />;
          })}
        </section>
      </div>
    </>
  );
};
