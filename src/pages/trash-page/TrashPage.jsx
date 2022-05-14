import styles from "./trash-page.module.css";
import React from "react";
import { SearchBar, Note, Header, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";
export const TrashPage = () => {
  SetDocumentTitle("NotAid | Trash");
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <section className={styles.notes_container}>
          <h3>Trash</h3>
          <Note />
        </section>
      </div>
    </>
  );
};
