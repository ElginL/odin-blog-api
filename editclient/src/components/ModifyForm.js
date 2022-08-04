import React, { useState } from 'react';
import styles from '../styles/ModifyForm.module.css';
import { editSinglePost, createPost } from '../api/postApi';
import { useNavigate } from 'react-router-dom';

const ModifyForm = ({
    postId,
    post,
    setPost,
    photo,
    setPhoto
}) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    
    const saveHandler = e => {
        e.preventDefault();

        if (fieldsValid()) {
            editSinglePost(postId, post, photo).then(() => {
                navigate("/");
            });
        }
    }

    const createHandler = e => {
        e.preventDefault();
        
        if (fieldsValid()) {
            createPost(post, photo).then(() => {
                navigate("/");
            });
        }
    }

    const fieldsValid = () => {
        if (post.title.length < 6 && post.content.length < 6) {
            setError("Error: Title and Content must be at least 6 characters");
            return false;
        } else if (post.title.length < 6) {
            setError("Error: Title must be at least 6 characters");
            return false;
        } else if (post.content.length < 6) {
            setError("Error: Content must be at least 6 characters");
            return false;
        }

        return true;
    }

    return (
        <div className={styles["container"]}>
            {
                postId
                    ? <h2>Edit Form</h2>
                    : <h2>Create Form</h2>
            }
            <form onSubmit={postId ? saveHandler : createHandler} className={styles["form"]}>
                <div className={styles["form-field"]}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={e => setPost({ ...post, title: e.target.value })}
                        placeholder="Enter title here"
                        maxLength="50"
                    />
                </div>
                <div className={styles["form-field"]}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        name="content"
                        value={post.content}
                        onChange={e => setPost({ ...post, content: e.target.value })}
                        placeholder="Enter content here"
                        rows="10"
                        cols="50"
                    />
                </div>
                <div className={styles["form-field"]}>
                    <label htmlFor="photo">Post Image</label>
                    <input 
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={e => setPhoto(e.target.files[0])}
                    />
                </div>
                <div className={styles["checkbox"]}>
                    <label htmlFor="isPublished">Publish Blog</label>
                    <input
                        name="isPublished"
                        type="checkbox"
                        checked={post.isPublished}
                        onChange={() => setPost({ ...post, isPublished: !post.isPublished})}
                    />
                </div>
                {
                    error
                        ? <p className={styles["error"]}>{error}</p>
                        : null
                }
                <input type="submit" value={postId ? "Save" : "Create"} />
            </form>
        </div>
    );
};

export default ModifyForm;