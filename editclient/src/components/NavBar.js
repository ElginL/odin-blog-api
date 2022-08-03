import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    const logOutHandler = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <nav className={styles['container']}>
            <h1>Blog Editor</h1>
            <div className={styles["nav-links"]}>
                <Link to="/" className={styles["link"]}>
                    Create New
                </Link>
                <button onClick={logOutHandler} className={styles["logout-btn"]}>
                    Log Out
                </button>
            </div>
        </nav>
    );
};

export default NavBar;