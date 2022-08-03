import styles from '../styles/Footer.module.css';
import githubIcon from '../assets/github.svg';

const Footer = () => {
    return (
        <div className={styles["container"]}>
            <a href="https://github.com/ElginL" className={styles["footer"]}>
                <h2>
                    Created By ElginL
                </h2>
                <img src={githubIcon} alt="Github icon" />
            </a>
        </div>
    );
};

export default Footer;