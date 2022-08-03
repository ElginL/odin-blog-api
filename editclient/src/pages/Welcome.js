import styles from '../styles/Welcome.module.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["welcome-container"]}>
                <h1>Welcome to Blog Edit</h1>
                <p>
                    This is where you can edit your posts <br/>
                    But you must be authenticated first!
                </p>
                <Link to="/login" className={styles["login"]}>
                    Log In
                </Link>
            </div>
        </div>
    )
};

export default Welcome;