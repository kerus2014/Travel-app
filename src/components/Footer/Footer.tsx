import {ContactsInfo} from "../ContactsInfo"
import {Container} from "../Container"
import styles from "./Footer.module.scss"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <ContactsInfo/>
                <div className={styles.line}></div>
                <div className={styles["last-row"]}>
                    <div>
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Пользовательское соглашение</a>
                        <a href="">Карта сайта</a>
                    </div>
                    <a href="">©Travelwork 2023г.</a>
                </div>
            </Container>
        </div>
    )
}