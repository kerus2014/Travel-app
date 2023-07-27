import {MainButton} from "../../components/buttons/mainButton/MainButton";
import styles from "./NotFound.module.scss";

export const NotFound = () => {

    return (
        <div className={styles["not-found-block"]}>
            <div className={styles.description}>
                <div className={styles.number}>404</div>
                <div className={styles.text}>Page not found</div>
                <MainButton value={"Back to Home"}/>
            </div>
            <div className={styles.big}></div>
            <div className={styles.middle}></div>
            <div className={styles.little}></div>
            <div className={styles.little}></div>
        </div>
    );
};
