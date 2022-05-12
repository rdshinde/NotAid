import styles from "./login-form.module.css";
import { useState } from "react";

export const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <form className={`text-start ${styles.form}`}>
        <div className={`${styles.input_group} required `} success-message="">
          <label htmlFor="email-id"> Email </label>
          <input type="email" id="email-id" required />
        </div>
        <div
          className={`${styles.input_group} required`}
          error-message={`Passwords should match.`}
          success-message={`All looks good!`}
        >
          <label htmlFor="confirm-password">Password</label>
          <div className={styles.pwd_input}>
            <input
              type={`${showPwd ? "text" : "password"}`}
              id="confirm-password"
              required
            />
            <div
              className={`${styles.show_pwd} centered`}
              onClick={() => setShowPwd((prev) => !prev)}
            >
              <i
                className={`fa-solid ${showPwd ? "fa-eye" : "fa-eye-slash"}`}
              ></i>
            </div>
          </div>
        </div>
        <div className={`${styles.input_group} text-center`}>
          <button
            type="submit"
            onClick={(e) => e.stopPropagation()}
            className={`submit-btn btn btn-primary`}
          >
            Submit
          </button>
        </div>
        <div className={`text-center`}>
          <button
            type="button"
            className={`btn btn-link`}
            onClick={(e) => {
              e.stopPropagation();
              setLoginCredentials({
                email: "test@gmail.com",
                password: "Test@123",
              });
            }}
          >
            Use Guest Credentials
          </button>
        </div>
      </form>
    </>
  );
};
