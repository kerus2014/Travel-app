import { House } from "../../../types";
import Carousel from "../../Carousel";
import Price from "../../Price";
import styles from "./HouseBigCard.module.scss";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};

const HouseBigCard = (props: House) => {
  const { title, description_short, photos, price_weekday, price_holiday } =
    props;

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <h2 className={styles.title}>{title}</h2>
        {/* <Carousel settings={housePhotosSettings}>
          {photos.map((el, index) => {
            return <img className={styles.image} src={el} alt="" />;
          })}
        </Carousel> */}
        <img src={photos[0]} alt="" />
      </div>

      <div className={styles["card-right"]}>
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
      </div>
    </div>
  );
};

export default HouseBigCard;
