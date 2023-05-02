import image from "../../assets/pics/HousesPage/housesPageBgImageBanner.png";
import { BackgroundBlockImage } from "../../components/BackgroundBlockImage";
import { Container } from "../../components/Container";
import { housesData } from "../../services/datas";
import HouseBigCard from "../../components/cards/HouseBigCard";
import styles from "./Houses.module.scss";
import { useGetObjectsQuery } from "../../reduxTools/requests/requests";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";

export const Houses = () => {
  // const { data, error } = useGetObjectsQuery();
  // console.log(error);

  return (
    <>
      <div className={styles["face-block"]}>
        <BackgroundBlockImage image={image} />
        <Container>
          <div className={styles["content-container"]}>
            <div className={styles.title}>Домики</div>
          </div>
        </Container>
      </div>
      <HomeBlockTemplate title="">
        <div className={styles["houses-container"]}>
          {housesData.map((house, index) => {
            return (
              <HouseBigCard
                key={index.toString()}
                title={house.title}
                description_short={house.description_short}
                photos={house.photos}
                price_weekday={house.price_weekday}
                price_holiday={house.price_holiday}
              />
            );
          })}
        </div>
      </HomeBlockTemplate>
    </>
  );
};
