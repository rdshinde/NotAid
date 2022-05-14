import styles from "./sidebar-nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

import {
  AiOutlineHome,
  MdLabelOutline,
  BsArchive,
  BsTrash,
  CgProfile,
  IoMdAdd,
} from "../../../services/icon-imports";
export const SidebarNav = () => {
  const isLinkActive = ({ isActive }) => {
    return isActive
      ? `${styles.nav_link} ${styles.active_link}`
      : `${styles.nav_link}`;
  };
  return (
    <nav className={styles.sidebar_nav}>
      <ul>
        <NavLink to={"/home"} className={isLinkActive}>
          <li>
            <span>
              <AiOutlineHome title="Home" />
            </span>
            <span className={styles.nav_link_title}>Home</span>
          </li>
        </NavLink>
        <NavLink to={"/labels"} className={isLinkActive}>
          <li>
            <span>
              <MdLabelOutline title="Labels" />
            </span>
            <span className={styles.nav_link_title}>Labels</span>
          </li>
        </NavLink>
        <NavLink to={"/archieve"} className={isLinkActive}>
          <li>
            <span>
              <BsArchive title="Archieve" />
            </span>
            <span className={styles.nav_link_title}>Archieve</span>
          </li>
        </NavLink>
        <NavLink to={"/trash"} className={isLinkActive}>
          <li>
            <span>
              <BsTrash title="Trash" />
            </span>
            <span className={styles.nav_link_title}>Trash</span>
          </li>
        </NavLink>
        <NavLink to={"/profile"} className={isLinkActive}>
          <li>
            <span>
              <CgProfile title="Profile" />
            </span>
            <span className={styles.nav_link_title}>Profile</span>
          </li>
        </NavLink>
      </ul>
      <div className={styles.cta_btn_container}>
        <button
          className={`${styles.create_note_btn} btn flex-center gap-md text-offwhite`}
        >
          <span>Add New Note</span>
        </button>
      </div>
      <div
        className={`${styles.floating_cta_btn} p-md bg-primary text-offwhite border-rounded-full flex-center`}
      >
        <IoMdAdd title={`Add New Note`} className="text-offwhite" />
      </div>
    </nav>
  );
};
