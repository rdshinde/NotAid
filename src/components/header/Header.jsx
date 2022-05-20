import styles from "./header.module.css";
import { GiNotebook } from "../../services/icon-imports";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
export const Header = () => {
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  return (
    <>
      <div className={`${styles.header_wrapper}`}>
        <div className={`${styles.header_logo_container}`}>
          <Link
            to={isUserLoggedIn ? `/home` : "/auth/login"}
            className={styles.link}
          >
            <h1>
              <span className="text-default m-l-md">
                <GiNotebook />
              </span>
              <span className={`${styles.title_first} text-default`}> Not</span>
              <span className={`${styles.title_second} text-primary`}>Aid</span>
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};
