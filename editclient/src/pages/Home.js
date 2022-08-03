import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import Posts from '../components/Posts';

const Home = () => {
    const username = sessionStorage.getItem('username');

    return (
        <div>
            <NavBar />
            <div className={styles["content"]}>
                <h1>Welcome back {username}</h1>
                <Posts isPublished={true} />
                <Posts isPublished={false} />
            </div>
            
        </div>
    );
};

export default Home;