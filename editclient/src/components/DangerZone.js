import styles from '../styles/DangerZone.module.css';
import { deletePost } from '../api/postApi';
import { useNavigate } from 'react-router-dom';

const DangerZone = ({ postId }) => {
    const navigate = useNavigate();

    const deleteHandler = () => {
        deletePost(postId).then(() => {
            navigate('/');
        })
    }
    
    return (
        <div className={styles["danger-zone"]}>
            <h3>Danger Zone! &#9888;</h3>
            <p>
                This action is irreversible, you cannot recover the post after deletion
            </p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default DangerZone;