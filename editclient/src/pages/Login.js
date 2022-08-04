import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import DetectiveImg from '../assets/detective.png';
import { login } from '../api/loginApi';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitHandler = e => {
        e.preventDefault();

        const loginUser = async () => {
            const err = await login(username, password);
            if (err) {
                setError("Username or password is incorrect");
                return;
            }

            window.location.href="/";
        }

        loginUser();
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["form-container"]}>
                <h1>Log In</h1>
                <img src={DetectiveImg} alt="detective" />
                <form onSubmit={submitHandler} className={styles["form"]}>
                    <div className={styles["form-field"]}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username (Test account: ElginL)"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles["form-field"]}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password (Test account: Hello123)"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    {
                        error
                            ? <p className={styles["error"]}>{error}</p>
                            : null
                    }
                    <input type="submit" value="Log In" />
                </form>
            </div>
        </div>
    );
};

export default Login;