import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../api/postApi';
import NavBar from '../components/NavBar';
import PostPreview from '../components/PostPreview';
import styles from '../styles/EditPost.module.css';
import EditForm from '../components/EditForm';

const EditPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({
        title: '',
        content: '',
        isPublished: false,
        imgName: ''
    });
    const [photo, setPhoto] = useState();

    useEffect(() => {
        const getSinglePost = async () => {
            const post = await fetchSinglePost(postId);
            setPost({
                title: post.title,
                content: post.content,
                isPublished: post.isPublished,
                imgName: post.photo
            });
        };

        getSinglePost();
    }, [postId]);

    return (
        <div className={styles["page"]}>
            <NavBar />
            <div className={styles["container"]}>
                <EditForm
                    postId={postId}
                    post={post}
                    setPost={setPost}
                    photo={photo}
                    setPhoto={setPhoto}
                />
                <PostPreview
                    post={post}
                    photo={photo}
                />
            </div>
        </div>
    );
};

export default EditPost;