import styles from '../styles/Navbar.module.css';
import BookLogo from '../assets/book.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles["nav-bar"]}>
            <Link to="/" className={styles["identity"]}>
                <img src={BookLogo} alt="book" />
                <h1>Blog Space</h1>
            </Link>
            <div className={styles["nav-links"]}>
                <Link to="/" className={styles["link"]}>
                    Home
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;