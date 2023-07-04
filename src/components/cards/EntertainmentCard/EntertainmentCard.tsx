import styles from "./EntertainmentCard.module.scss";
import { IEntertainmentCard } from "../../../types";
import { FlagItem } from "../../FlagItem";

export const EntertainmentCard = (props: IEntertainmentCard) => {
  const { id, photos, title } = props;

  return (
    <div className={styles.card}>
      <img src={photos && photos[0]} alt="image" />
      <FlagItem value={title} className={styles.flag} />
    </div>
  );
};
