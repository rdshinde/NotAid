import styles from "./signup-form.module.css";
import { useState } from "react";
import { MatchPassword } from "../match-password/MatchPassword";
export const SignupForm = () => {
  const pwdChangeHandler = (pwd) => {
    setSignupCredentials((prev) => ({ ...prev, password: pwd }));
  };
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  return (
    <form className={`text-start ${styles.form}`}>
      <div className={`${styles.input_group} required`}>
        <label htmlFor="first-name"> First Name </label>
        <input type="text" id="first-name" required />
      </div>
      <div className={`${styles.input_group} required`}>
        <label htmlFor="last-name"> Last Name </label>
        <input type="text" id="last-name" required />
      </div>
      <div
        className={`${styles.input_group} required`}
        success-message={`All looks good!`}
      >
        <label htmlFor="email"> Email </label>
        <input type="email" id="email" required />
      </div>

      <MatchPassword
        data={{
          getPassword: pwdChangeHandler,
          value: signupCredentials.password,
        }}
      />
      <div className={`${styles.input_group} text-center`}>
        <button
          type="submit"
          onClick={(e) => e.stopPropagation()}
          className={`btn btn-primary`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
