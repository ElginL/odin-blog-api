import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/postApi';
import PostDisplay from './PostDisplay';
import styles from '../styles/Posts.module.css';

const Posts = ({ isPublished }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchPosts(isPublished);

            setPosts(posts);
        }

        getPosts();
    }, [isPublished]);

    return (
        <div>
            {
                isPublished
                    ? <h1 className={styles["header"]}>Published Posts</h1>
                    : <h1 className={styles["header"]}>Unpublished Posts</h1>
            }
            <div className={styles["posts-container"]}>
                {
                    posts.length === 0
                        ? <p>Nothing here yet!</p>
                        : (
                            posts.map(post => (
                                <PostDisplay
                                    key={post._id}
                                    post={post}
                                />
                            ))
                        )
                }
            </div>
        </div>
    );
};

export default Posts;