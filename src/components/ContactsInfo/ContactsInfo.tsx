import {BigLogo} from "../../assets/icons/BigLogo"
import {ApplePay} from "../../assets/icons/payments/ApplePay"
import {BePaid} from "../../assets/icons/payments/BePaid"
import {BelCard} from "../../assets/icons/payments/BelCard"
import {BelCardSecure} from "../../assets/icons/payments/BelCardSecure"
import {GPay} from "../../assets/icons/payments/GPay"
import {MasterCard} from "../../assets/icons/payments/MasterCard"
import {MasterCardCheck} from "../../assets/icons/payments/MasterCardCheck"
import {Mir} from "../../assets/icons/payments/Mir"
import {SamsungPay} from "../../assets/icons/payments/SamsungPay"
import {Visa} from "../../assets/icons/payments/Visa"
import {VisaSecure} from "../../assets/icons/payments/VisaSecure"
import {YPay} from "../../assets/icons/payments/YPay"
import {Facebook} from "../../assets/icons/socials/Facebook"
import {Instagram} from "../../assets/icons/socials/Instagram"
import {ClassName} from "../../types"
import styles from "./ContactsInfo.module.scss"

interface IProps extends ClassName {
    hideLogo?: boolean;
}

export const ContactsInfo = (props: IProps) => {
    const {hideLogo = false, className} = props
    return (
        <div className={className ? `${styles["contacts-info"]} ${className}` : `${styles["contacts-info"]}`}>
            {hideLogo ? null : <div className={styles["footer-logo"]}><BigLogo/></div>}
            <div className={styles["contacts-header"]}>
                <div className={styles.title}>
                    Контакты
                </div>
                <div className={styles.subtitle}>
                    Мы рады видеть вас!!!
                </div>
            </div>
            <div className={styles["contacts-description"]}>
                <div className={styles.text}>
                    <p>Республика Беларусь, Витебская область, Глубокский р-н, д. Шо, ул. Полевая, д. 17</p>
                    <p>200 км от Минска, 140 км от Витебска</p>
                    <p className={styles["contacts-coordinates"]}>Координаты: 55.167786, 28.250614</p>
                </div>
                <div className={styles.phones}>
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
    )
}