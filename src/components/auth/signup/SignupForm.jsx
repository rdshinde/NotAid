import styles from "./signup-form.module.css";
import { useState } from "react";
import { MatchPassword } from "../match-password/MatchPassword";
import { useAuth } from "../../../contexts";
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
  const { isLoaderLoading, signupHandler } = useAuth();
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupCredentials);
    setSignupCredentials({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
  };
  return (
    <form
      className={`text-start ${styles.form}`}
      onSubmit={(e) => signupSubmitHandler(e)}
    >
      <div className={`${styles.input_group} required`}>
        <label htmlFor="first-name"> First Name </label>
        <input
          type="text"
          id="first-name"
          required
          value={signupCredentials.firstName}
          onChange={(e) =>
            setSignupCredentials((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />
      </div>
      <div className={`${styles.input_group} required`}>
        <label htmlFor="last-name"> Last Name </label>
        <input
          type="text"
          id="last-name"
          required
          value={signupCredentials.lastName}
          onChange={(e) =>
            setSignupCredentials((prev) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
        />
      </div>
      <div
        className={`${styles.input_group} required`}
        success-message={`All looks good!`}
      >
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          required
          value={signupCredentials.email}
          onChange={(e) =>
            setSignupCredentials((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
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
