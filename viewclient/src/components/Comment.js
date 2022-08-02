import styles from '../styles/Comment.module.css';

const Comment = ({ comment }) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["commentor-container"]}>
                <p className={styles["username"]}>{comment.username}</p>
                <p className={styles["date"]}>{comment.createdAt}</p>
            </div>
            <p className={styles["comment"]}>
                {comment.text}
            </p>
        </div>
    );
};

export default Comment;