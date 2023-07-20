import { features } from "process";
import { DUSH, House, INTERNET, KUHNIYA, MANGAL, TELEVISOR } from "../../../types";
import Carousel from "../../Carousel";
import Price from "../../Price";
import { MainButton } from "../../buttons/mainButton/MainButton";
import styles from "./HouseBigCard.module.scss";
import { Shower} from "../../../assets/icons/features/Shower";
import { Fridge } from "../../../assets/icons/features/Fridge";
import { KitchenIcon } from "../../../assets/icons/features/KitchenIcon";
import { Internet } from "../../../assets/icons/features/Internet";
import { TV } from "../../../assets/icons/features/TV";
import { spawn } from "child_process";
import { Person } from "../../../assets/icons/features/Person";
import { useNavigate } from "react-router";
import { BigBed } from "../../../assets/icons/features/BigBed";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};
interface IProps extends House {
  cur_scale: number,
  cur_rate: number
}

const HouseBigCard = (props: IProps) => {
  const navigate = useNavigate()

  const {
    id,
    title,
    description_short,
    description_long,
    photos,
    price_weekday,
    price_holiday,
    features,
    pers_num,
    bed_count,
    beds_types,
    rooms_types,
    cur_rate,
    cur_scale
  } = props;
  const priceBYN_weekday = price_weekday?
  Math.round(Number(price_weekday) / cur_scale * cur_rate/10)* 10: 0
 
  const priceBYN_holiday = price_holiday?
  Math.round(Number(price_holiday) / cur_scale * cur_rate/10) * 10 : priceBYN_weekday
  

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <h2 className={styles.title}>{title}</h2>
        <Carousel settings={housePhotosSettings}>
          {photos.map((el) => {
            return (
              <div key={el}>
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
          {beds_types && beds_types.map((el,index) => {
            for (let key in el){
              if(key === "Большая двухместная кровать"){
                return <BigBed/>
              }
            }
          })}
          {
            features?.slice(0,3).map((elem, index) => {
              
              switch(elem) {
                case TELEVISOR:  
                  return <TV key = {index}/>;
                case MANGAL:  
                  return <Fridge key = {index}/>;
                case KUHNIYA:  
                  return <KitchenIcon key = {index}/>;
                case DUSH:  
                  return <Shower key = {index}/>;
                case INTERNET:  
                  return <Internet key = {index}/>;
                default:
                  return null;
              }
            }
          )}
          {
            features && features?.length > 3 ? <div className={styles["additional-features"]}>+</div> : null
          }
        </div>
        <div className={styles.descriptionLong}>{description_long}</div>
        <div className={styles.infoContainer}>
          <div className={styles.priceInfo}>
            <p className={styles.priceText}>За дом в сутки:</p>
            <div className={styles.priceContainerContainer}>
              <div className={styles.priceContainer}>
                <Price price={priceBYN_weekday} type="weekday" />
              </div>
              <div className={styles.priceContainer}>
                <Price price={priceBYN_holiday} type="weekend" />
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
