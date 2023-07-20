import styles from "./Home.module.scss";
import { Container } from "../../components/Container/Container";
import { KitchenCard } from "../../components/cards/KitchenCard";
import { MainButton } from "../../components/buttons/mainButton/MainButton";
import BackgroundBlockImage from "../../components/BackgroundBlockImage";
import { ToFormButton } from './../../components/buttons/toFormButton';
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate/HomeBlockTemplate";
import { HouseLittleCard } from "../../components/cards/HouseLittleCard";
import { Carousel } from "../../components/Carousel/Carousel";
import { EntertainmentCard } from "../../components/cards/EntertainmentCard/EntertainmentCard";
import { useState } from "react";
import { Settings } from "react-slick";
import { useGetDishesQuery, useGetEntertainmentsQuery, useGetObjectsQuery, 
  useGetMainPageQuery } from "../../reduxTools/requests/apiRequests";
import { useNavigate } from "react-router-dom";
import {useDatas} from "../../services/useDatas"
import { useRate } from "../../services/useRate";

export const Home = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { data:houses, isLoading:houseLoad} = useGetObjectsQuery();
  const { data:dishes, isLoading:dishLoad} = useGetDishesQuery();
  const { data:entertainments, isLoading:entLoad} = useGetEntertainmentsQuery();
  const { data:mainPage, isLoading:pageLoad } = useGetMainPageQuery();
  const navigate = useNavigate()
  const datas = useDatas();
  const rate = useRate();
   
  const {title, titleHouse, titleKitchen, titleEntertainment, main_back, nameForSearchButton} = datas;
  const {cur_rate, cur_scale } = rate;

  const sliderFaceBlockSettings: Settings = {
    slidesToShow: 1,
    centerPadding: "119px",
    infinite: true,
    speed: 300,
    arrows: false,
    centerMode: true,
    dots: true,
  };

  const kitchenSliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    dots: true,
    arrows: true,
    infinite: true,
  };
  const mainDescriptions = mainPage ? mainPage[0].description: ""
  const houseDescription = mainPage ? mainPage[0].house_description : ""
  const kitchenDescription = mainPage ? mainPage[0].kitchen_description : ""
  const entertainmentDescription = mainPage ? mainPage[0].entertainment_description : ""

  return (
    <>
      <div className={styles["face-block"]}>
        <BackgroundBlockImage image={main_back} />
        <Container>
          <div className={styles["content-container"]}>
            <div className={styles["left-side"]}>
              <div className={styles.title}>{title}</div>
              <p>{mainDescriptions}</p>
            </div>
            <div className={styles["right-side"]}>
              <Carousel settings={sliderFaceBlockSettings}>
                {mainPage && mainPage[0].photos.map((el, index) => {
                  return <img key={index.toString()} src={el} alt="image" />;
                })}
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
      <ToFormButton
        value={title}
        buttonValue={nameForSearchButton}
        className={styles.form}
      />
      <HomeBlockTemplate title= {titleHouse} className={styles.houses}>
        <p>{houseDescription}</p>
        <div className={styles.cards}>
          {houses && houses.slice(0,3).map((el) => {
            
            return (
              <HouseLittleCard
                key={el.id}
                id={el.id}
                pers_num={el.pers_num}
                title={el.title}
                description_short={el.description_short}
                photos={el.photos}
                price_weekday={el.price_weekday} 
                beds_types={el.beds_types} 
                rooms_types={el.rooms_types}
                cur_scale = {cur_scale}
                cur_rate = {cur_rate}
              />
            );
          })}
        </div>
        <MainButton value="Подробнее" handler={() => navigate("/houses")}/>
      </HomeBlockTemplate>

      <HomeBlockTemplate title={titleKitchen}>
        <p>{kitchenDescription}</p>
        
        <div className={styles["carousel-container"]}>
          <Carousel settings={kitchenSliderSettings}>
            {dishes && dishes.map((el) => {
              return (
                <KitchenCard
                  key={el.id}
                  id = {el.id}
                  photo={el.photo}
                  title={el.title}
                  description={el.description}
                />
              );
            })}
          </Carousel>
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate title={titleEntertainment}>
        <p> {entertainmentDescription} </p>        
        <div className={styles["entertainment-container"]}>
          {entertainments && entertainments.slice(0, 6).map((el, index) => {
            return (
              <EntertainmentCard
                title={el.title}
                photos={el.photos}
                key={el.id} 
                id={el.id}
              />
            );
          })}
        </div>
        <MainButton
          value="Подробнее"
          className={styles["entertainment-button"]}
          handler={() => navigate("/entertainments")}
        />
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton value={title} buttonValue={nameForSearchButton} />
      </HomeBlockTemplate>
    </>
  );
};
