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
            {
                post.photo
                    ? <img src={`http://localhost:3000/uploads/${post.photo}`} className={styles["image"]} />
                    : (
                        <div className={styles["image-empty"]}>
                            <p>
                                Post has no image yet...
                            </p>
                        </div>
                    )
            }
            <p>
                Created: {post.createdDate}, {post.createdTime}<br/>
                Updated: {post.updatedDate}, {post.updatedTime}
            </p>
        </Link>
    )
}

export default PostDisplay;