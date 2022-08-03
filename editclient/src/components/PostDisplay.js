import styles from '../styles/PostDisplay.module.css';
import { Link } from 'react-router-dom';

const PostDisplay = ({ post }) => {
    return (
        <Link to={`/post/${post._id}`} className={styles["container"]}>
            <div className={styles["title-container"]}>
                <h2>
                    {post.title}
                </h2>
            </div>
            <div className={styles["image"]}>

            </div>
            <p>
                Created: {post.createdDate}, {post.createdTime}<br/>
                Updated: {post.updatedDate}, {post.updatedTime}
            </p>
        </Link>
    )
}

export default PostDisplay;