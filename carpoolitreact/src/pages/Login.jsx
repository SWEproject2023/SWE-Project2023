// Import the useClient pragma from 'react' at the top of your file
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

// Use an external URL for the logo
const LogoPath =
  "https://s3-alpha-sig.figma.com/img/53fc/ae76/c9126dbe0dfb0f7bcc934ea40e2e042c?Expires=1702857600&Signature=Wg3eIH3KWeEsU4Fifp2RgCZKRaOC59Vl1S8-ngk0tgriG17YQrhtoW~SoRFl5jqPV-BliGJ5Viphj-nKpzRNegpCzUIs9FtrkkmDlgfnOEUudR9-RvZ4qkjDv9hCV3RW6Oc7pRDWQtSfWMfugPd6IQxnCy6FPRFn8dDrNG7uU0-VjINHJKXCqD3YtA-evWUiyXI2ehIVU6LQVVNKyn0JKNqzEv5u~RxPJJKNGgi9lVcgzOTpMtl8xpssUP6rZNIaWSq8MbEJ2Q34Zvsb--HafZK~hCZz97Y3Yi7~DieW8it-7bymFDtCHzN5iMN90u2H7m7vSAAYzQ3AqxkRIxXwSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

function Login({ onLogin }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Add useNavigate here

  const handleLogin = async () => {
    try {
      setLoading(true);
      // Simulate an API call or any asynchronous operation for login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setErrorMessage("Login successful");
      console.log("Login successful");
      // Navigate to another page after successful login
      navigate("/dashboard"); // Adjust the path as needed
    } catch (error) {
      setErrorMessage("Login failed. Please try again."); // Handle login error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.Logo}>
        <img alt="logo" src={LogoPath} />
        <p>CarPoolit</p>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.Card}>
          <div className="welcometext">
            <p>Welcome back</p>
          </div>
          <div className={styles.fields}>
            <input
              id="email"
              type="text"
              placeholder="Username"
              {...register("email", { required: true })}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            {errorMessage && (
              <div className={styles.errorMessage}>
                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit(handleLogin)}
              disabled={loading}
            >
              {loading ? "Waiting" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
