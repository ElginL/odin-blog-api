import React, { useState } from 'react';
import { addComment } from '../api/post';
import styles from '../styles/CommentForm.module.css';

const CommentForm = ({ postId }) => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async e => {
        if (username.length < 5 && comment.length < 6) {
            e.preventDefault();
            setError("Username must be at least 5 characters and comment must be at least 6 characters");
        } else if (username.length < 5) {
            e.preventDefault();
            setError("Username must be at least 5 characters");
        } else if (comment.length < 6) {
            e.preventDefault();
            setError("Comment must be at least 6 characters");
        } else {
            await addComment(postId, username, comment);
        }
    }

    return (
        <div>
            <h2 className={styles['title']}>Add a comment</h2>
            <form onSubmit={submitHandler} className={styles["form-container"]}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    maxLength="20"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    name="text"
                    placeholder="Your Comment"
                    maxLength="60"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <input type="submit" value="Comment" />
                <p className={styles["error"]}>{error}</p>
            </form>
        </div>
    );
};

export default CommentForm;