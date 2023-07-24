import styles from "./LittleKitchenCard.module.scss";
import {LittleMealTimeCard} from "../LittleMealTimeCard";

interface IProps {
  title?: string;
  time?: string;
  price?: string;
}

export const LittleKitchenCard = (props: IProps) => {

  return (
      <div className={styles.kitchen}>
        <h2>Кухня</h2>
        <LittleMealTimeCard/>
        <LittleMealTimeCard title="Обед" time="14:00"/>
        <LittleMealTimeCard title="Ужин" time="19:00" price="20"/>
      </div>
  );
};
