// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Sidebar.module.css";
import Logo from "../assets/Logo 1.png";

function Sidebar({ username, title, handleLogout }) {
  return (
    <div>
      <aside className={Styles.Sidebar}>
        <div className={Styles.logo}>
          <Link to="/">
            <img alt="logo" src={Logo}></img>
          </Link>
          <h1>CarPoolit</h1>
        </div>

        <ul className={Styles.menuItem}>
          <li className={Styles.menuItemlink}>History</li>
          <li className={Styles.menuItemlink}>Edit my account</li>
          <li className={Styles.menuItemlink}>Support</li>
          <li className={Styles.menuItemlink}>About</li>
        </ul>

        <Link to="/">
          <button className={Styles.logoutButton} onClick={handleLogout}>
            {" "}
            Logout
          </button>
        </Link>
      </aside>
    </div>
  );
}

export default Sidebar;
