import styles from "./archieve-page.module.css";
import React from "react";
import { SearchBar, Note, Header, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";
export const ArchievePage = () => {
  SetDocumentTitle("NotAid | Archieve");
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <section className={styles.notes_container}>
          <h3>Archieved Notes</h3>
          <Note />
          <Note />
          <Note />
        </section>
      </div>
    </>
  );
};
