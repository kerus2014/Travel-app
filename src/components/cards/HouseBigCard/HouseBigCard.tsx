import { features } from "process";
import { House } from "../../../types";
import Carousel from "../../Carousel";
import Price from "../../Price";
import { MainButton } from "../../buttons/mainButton/MainButton";
import styles from "./HouseBigCard.module.scss";
import { Shower} from "../../../assets/icons/features/Shower";
import { Fridge } from "../../../assets/icons/features/Fridge";
import { Kitchen } from "../../../assets/icons/features/Kitchen";
import { Internet } from "../../../assets/icons/features/Internet";
import { TV } from "../../../assets/icons/features/TV";
import { spawn } from "child_process";
import { Person } from "../../../assets/icons/features/Person";
import { useNavigate } from "react-router";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};

const HouseBigCard = (props: House) => {
  const navigate = useNavigate()

  const {
    id,
    title,
    description_short,
    description_long,
    objects_photos,
    price_weekday,
    price_holiday,
    objects_features,
    pers_num,
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
          <div className={styles["person-number"]}>
            <span>{pers_num ? pers_num : null}</span>
            <Person/>
          </div>
          {
            objects_features?.map((elem, index) => {

              switch(elem) {
                case "TV":  
                  return <TV/>;
                case "Fridge":  
                  return <Fridge/>;
                case "Kitchen":  
                  return <Kitchen/>;
                case "Shower":  
                  return <Shower/>;
                case "Internet":  
                  return <Internet/>;
                default:
                  return null;
              }
            }
          )}
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
          <MainButton value={"Подробнее"} handler={() => navigate(`/houses/${id}`)}/>
        </div>
      </div>
    </div>
  );
};

export default HouseBigCard;
