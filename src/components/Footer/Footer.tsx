import { BigLogo } from "../../assets/icons/BigLogo"
import { ApplePay } from "../../assets/icons/payments/ApplePay"
import { BePaid } from "../../assets/icons/payments/BePaid"
import { BelCard } from "../../assets/icons/payments/BelCard"
import { BelCardSecure } from "../../assets/icons/payments/BelCardSecure"
import { GPay } from "../../assets/icons/payments/GPay"
import { MasterCard } from "../../assets/icons/payments/MasterCard"
import { MasterCardCheck } from "../../assets/icons/payments/MasterCardCheck"
import { Mir } from "../../assets/icons/payments/Mir"
import { SamsungPay } from "../../assets/icons/payments/SamsungPay"
import { Visa } from "../../assets/icons/payments/Visa"
import { VisaSecure } from "../../assets/icons/payments/VisaSecure"
import { YPay } from "../../assets/icons/payments/YPay"
import { Facebook } from "../../assets/icons/socials/Facebook"
import { Instagram } from "../../assets/icons/socials/Instagram"
import { Container } from "../Container"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return(
    <div className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div>
            <BigLogo/>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>
              Контакты
            </div>
            <div className={styles.subtitle}>
              Мы рады видеть вас!!!
            </div>
            <p>Республика Беларусь, Витебская область, Глубокский р-н, д. Шо, ул. Полевая, д. 17</p>
            <p>200 км от Минска, 140 км от Витебска</p>
            <p>Координаты: 55.167786, 28.250614</p>
            <div className={styles.payments}>
              <Visa/>
              <VisaSecure/>
              <MasterCard/>
              <MasterCardCheck/>
              <BelCard/>
              <BelCardSecure/>
              <BePaid/>
              <GPay/>
              <ApplePay/>
              <SamsungPay/>
              <Mir/>
              <YPay/>
            </div>
          </div>
          <div className={`${styles.column} ${styles.phones}`}>
            <p>
              +375 (29) 703-90-53
            </p>
            <p>
              +375 (29) 663-99-46
            </p>
            <p>
              +375 (29) 853-25-10
            </p>
          </div>
          <div className={styles.socials}>
            <Facebook/>
            <Instagram/>
          </div>
        </div>
        <hr className={styles.line}/>
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