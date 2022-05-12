import styles from "./auth-page.module.css";
import React from "react";
import { Header, LoginForm, SignupForm } from "../../components";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

export const AuthPage = () => {
  const { pathname } = useLocation();
  const isLinkActive = ({ isActive }) => {
    return isActive ? `btn btn-primary` : `btn btn-secondary`;
  };
  return (
    <>
      <Header />
      <div className={`${styles.form_wrapper} shadow-md`}>
        <section className={`${styles.auth_btns_container}`}>
          <NavLink to={`/auth/login`} className={isLinkActive}>
            Login
          </NavLink>
          <NavLink to={`/auth/signup`} className={isLinkActive}>
            Signup
          </NavLink>
        </section>
        <section>
          {pathname === "/auth/login" ? <LoginForm /> : <SignupForm />}
        </section>
      </div>
    </>
  );
};
