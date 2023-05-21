import { IEntertainments } from "../../../types";
import Carousel from "../../Carousel";
import { photoExample } from "../../../services/datas";
import styles from "./EntertainmentBigCard.module.scss";
import { useNavigate } from "react-router";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};

export const EntertainmentBigCard = (props: IEntertainments) => {
  const { id, entertaiments_photos, title, entertaiments_prices, description_short } = props;
  const navigate = useNavigate();
  let prices:number[] = []

  for (let key in entertaiments_prices){
    prices.push(+entertaiments_prices[key])
  }

  prices.sort((a, b) => a - b)


  return (
    <div className={styles.card} >
      <div className={styles.title} onClick={() => {
        navigate(`/entertainment/${id}`);
      }}>
        {title}
      </div>

      <Carousel settings={housePhotosSettings}>
        {entertaiments_photos && entertaiments_photos.map((el, index) => {
          return (
            <div key={index}>
              <img className={styles.image} src={el} alt="" />
            </div>
          );
        })}
      </Carousel>

      <p className={styles.description_short}>
        {description_short}
      </p>
      <div className={styles.footer}>
        <div className={styles.more} onClick={() => { navigate(`/entertainment/${id}`); }}>
          Подробнее ...
        </div>
        <div className={styles.price}>
          от {prices[0]} {prices[0] > 1 ? "рублей" : "рубля"}
        </div>
        
      </div>
    </div>
  );
};
