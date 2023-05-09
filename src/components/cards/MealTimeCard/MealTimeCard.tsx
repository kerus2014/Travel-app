import { TimeIcon } from "../../../assets/icons/Time";
import { IKitchenCard } from "../../../types";
import { FlagItem } from "../../flagItem";
import styles from "./MealTimeCard.module.scss";

interface IProps {
  title: string;
  time: string;
  price: string;
}

export const MealTimeCard = (props: IProps) => {
  const { time = "9:00", title = "Завтрак", price = 15 } = props;
  return (
    <div className={styles.card}>
      <FlagItem value={title} className={styles.flag} />
      <div className={styles.row}>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          {price} <span>BYN</span>
        </div>
      </div>
    </div>
  );
};
