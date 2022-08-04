import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    const logOutHandler = () => {
        sessionStorage.clear();
        window.location.href="/";
    }

    return (
        <div className={styles['container']}>
            <Link to="/" className={styles["link"]}>
                <h1>Blog Editor</h1>
            </Link>
            <div className={styles["nav-links"]}>
                <Link to="/post/create" className={styles["link"]}>
                    New Post
                </Link>
                <button onClick={logOutHandler} className={styles["logout-btn"]}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default NavBar;