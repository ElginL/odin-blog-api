import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '../api/postApi';
import NavBar from '../components/NavBar';
import PostPreview from '../components/PostPreview';
import styles from '../styles/EditPost.module.css';
import EditForm from '../components/EditForm';

const EditPost = () => {
    const { postId } = useParams();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");
    const [isPublished, setIsPublished] = useState(false);

    useEffect(() => {
        const getSinglePost = async () => {
            const post = await fetchSinglePost(postId);
            setTitle(post.title);
            setContent(post.content);
            setIsPublished(post.isPublished);
        };

        getSinglePost();
    }, [postId]);

    return (
        <div className={styles["page"]}>
            <NavBar />
            <div className={styles["container"]}>
                <EditForm
                    postId={postId}
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    isPublished={isPublished}
                    setIsPublished={setIsPublished}
                />
                <PostPreview
                    title={title}
                    content={content}
                />
            </div>
        </div>
    );
};

export default EditPost;