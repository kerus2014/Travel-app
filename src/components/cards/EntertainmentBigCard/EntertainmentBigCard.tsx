import { IEntertainments } from "../../../types";
import Carousel from "../../Carousel";
import styles from "./EntertainmentBigCard.module.scss";
import { useNavigate } from "react-router";

const housePhotosSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: true,
  infinite: true,
};
interface IProps extends IEntertainments {
  cur_scale: number,
  cur_rate: number
}

export const EntertainmentBigCard = (props: IProps) => {
  const { id, photos, title, prices, description_short, cur_rate, cur_scale } = props;
  const navigate = useNavigate();
  
  let price = prices ? prices.map((el) => {
    for (let key in el) {
      return (+el[key])
    }
  }) : [] as number[]
  price.sort((a:any, b:any) => a - b);
  const priceBYN = price && price[0] ? +(price[0] / cur_scale * cur_rate).toFixed(0) : null;
  const priceScreen = priceBYN ? `от ${priceBYN} ${priceBYN > 1 ? "рублей" : "рубля"}`: "бесплатно"
    
  return (
    <div className={styles.card} >
      <div className={styles.title} onClick={() => {
        navigate(`/entertainments/${id}`);
      }}>
        {title}
      </div>

      <Carousel settings={housePhotosSettings}>
        {photos && photos.map((el, index) => {
          return (
            <div key={index}>
              <img className={styles.image} src={el} alt={title} />
            </div>
          );
        })}
      </Carousel>

      <p className={styles.description_short}>
        {description_short}
      </p>
      <div className={styles.footer}>
        <div className={styles.more} onClick={() => { navigate(`/entertainments/${id}`); }}>
          Подробнее ...
        </div>
        <div className={styles.price}>
          {priceScreen}
        </div>
      </div>
    </div>
  );
};
