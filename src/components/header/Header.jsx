import styles from "./header.module.css";
import { GiNotebook } from "../../services/icon-imports";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className={`${styles.header_wrapper}`}>
        <div className={`${styles.header_logo_container}`}>
          <Link to={`/home`} className={styles.link}>
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
