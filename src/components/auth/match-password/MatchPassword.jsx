import { useEffect, useState } from "react";
import styles from "./match-password.module.css";
export const MatchPassword = ({ data: { getPassword, value } }) => {
  const [passwordState, setPasswordState] = useState({
    isMatching: false,
    pwd: { initialPwd: value, confirmedPwd: value },
  });
  const {
    isMatching,
    pwd: { initialPwd, confirmedPwd },
  } = passwordState;

  const [showPwd, setShowPwd] = useState(false);
  useEffect(() => {
    if (initialPwd === confirmedPwd) {
      setPasswordState((prev) => ({ ...prev, isMatching: true }));
      getPassword(confirmedPwd);
    } else {
      setPasswordState((prev) => ({ ...prev, isMatching: false }));
    }
  }, [passwordState.pwd]);

  return (
    <div className={`text-start`}>
      <div
        className={`${styles.input_group} m-b-lg required ${initialPwd && "success"}`}
        success-message={`${initialPwd && "All looks good!"}`}
      >
        <label htmlFor="password">Password</label>
        <div className={`${styles.pwd_input}`}>
          <input
            type={`${showPwd ? "text" : "password"}`}
            id="password"
            value={passwordState.pwd.initialPwd}
            required
            onChange={(e) =>
              setPasswordState((prev) => {
                return {
                  ...prev,
                  pwd: { ...prev.pwd, initialPwd: e.target.value },
                };
              })
            }
          />
        </div>
      </div>
      <div
        className={`${styles.input_group} required  ${
          isMatching ? confirmedPwd && "success" : "error"
        }`}
        error-message={`Passwords should match.`}
        success-message={`${confirmedPwd && "All looks good!"}`}
      >
        <label htmlFor="confirm-password">Confirm Password</label>
        <div className={`${styles.pwd_input}`}>
          <input
            type={`${showPwd ? "text" : "password"}`}
            id="confirm-password"
            value={passwordState.pwd.confirmedPwd}
            required
            onChange={(e) =>
              setPasswordState((prev) => {
                return {
                  ...prev,
                  pwd: { ...prev.pwd, confirmedPwd: e.target.value },
                };
              })
            }
          />
          <div
            className={`${styles.show_pwd}`}
            onClick={() => setShowPwd((prev) => !prev)}
          >
            <i
              className={`fa-solid ${showPwd ? "fa-eye" : "fa-eye-slash"}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
