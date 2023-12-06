import React, { useState } from "react";
import styles from "./Login.module.css";
import { createBrowserHistory } from "history";

const Login = ({ onLogin }) => {
  const LogoPath =
    "https://s3-alpha-sig.figma.com/img/53fc/ae76/c9126dbe0dfb0f7bcc934ea40e2e042c?Expires=1702857600&Signature=Wg3eIH3KWeEsU4Fifp2RgCZKRaOC59Vl1S8-ngk0tgriG17YQrhtoW~SoRFl5jqPV-BliGJ5Viphj-nKpzRNegpCzUIs9FtrkkmDlgfnOEUudR9-RvZ4qkjDv9hCV3RW6Oc7pRDWQtSfWMfugPd6IQxnCy6FPRFn8dDrNG7uU0-VjINHJKXCqD3YtA-evWUiyXI2ehIVU6LQVVNKyn0JKNqzEv5u~RxPJJKNGgi9lVcgzOTpMtl8xpssUP6rZNIaWSq8MbEJ2Q34Zvsb--HafZK~hCZz97Y3Yi7~DieW8it-7bymFDtCHzN5iMN90u2H7m7vSAAYzQ3AqxkRIxXwSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = createBrowserHistory();

  const handleLogin = async () => {
    // Check credentials here
    const isValidCredentials = true; // Replace with your authentication logic

    if (isValidCredentials) {
      // Call the onLogin callback to update authentication status
      onLogin();
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.Logo}>
        <img alt="logo" src={LogoPath} />
        <p>CarPoolit</p>
      </div>
      <div className={styles.loginContainer}>
        <div className="welcometext">
          <p>Welcome back</p>
        </div>
        <div className={styles.fields}>
          <input id="email" type="text" placeholder="Username" />
          <input id="password" type="password" placeholder="Password" />

          {errorMessage && (
            <div className={styles.errorMessage}>
              <p>{errorMessage}</p>
            </div>
          )}

          <button type="button" onClick={handleLogin}>
            {loading ? "Waiting" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
