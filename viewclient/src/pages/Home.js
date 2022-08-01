import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import HomeIntro from '../components/HomeIntro';
import PostDisplay from '../components/PostDisplay';
import Footer from '../components/Footer';
import { fetchPosts } from '../api/post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchPosts();
            setPosts(posts);
        }

        getPosts();
    }, []);
    
    return (
        <div className={styles["page"]}>
            <div className={styles["container"]}>
                <HomeIntro />
                {
                    posts.map(post => (
                        <PostDisplay 
                            key={post._id}
                            post={post}
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    );
};

export default Home;