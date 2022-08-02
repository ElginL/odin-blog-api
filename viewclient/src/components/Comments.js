import React, { useState, useEffect } from 'react';
import { fetchComments } from '../api/post';
import Comment from './Comment';
import CommentForm from './CommentForm';
import styles from '../styles/Comments.module.css';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const comments = await fetchComments(postId);
            setComments(comments);
        }

        getComments();
    }, [postId]);

    return (
        <div className={styles["container"]}>
            <div className={styles["comments-container"]}>
                <h2>Comments</h2>
                {
                    comments.length === 0
                        ? <p>There are no comments yet...</p>
                        : comments.map(comment => (
                            <Comment 
                                key={comment._id}
                                comment={comment} 
                            />
                        ))
                }
                <CommentForm postId={postId} />
            </div>
        </div>
    )
}

export default Comments;