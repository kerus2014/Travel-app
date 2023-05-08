import { features } from "process";
import { House } from "../../../types";
import Carousel from "../../Carousel";
import Price from "../../Price";
import { MainButton } from "../../buttons/mainButton/MainButton";
import styles from "./HouseBigCard.module.scss";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};

const HouseBigCard = (props: House) => {
  const {
    title,
    description_short,
    description_long,
    objects_photos,
    price_weekday,
    price_holiday,
    objects_features,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <h2 className={styles.title}>{title}</h2>
        <Carousel settings={housePhotosSettings}>
          {objects_photos.map((el, index) => {
            return (
              <div key={index}>
                <img className={styles.image} src={el} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={styles["card-right"]}>
        <div className={styles.iconsContainer}>
          {objects_features?.map((elem, index) => (
            <div className={styles.icons} key={index}>
              <img src={elem.Shower} alt="" />
            </div>
          ))}
        </div>
        <div className={styles.descriptionLong}>{description_long}</div>
        <div className={styles.infoContainer}>
          <div className={styles.priceInfo}>
            <p className={styles.priceText}>За дом в сутки:</p>
            <div className={styles.priceContainerContainer}>
              <div className={styles.priceContainer}>
                <Price price={price_weekday!} type="weekday" />
              </div>
              <div className={styles.priceContainer}>
                <Price price={price_holiday!} type="weekend" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <MainButton value={"Забронировать"} />
          <MainButton value={"Подробнее"} />
        </div>
      </div>
    </div>
  );
};

export default HouseBigCard;
