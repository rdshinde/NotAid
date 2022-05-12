import styles from "./error-page.module.css";
import React from "react";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";
import { Header, Sidebar } from "../../components";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  SetDocumentTitle("NotAid | Page Not Found! ");
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <section className={styles.notes_container}>
          <h1>Error 404! </h1>
          <h2>Page Not Found!</h2>
          <div className={`m-t-md p-md`}>
            <Link
              to={`/home`}
              className={`${styles.home_btn} btn btn-default m-md`}
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
