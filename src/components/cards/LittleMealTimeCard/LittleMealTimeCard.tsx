import {PriceIcon} from "../../../assets/icons/Price";
import {TimeIcon} from "../../../assets/icons/Time";
import styles from "./LittleMealTimeCard.module.scss";

interface IProps {
  title?: string;
  time?: string;
  price?: string;
}

export const LittleMealTimeCard = (props: IProps) => {
  const { time = "9:00", title = "Завтрак", price = 15 } = props;
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles["time-price-block"]}>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          <div>
            <PriceIcon/>
          </div>
          <p>{price} <span>BYN</span></p>
        </div>
      </div>
      
    </div>
  );
};
