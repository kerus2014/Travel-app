import { INearest } from "../../../types";
import Carousel from "../../Carousel";
import styles from "./NearestCard.module.scss";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};

interface IProps {
  element: INearest;
}

const NearestCard = (props: IProps) => {
  const {
    element: { id, places_photos, title, description, location },
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <Carousel settings={housePhotosSettings}>
          {places_photos.map((el, index) => {
            return (
              <div key={index}>
                <img className={styles.image} src={el} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={styles["card-right"]}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{description}</div>
        <div className={styles.location}>{location}</div>
      </div>
    </div>
  );
};

export default NearestCard;
