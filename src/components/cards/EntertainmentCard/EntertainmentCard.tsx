import styles from "./EntertainmentCard.module.scss";
import { IEntertainmentCard } from "../../../types";
import { FlagItem } from "../../FlagItem";

export const EntertainmentCard = (props: IEntertainmentCard) => {
  const { id, entertaiments_photos, title } = props;

  return (
    <div className={styles.card}>
      <img src={entertaiments_photos && entertaiments_photos[0]} alt="" />
      <FlagItem value={title} className={styles.flag} />
    </div>
  );
};
