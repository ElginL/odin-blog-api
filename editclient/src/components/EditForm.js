import styles from '../styles/EditForm.module.css';
import { editSinglePost } from '../api/postApi';
import { useNavigate } from 'react-router-dom';

const EditForm = ({
    postId,
    post,
    setPost,
    photo,
    setPhoto
}) => {
    const navigate = useNavigate();
    
    const saveHandler = e => {
        e.preventDefault();
        editSinglePost(
            postId,
            post.title,
            post.content,
            post.isPublished, 
            photo,
            post.imgName
        ).then(() => {
            navigate("/");
        });
    }

    return (
        <div className={styles["container"]}>
            <h2>
                Edit Form
            </h2>
            <form onSubmit={saveHandler} className={styles["form"]}>
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
                <div className={styles["checkbox"]}>
                    <label htmlFor="isPublished">Publish Blog</label>
                    <input
                        name="isPublished"
                        type="checkbox"
                        checked={post.isPublished}
                        onChange={() => setPost({ ...post, isPublished: !post.isPublished})}
                    />
                </div>
                <div className={styles["form-field"]}>
                    <input 
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        onChange={e => setPhoto(e.target.files[0])}
                    />
                </div>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default EditForm;