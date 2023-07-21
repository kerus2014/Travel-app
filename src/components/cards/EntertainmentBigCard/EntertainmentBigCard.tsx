import { IEntertainments } from "../../../types";
import Carousel from "../../Carousel";
import { photoExample } from "../../../services/datas";
import styles from "./EntertainmentBigCard.module.scss";
import { useNavigate } from "react-router";

const entertainmentPhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};

export const EntertainmentBigCard = (props: IEntertainments) => {
  const { id, entertaiments_photos, title, entertaiments_prices, description_short } = props;
  const navigate = useNavigate();
  console.log(entertaiments_prices);

  let prices = entertaiments_prices ? entertaiments_prices.map((el,index) => {
    for (let key in el) {
      return +el[key]
    }
  }) : [] as number[]
  prices.sort((a:any, b:any) => a - b);
  console.log(prices);
  
  return (
    <div className={styles.card} >
      <div className={styles.title} onClick={() => {
        navigate(`/entertainment/${id}`);
      }}>
        {title}
      </div>

      <Carousel settings={entertainmentPhotosSettings}>
        {/*{entertaiments_photos && entertaiments_photos.map((el, index) => {*/}
        {photoExample && photoExample.map((el, index) => {
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
          от {prices && prices[0]} {prices && prices[0] && prices[0] > 1 ? "рублей" : "рубля"}
        </div>
      </div>
    </div>
  );
};
