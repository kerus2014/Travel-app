import { useParams } from "react-router";
import { useGetEntertainmentsCurrentQuery } from "../../reduxTools/requests/requests";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { photoExample } from "../../services/datas";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import styles from "./EntertainmentCurrent.module.scss";

const EntertainmentCurrent = () => {
  const { id } = useParams();
  const { data } = useGetEntertainmentsCurrentQuery(id!);
  console.log(data);

  return (
    <HomeBlockTemplate title={data?.title}>
      <div className={styles.sliderContainer}>
        <MyGallery images={photoExample} thubnailPosition="right" />
      </div>
      <div className={styles.info}>
        <p>Перед погружением инструктор проведет вводное занятие.</p>
        <h3>Прокат оборудования. </h3>
        <p>
          Оборудование входит в стоимость погружения. Вам будет выдано все
          необходимое, для комфортного погружения.
        </p>
        <h3>Теория+практика</h3>
        <p>
          Перед погружением инструктор проведет вводное занятие. В среднем
          Интро-дайв за
        </p>
        <hr className={styles.line} />
      </div>
    </HomeBlockTemplate>
  );
};

export default EntertainmentCurrent;
