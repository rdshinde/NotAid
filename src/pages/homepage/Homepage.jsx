import styles from "./homepage.module.css";
import React from "react";
import { Header, Note, SearchBar, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";

export const Homepage = () => {
  SetDocumentTitle("NotAid | Homepage");
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <div className={styles.notes_container}>
          <h3>All Notes</h3>
          <Note />
        </div>
      </div>
    </>
  );
};
