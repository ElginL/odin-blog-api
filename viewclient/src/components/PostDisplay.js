import styles from '../styles/PostDisplay.module.css';
import { Link } from 'react-router-dom';

const PostDisplay = ({ post }) => {
    return (
        <Link to={`/posts/${post._id}`} className={styles["link"]}>
            <div className={styles["container"]}>
                <div>
                    <h2>{post.title}</h2>
                    <p>
                        {post.createdDate}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default PostDisplay;