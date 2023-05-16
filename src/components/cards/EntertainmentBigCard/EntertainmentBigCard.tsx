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
  const { id, entertaiments_photos, title, price } = props;
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/entertainment/${id}`);
      }}
    >
      <div>{title}</div>

      <Carousel settings={housePhotosSettings}>
        {photoExample.map((el, index) => {
          return (
            <div key={index}>
              <img className={styles.image} src={el} alt="" />
            </div>
          );
        })}
      </Carousel>
      <p className={styles.description_short}>
        Первоначальные навыки погружений Вы освоите в комфортной, спокойной
        обстановке. Всё необходимое для погружения вам предоставляет!
        dsfdsfdsfdsfdsfdsfdsfdsfsfds
      </p>
      <div className={styles.footer}>
        <div>Подробнее ...</div>
        <div> от {(+price).toFixed()} рублей</div>
      </div>
    </div>
  );
};
