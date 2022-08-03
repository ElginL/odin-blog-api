import styles from '../styles/EditForm.module.css';
import { editSinglePost } from '../api/postApi';
import { useNavigate } from 'react-router-dom';

const EditForm = ({
    postId,
    title,
    setTitle,
    content,
    setContent,
    isPublished,
    setIsPublished
}) => {
    const navigate = useNavigate();
    
    const saveHandler = e => {
        e.preventDefault();
        editSinglePost(postId, title, content, isPublished).then(() => {
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Enter title here"
                        maxLength="50"
                    />
                </div>
                <div className={styles["form-field"]}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        name="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
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
                        checked={isPublished}
                        onChange={() => setIsPublished(!isPublished)}
                    />
                </div>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default EditForm;