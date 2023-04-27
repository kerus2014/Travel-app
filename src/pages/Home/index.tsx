import styles from "./index.module.scss"
import { Container } from "../../components/Container"
import { KitchenCard } from "../../components/cards/kitchenCard"
import { DatePicker } from "../../components/datePicker"
import { useState } from "react"
import { FlagItem } from "../../components/FlagItem"
import logo from "../../assets/pics/kitchenLogoExample.png";
import { MainButton } from "../../components/buttons/mainButton/MainButton"
import { BackgroundBlockImage } from "../../components/BackgroundBlockImage"
import image from "../../assets/pics/Home/faceBlock/20200806_154912 1.png";
import { Form } from "../../components/Form"

export const Home = () => {
  const [date, setDate] = useState(() => new Date());
  const setFirstDate = (date: any) => {
    setDate(date);
  };

  return (
    <>
      <div className={styles["face-block"]}>
        <BackgroundBlockImage image={image}/>
        <Container>
          <div className={styles["content-container"]}>
            <div className={styles["left-side"]}>
              <div className={styles.title}>
                Заповедный остров
              </div>
              <p>
                Уникальное и красивейший уголо к Беларуси – на настоящем островке между двух озер Ивесь и Озерко. Ручьи и болота отделяют это место от всего мира: лишь стоит пересечь небольшой ручеек, как вы попадете в совершенно другую стихию – без шума, суеты и забот.  Большая территория усадьбы «Заповедный остров» располагает к множеству занятий различного рода.
              </p>
            </div>
            <div className={styles["right-side"]}>
              asdfasdf
            </div>
          </div>
        </Container>
      </div>
      <Form value="Заповедный остров" buttonValue="Найти домик" className={styles.form}/>

      

      {/* <FlagItem value={"jn fdssg 150"} />
      <KitchenCard
        image={logo}
        title={"СУП КУРИНЫЙ"}
        description={
          "Куриный суп с вермишелью  с удовольствием съедят и дети, и взрослые."
        }
      />
      <DatePicker value={date} handler={setFirstDate} /> */}
    </>
  )
}