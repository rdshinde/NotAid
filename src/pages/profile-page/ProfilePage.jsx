import styles from "./profile-page.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";
import { Header, Sidebar } from "../../components";

export const ProfilePage = () => {
  SetDocumentTitle("NotAid | Profile");
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <section className={styles.notes_container}>
          <img
            src="https://bermuda-css.netlify.app/assets/avatar.png"
            className="avatar-lg"
            alt=""
          />
          <h1>Hello Rishikesh,</h1>
          <div className={`m-t-md p-md`}>
            <Link
              to={`/home`}
              className={`${styles.home_btn} btn btn-default m-md`}
            >
              Back to Home
            </Link>
            <button className={`${styles.logout_btn} btn btn-danger m-md`}>
              Logout
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
