import styles from '../styles/PostDisplay.module.css';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

const PostDisplay = ({ post }) => {
    const date = new Date(post.createdAt);
    const createdDate = DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
    
    return (
        <Link to={`/posts/${post._id}`} className={styles["link"]}>
            <div className={styles["container"]}>
                <div>
                    <h2>{post.title}</h2>
                    <p>
                        {createdDate}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default PostDisplay;