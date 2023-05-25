import { useParams } from "react-router";
import { useGetEntertainmentsCurrentQuery } from "../../reduxTools/requests/requests";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { photoExample } from "../../services/datas";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import styles from "./EntertainmentCurrent.module.scss";
import image from "../../assets/pics/Entertainment/Картинка.png";
import { FaceBlock } from "../../components/FaceBlock";
import { Container } from "../../components/Container";
import { FormForOrder } from "../../components/Form";

const EntertainmentCurrent = () => {
  const { id } = useParams();
  const { data } = useGetEntertainmentsCurrentQuery(id!);
  console.log(data);

  return (
    <>
      <FaceBlock title="Развлечения" image={image}/>
      <Container className={styles.card}>
        <p className={styles.title}>
          {data?.title}
        </p>
        <div className={styles.sliderContainer}>
          {
            data?.entertaiments_photos
          ?
            <MyGallery images={data.entertaiments_photos} thubnailPosition="right" />
          :
            null
          }
        </div>
        <div className={styles.info}>
          <p>
            {data?.description_long}
          </p>
          <h1>Цены </h1>
          <hr className={styles.line} />
          <div className={styles.grid}>
            {
              data?.entertaiments_prices && data?.entertaiments_prices.map((el,index) => {
                for (let key in el){
                  return (
                    <>
                    <div>{key}</div>
                      <div>{el[key]}</div>
                    </>
                  
                  )
                }
              })
            }
          </div>
        </div>
      </Container>
      <FormForOrder/>
    </>
    
  );
};

export default EntertainmentCurrent;
