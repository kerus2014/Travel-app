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
    photos,
    price_weekday,
    price_holiday,
    features,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <h2 className={styles.title}>{title}</h2>
        {/* <Carousel settings={housePhotosSettings}>
          {photos.map((el, index) => {
            return <img className={styles.image} src={el} alt="" />;
          })}
        </Carousel> */}
        <div className={styles.imageContainer}>
          <img src={photos[0]} alt="" />
        </div>
      </div>

      <div className={styles["card-right"]}>
        <div className={styles.iconsContainer}>
          {features?.map((elem) => (
            <div className={styles.icons}>
              <img src={elem} alt="" />
            </div>
          ))}
        </div>
        <div>{description_long}</div>
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
