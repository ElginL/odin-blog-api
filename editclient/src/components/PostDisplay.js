import styles from '../styles/PostDisplay.module.css';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

const PostDisplay = ({ post }) => {
    const created = new Date(post.createdAt);
    const updated = new Date(post.updatedAt);
    const createdDate = DateTime.fromJSDate(created).toLocaleString(DateTime.DATE_MED);
    const createdTime = DateTime.fromJSDate(created).toLocaleString(DateTime.TIME_24_SIMPLE);
    const updatedDate = DateTime.fromJSDate(updated).toLocaleString(DateTime.DATE_MED);
    const updatedTime = DateTime.fromJSDate(updated).toLocaleString(DateTime.TIME_24_SIMPLE);

    return (
        <Link to={`/post/${post._id}`} className={styles["container"]}>
            <div className={styles["title-container"]}>
                <h2>
                    {post.title}
                </h2>
            </div>
            {
                post.photo
                    ? <img src={`https://blogspace-api.herokuapp.com/uploads/${post.photo}`} className={styles["image"]} />
                    : (
                        <div className={styles["image-empty"]}>
                            <p>
                                Post has no image yet...
                            </p>
                        </div>
                    )
            }
            <p>
                Created: {createdDate}, {createdTime}<br/>
                Updated: {updatedDate}, {updatedTime}
            </p>
        </Link>
    )
}

export default PostDisplay;