import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchOnePost } from '../api/post';
import styles from '../styles/Post.module.css';
import Comments from '../components/Comments';
import Footer from '../components/Footer';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getOnePost = async () => {
            const foundPost = await fetchOnePost(postId);
            setPost(foundPost);
        }

        getOnePost();
    }, [postId]);

    return (
        <div className={styles["container"]}>
            <div className={styles["content-card"]}>
                <h2>{post.title}</h2>
                <div className={styles["image"]}>
                    
                </div>
                <p>
                    {post.content}
                </p>
                <div className={styles["time-container"]}>
                    <h3>Created:</h3>
                    <p>
                        {post.createdDate}, {post.createdTime}
                    </p>
                    <h3>
                        Last Edited:
                    </h3>
                    <p>
                        {post.editedDate}, {post.editedTime}
                    </p>
                </div>
            </div>
            <Comments postId={postId} />
            <Footer />
        </div>
    );
};

export default Post;