import styles from '../styles/LoadingScreen.module.css'

const LoadingScreen: React.FC = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner} />
        </div>
    );
};

export default LoadingScreen;
