import styles from "./labels-page.module.css";
import React from "react";
import { SearchBar, Note, Header, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";
export const LabelsPage = () => {
  SetDocumentTitle("NotAid | Labels");
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <SearchBar />
        <div className={styles.notes_container}>
          <section>
            <div className={styles.label_name}>
              <h4>Label 1</h4>
            </div>
            <Note />
          </section>
          <section>
            <div className={styles.label_name}>
              <h4>Label 2</h4>
            </div>
            <Note />
          </section>
          <section>
            <div className={styles.label_name}>
              <h4>Label 2</h4>
            </div>
            <Note />
          </section>
        </div>
      </div>
    </>
  );
};
