import styles from '../styles/Comment.module.css';
import { DateTime } from 'luxon';

const Comment = ({ comment }) => {
    const created = new Date(comment.createdAt);
    const createdDate = DateTime.fromJSDate(created).toLocaleString(DateTime.DATE_MED);
    const createdTime = DateTime.fromJSDate(created).toLocaleString(DateTime.TIME_24_SIMPLE);

    return (
        <div className={styles["container"]}>
            <div className={styles["commentor-container"]}>
                <p className={styles["username"]}>{comment.username}</p>
                <p className={styles["date"]}>{createdDate}, {createdTime}</p>
            </div>
            <p className={styles["comment"]}>
                {comment.text}
            </p>
        </div>
    );
};

export default Comment;