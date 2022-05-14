import styles from "./sidebar.module.css";
import { AiOutlineLogout } from "../../services/icon-imports";
import { Link } from "react-router-dom";
import { SidebarNav } from "./sidebar-nav/SidebarNav";
export const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar_wrapper}>
        <SidebarNav />
        <section className={`${styles.sidebar_footer}`}>
          <div className={styles.logout_wrapper}>
            <Link to={`/profile`} className={styles.link}>
              <img
                src="https://bermuda-css.netlify.app/assets/avatar.png"
                className={`${styles.profile_avatar} avatar`}
                alt=""
              />
              <span className="text-4 bold-lg text-default">
                Rishikesh Shinde
              </span>
            </Link>
            <button className="btn text-3 text-default">
              <AiOutlineLogout title="Logout" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
