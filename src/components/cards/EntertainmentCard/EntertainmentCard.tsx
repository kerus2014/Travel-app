import styles from "./EntertainmentCard.module.scss";
import { IEntertainmentCard } from "../../../types";
import { FlagItem } from "../../FlagItem";

export const EntertainmentCard = (props: IEntertainmentCard) => {
  const { id, image, title } = props;

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <FlagItem value={title} className={styles.flag} />
    </div>
  );
};
