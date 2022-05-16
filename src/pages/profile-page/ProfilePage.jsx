import styles from "./profile-page.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { SetDocumentTitle } from "../../services/set-title/SetDocumentTitle";
import { Header, Sidebar } from "../../components";
import Jdenticon from "react-jdenticon";
import { useAuth } from "../../contexts/auth/AuthProvider";

export const ProfilePage = () => {
  SetDocumentTitle("NotAid | Profile");
  const { userAuthState, logoutHandler } = useAuth();
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
        <section className={styles.notes_container}>
          <Jdenticon
            size="56"
            value={`${userAuthState?.user?.firstName} ${userAuthState?.user?.lastName}`}
          />
          <h1>
            {`${userAuthState?.user?.firstName} ${userAuthState?.user?.lastName}`}
            ,
          </h1>
          <div className={`m-t-md p-md`}>
            <Link
              to={`/home`}
              className={`${styles.home_btn} btn btn-default m-md`}
            >
              Back to Home
            </Link>
            <button
              className={`${styles.logout_btn} btn btn-danger m-md`}
              onClick={() => logoutHandler(userAuthState?.user?.firstName)}
            >
              Logout
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
