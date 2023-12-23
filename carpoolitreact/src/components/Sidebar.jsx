import React from "react";
import { useState } from "react";
import Styles from "./Sidebar.module.css";

function Sidebar({ username, title, handlelogout }) {
  const [clickedLink1, setClickedLink1] = useState(1); // Track clicked link, default to 0
  const [showMenu, setShowMenu] = useState(false); // Track whether the menu should be displayed
  const LogoPath =
    "https://s3-alpha-sig.figma.com/img/53fc/ae76/c9126dbe0dfb0f7bcc934ea40e2e042c?Expires=1702857600&Signature=Wg3eIH3KWeEsU4Fifp2RgCZKRaOC59Vl1S8-ngk0tgriG17YQrhtoW~SoRFl5jqPV-BliGJ5Viphj-nKpzRNegpCzUIs9FtrkkmDlgfnOEUudR9-RvZ4qkjDv9hCV3RW6Oc7pRDWQtSfWMfugPd6IQxnCy6FPRFn8dDrNG7uU0-VjINHJKXCqD3YtA-evWUiyXI2ehIVU6LQVVNKyn0JKNqzEv5u~RxPJJKNGgi9lVcgzOTpMtl8xpssUP6rZNIaWSq8MbEJ2Q34Zvsb--HafZK~hCZz97Y3Yi7~DieW8it-7bymFDtCHzN5iMN90u2H7m7vSAAYzQ3AqxkRIxXwSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  //handle sidebar links
  const handleLink1Click = (index) => {
    setClickedLink1(1);
    setShowMenu(!showMenu);
  };

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <aside className={Styles.Sidebar}>
        <div className={Styles.logo}>
          <img alt="logo" src={LogoPath}></img>
        </div>
        <div className={Styles.userInfo}>
          {/* Display user information */}
          <p className={Styles.userInfoLine}>{username}</p>
          <p className={Styles.userInfoLine}>{title}</p>
        </div>
        <ul className={Styles.menuItem}>
          <li className={Styles.menuItemlink}>History</li>
          <li className={Styles.menuItemlink}>Edit my account</li>
          <li className={Styles.menuItemlink}>Support</li>
          <li className={Styles.menuItemlink}>about</li>
        </ul>
        <div className={Styles.logoutButton} onClick={handlelogout}>
          <p>Logout</p>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
