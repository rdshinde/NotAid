import { Link } from "react-router-dom";
import styles from "./landing-page.module.css";

export const LandingPage = () => {
  return (
    <div className={`${styles.homepage_container}`}>
      <section className={`${styles.hero_text_container}`}>
        <div className={`${styles.logo_container}`}>
          <h1>
            <span className={`${styles.title_first} text-default`}>Not</span>
            <span className={`${styles.title_second} text-primary`}>Aid</span>
          </h1>
          <small
            className={`${styles.logo_subtitle} text-5 bold-lg text-secondary`}
          >
            Let's Note It Down!
          </small>
        </div>
        <div className={`${styles.hero_text}`}>
          <h2 className="text-secondary">
            Meet your modern <br />
            <span className={`text-default`}>Note Taking App.</span>
          </h2>
          <p className={`${styles.hero_description} text-3 bold-md p-t-xl`}>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
          <div className={`${styles.hero_btn_container}`}>
            <Link
              to={`/auth/signup`}
              className={`${styles.hero_btn} btn shadow-sm`}
            >
              Join now
            </Link>
            <Link
              to={`/auth/login`}
              className={`${styles.login_link} btn text-default`}
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </section>
      <section className={`${styles.hero_img_container} flex-center`}>
        <img src="hero.svg" className={`img-responsive`} alt="hero" />
      </section>
    </div>
  );
};
