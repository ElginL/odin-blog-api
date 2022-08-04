import styles from '../styles/PostPreview.module.css';

const PostPreview = ({ post, photo }) => {
    return (
        <div className={styles["container"]}>
            <h2>
                {post.title}
            </h2>
            {
                photo
                    ? <img src={URL.createObjectURL(photo)} alt="post" className={styles["image"]} />
                    : (
                        post.imgName
                            ? (
                                <img 
                                    src={`https://blogspace-api.herokuapp.com/uploads/${post.imgName}`} 
                                    alt="post" 
                                    className={styles["image"]} 
                                />
                            )
                            : (
                                <div className={styles["no-img"]}>
                                    <p>
                                        There's no image for this post yet!
                                    </p>
                                </div>
                            )
                    )
            }
            <p>
                {post.content}
            </p>
        </div>
    );
};

export default PostPreview;