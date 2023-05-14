import styles from "./Home.module.scss";
import { Container } from "../../components/Container/Container";
import { KitchenCard } from "../../components/cards/KitchenCard";
import { MainButton } from "../../components/buttons/mainButton/MainButton";
import { BackgroundBlockImage } from "../../components/BackgroundBlockImage";
import image from "../../assets/pics/Home/faceBlock/20200806_154912 1.png";
import { FormForOrder } from "../../components/Form/Form";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate/HomeBlockTemplate";
import {
  entertainmentCardData,
  faceBlockCarouselImages,
  // housesData,
} from "../../services/datas";
import { HouseLittleCard } from "../../components/cards/HouseLittleCard/HouseLittleCard";
import { Carousel } from "../../components/Carousel/Carousel";
import { EntertainmentCard } from "../../components/cards/EntertainmentCard/EntertainmentCard";
import { useEffect, useState } from "react";
import { Settings } from "react-slick";
import { House, IKitchenCard } from "../../types";

export const Home = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [housesData,setHousesData] = useState<House[]>([]);
  const [kitchenData,setKitchenData] = useState<IKitchenCard[]>([]);

  const URL = `http://45.147.176.176/api/objects/`;
  const request = new Request(URL, {
    method: "GET",
  });

  const URL2 = `http://45.147.176.176/api/dishes/`;
  const request2 = new Request(URL2, {
    method: "GET",
  });

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

  useEffect(() => {
    fetch(request)
      .then(res => res.json())
      .then(res => setHousesData(res))
      .catch(console.error);
    fetch(request2)
    .then(res => res.json())
    .then(res => setKitchenData(res))
    .catch(console.error);
  },[housesData,kitchenData])

  return (
    <>
      <div className={styles["face-block"]}>
        <BackgroundBlockImage image={image} />
        <Container>
          <div className={styles["content-container"]}>
            <div className={styles["left-side"]}>
              <div className={styles.title}>Заповедный остров</div>
              <p>
                Уникальное и красивейший уголо к Беларуси – на настоящем
                островке между двух озер Ивесь и Озерко. Ручьи и болота отделяют
                это место от всего мира: лишь стоит пересечь небольшой ручеек,
                как вы попадете в совершенно другую стихию – без шума, суеты и
                забот. Большая территория усадьбы «Заповедный остров»
                располагает к множеству занятий различного рода.
              </p>
            </div>
            <div className={styles["right-side"]}>
              <Carousel settings={sliderFaceBlockSettings}>
                {faceBlockCarouselImages.map((el, index) => {
                  return <img key={index.toString()} src={el.image} alt="" />;
                })}
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
      <FormForOrder
        value="Заповедный остров"
        buttonValue="Найти домик"
        className={styles.form}
      />

      <HomeBlockTemplate title="Домики" className={styles.houses}>
        <p>Проживание - полный пансион!</p>
        <p>
          Стоимость на аренду меняется в зависимости от времени года,
          продолжительности отдыха и дней недели.
        </p>
        <p>
          У нас представлены разные варианты отдыха от эконом до VIP. Бывают
          спец.предложения и "форточки".
        </p>
        <div className={styles.cards}>
          {housesData.slice(0,3).map((el, index) => {
            return (
              <HouseLittleCard
                key={index.toString()}
                title={el.title}
                description_short={el.description_short}
                objects_photos={el.objects_photos}
                price_weekday={el.price_weekday}
              />
            );
          })}
        </div>
        <MainButton value="Подробнее" />
      </HomeBlockTemplate>

      <HomeBlockTemplate title="Домашняя кухня">
        <p>
          Полноценный отдых не обойдется без хорошего питания! Мы готовы
          угостить наших гостей домашней кухней.{" "}
        </p>
        <p>
          У нас имеется свое подворье и огород. Некоторые блюда готовятся в
          русской печи, а что-то и на мангале, костре.
        </p>
        <div className={styles["carousel-container"]}>
          <Carousel settings={kitchenSliderSettings}>
            {kitchenData.map((el, index) => {
              return (
                <KitchenCard
                  key={index.toString()}
                  photo={el.photo}
                  title={el.title}
                  description={el.description}
                />
              );
            })}
          </Carousel>
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate title="Развлечения">
        <p>
          Развлечения на территории нашей усадьбы словно Вы оказались в деревне
          у бабушки.
        </p>
        <p>Каждая минута наполнена яркими событиями</p>
        <div className={styles["entertainment-container"]}>
          {entertainmentCardData.slice(0, 6).map((el, index) => {
            return (
              <EntertainmentCard
                title={el.title}
                image={el.image}
                key={index.toString()}
              />
            );
          })}
        </div>
        <MainButton
          value="Подробнее"
          className={styles["entertainment-button"]}
        />
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <FormForOrder value="Заповедный остров" buttonValue="Найти домик" />
      </HomeBlockTemplate>
    </>
  );
};
