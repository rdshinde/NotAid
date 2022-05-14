import styles from "./sidebar.module.css";
import { AiOutlineLogout } from "../../services";
import { Link } from "react-router-dom";
import { SidebarNav } from "./sidebar-nav/SidebarNav";
import { useAuth } from "../../contexts";
import Jdenticon from "react-jdenticon";
export const Sidebar = () => {
  const { logoutHandler, userAuthState } = useAuth();
  return (
    <>
      <div className={styles.sidebar_wrapper}>
        <SidebarNav />
        <section className={`${styles.sidebar_footer}`}>
          <div className={styles.logout_wrapper}>
            <Link to={`/profile`} className={styles.link}>
              <div className={` m-x-md`}>
                <Jdenticon
                  size="48"
                  value={`${userAuthState?.user?.firstName} ${userAuthState?.user?.lastName}`}
                />
              </div>
              <span className="text-4 bold-lg text-default">
                {`${userAuthState?.user?.firstName} ${userAuthState?.user?.lastName}`}
              </span>
            </Link>
            <button
              className="btn text-3 text-default"
              onClick={() => logoutHandler(userAuthState?.user?.firstName)}
            >
              <AiOutlineLogout title="Logout" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
