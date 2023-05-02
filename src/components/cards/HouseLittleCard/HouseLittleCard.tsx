import { House } from "../../../types";
import { FlagItem } from "../../flagItem/FlagItem";

import styles from "./HouseLittleCard.module.scss";

export const HouseLittleCard = (props: House) => {
  const { title, description_short, photos, price_weekday } = props;
  console.log(photos);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={photos[0]} alt="" />
      </div>
      <div className={styles["text-content"]}>
        <h1>{title}</h1>
        <p>{description_short}</p>
      </div>
      <FlagItem
        value={`от ${price_weekday} руб. в сутки`}
        className={styles.flag}
      />
    </div>
  );
};
