import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchOnePost } from '../api/post';
import styles from '../styles/Post.module.css';
import Comments from '../components/Comments';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DateTime } from 'luxon';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    const created = new Date(post.createdAt);
    const updated = new Date(post.updatedAt);
    const createdDate = DateTime.fromJSDate(created).toLocaleString(DateTime.DATE_MED);
    const createdTime = DateTime.fromJSDate(created).toLocaleString(DateTime.TIME_24_SIMPLE);
    const updatedDate = DateTime.fromJSDate(updated).toLocaleString(DateTime.DATE_MED);
    const updatedTime = DateTime.fromJSDate(updated).toLocaleString(DateTime.TIME_24_SIMPLE);

    useEffect(() => {
        const getOnePost = async () => {
            const foundPost = await fetchOnePost(postId);
            setPost(foundPost);
        }

        getOnePost();
    }, [postId]);

    return (
        <div className={styles["container"]}>
            <Navbar />
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
                        {createdDate}, {createdTime}
                    </p>
                    <h3>
                        Last Edited:
                    </h3>
                    <p>
                        {updatedDate}, {updatedTime}
                    </p>
                </div>
            </div>
            <Comments postId={postId} />
            <Footer />
        </div>
    );
};

export default Post;