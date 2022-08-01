import styles from '../styles/HomeIntro.module.css';

const HomeIntro = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["text-container"]}>
                <h1>
                    Elgin Lee
                </h1>
                <p>
                    Welcome to my Blog <br/>
                    Listed below are some posts which I have done for fun
                </p>
            </div>
        </div>
    )
}

export default HomeIntro;