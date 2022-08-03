import styles from '../styles/PostPreview.module.css';

const PostPreview = ({ title, content }) => {
    return (
        <div className={styles["container"]}>
            <h2>
                {title}
            </h2>
            <p>
                {content}
            </p>
        </div>
    );
};

export default PostPreview;