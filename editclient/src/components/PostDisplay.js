import styles from '../styles/PostDisplay.module.css';
import { Link } from 'react-router-dom';

const PostDisplay = ({ post }) => {
    return (
        <Link to="/" className={styles["container"]}>
            <h2>
                {post.title}
            </h2>
            <div className={styles["image"]}>

            </div>
            <p>Created: {post.createdDate}</p>
        </Link>
    )
}

export default PostDisplay;