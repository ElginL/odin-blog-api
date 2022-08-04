import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../api/postApi';
import NavBar from '../components/NavBar';
import PostPreview from '../components/PostPreview';
import DangerZone from '../components/DangerZone';
import styles from '../styles/ModifyPost.module.css';
import ModifyForm from '../components/ModifyForm';

const ModifyPost = ({ isEdit }) => {
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

        if (isEdit) {
            getSinglePost();
        }
    }, [postId]);

    return (
        <div className={styles["page"]}>
            <NavBar />
            <div className={styles["container"]}>
                <ModifyForm
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
            {
                isEdit
                    ? (
                        <DangerZone postId={postId}/>
                    )
                    : null
            }
        </div>
    );
};

export default ModifyPost;