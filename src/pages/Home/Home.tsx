import styles from "./Home.module.scss";
import {Container} from "../../components/Container/Container";
import {KitchenCard} from "../../components/cards/KitchenCard";
import {MainButton} from "../../components/buttons/mainButton/MainButton";
import {BackgroundBlockImage} from "../../components/BackgroundBlockImage";
import image from "../../assets/pics/Home/faceBlock/20200806_154912 1.png";
import {FormForOrder} from "../../components/Form/Form";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate/HomeBlockTemplate";
import {
    entertainmentCardData,
    faceBlockCarouselImages, housesData, kitchenCardData,
    // housesData,
} from "../../services/datas";
import {HouseLittleCard} from "../../components/cards/HouseLittleCard/HouseLittleCard";
import {Carousel} from "../../components/Carousel/Carousel";
import {EntertainmentCard} from "../../components/cards/EntertainmentCard/EntertainmentCard";
import {useEffect, useState} from "react";
import {Settings} from "react-slick";
import {House, IKitchenCard} from "../../types";
import {useGetDishesQuery, useGetEntertainmentsQuery} from "../../reduxTools/requests/requests";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    // const [housesData,setHousesData] = useState<House[]>([]);
    // const [kitchenData, setKitchenData] = useState<IKitchenCard[]>([]);
    const {data} = useGetEntertainmentsQuery();
    const navigate = useNavigate()

    const URL = `http://eugenest.vh77.hosterby.com/api/objects/`;
    const request = new Request(URL, {
        method: "GET",
    });

    const URL2 = `http://eugenest.vh77.hosterby.com/api/dishes/`;
    const request2 = new Request(URL2, {
        method: "GET",
    });

    const sliderFaceBlockSettings: Settings = {
        slidesToShow: 1,
        centerPadding: "137px",
        infinite: true,
        speed: 300,
        arrows: false,
        centerMode: true,
        dots: true,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                    speed: 300,
                    centerMode: true,
                    variableWidth: true
                }
            }
        ]
    };

    const housesSliderSettings = {
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 3,
        centerPadding: "0px",
        centerMode: true,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 3,
                    dots: false,
                }
            },
        ]
    };

    const kitchenSliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    row: 1,
                    slidesPerRow: 2,
                }
            }
        ]
    };

    useEffect(() => {
        fetch(request)
            .then(res => res.json(),)
            // .then(res => setHousesData(res))
            .catch(console.error);
        fetch(request2)
            .then(res => res.json())
            // .then(res => setKitchenData(res))
            .catch(console.error);
    }, [])
    return (
        <>
            <div className={styles["face-block"]}>
                <BackgroundBlockImage image={image}/>
                <Container>
                    <div className={styles["content-container"]}>
                        <div className={styles["left-side"]}>
                            <div className={styles.title}>Заповедный остров</div>
                            <p className={styles.descriptionTitle}>
                                Уникальное и красивейший уголок в Беларуси – на настоящем
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
                                    return <img key={index.toString()} src={el.image} alt=""/>;
                                })}
                            </Carousel>
                        </div>
                    </div>
                    <FormForOrder
                        value="Заповедный остров"
                        buttonValue="Найти домик"
                        className={styles.form}
                    />
                </Container>
            </div>
            <HomeBlockTemplate title="Домики" className={styles.houses}>
                <div className={styles.blockDescription}>
                    <p>Проживание - полный пансион!</p>
                    <p>
                        Стоимость на аренду меняется в зависимости от времени года,
                        продолжительности отдыха и дней недели.
                    </p>
                    <p>
                        У нас представлены разные варианты отдыха от эконом до VIP. Бывают
                        специальные предложения и "форточки".
                    </p>
                </div>
                <div className={styles["houses-carousel"]}>
                    <Carousel settings={housesSliderSettings}>
                        {housesData.map((el, index) => {
                            return (
                                <HouseLittleCard
                                    key={index.toString()}
                                    title={el.title}
                                    description_short={el.description_short}
                                    photos={el.photos}
                                    price_weekday={el.price_weekday}
                                />
                            );
                        })}
                    </Carousel>
                </div>
                <MainButton value="Подробнее" handler={() => navigate("/houses")}/>
            </HomeBlockTemplate>

            <HomeBlockTemplate title="Домашняя кухня" className={styles.kitchen}>
                <div className={styles.blockDescription}>
                    <p>
                        Полноценный отдых не обойдется без хорошего питания! Мы готовы
                        угостить наших гостей домашней кухней.{" "}
                    </p>
                    <p>
                        У нас имеется свое подворье и огород. Некоторые блюда готовятся в
                        русской печи, а что-то и на мангале, костре.
                    </p>
                </div>
                <div className={styles["carousel-container"]}>
                    <Carousel settings={kitchenSliderSettings}>
                        {kitchenCardData.map((el, index) => {
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
                <div className={styles.blockDescription}>
                    <p>
                        Развлечения на территории нашей усадьбы словно Вы оказались в деревне
                        у бабушки.
                    </p>
                    <p>Каждая минута наполнена яркими событиями</p>
                </div>
                <div className={styles["entertainment-container"]}>
                    {entertainmentCardData && entertainmentCardData.map((el, index) => {
                        return (
                            <EntertainmentCard
                                title={el.title}
                                entertaiments_photos={el.entertaiments_photos}
                                key={index.toString()}
                            />
                        );
                    })}
                </div>
                <MainButton
                    value="Подробнее"
                    className={styles["entertainment-button"]}
                    handler={() => navigate("/entertainment")}
                />
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <FormForOrder value="Заповедный остров" buttonValue="Найти домик" className={styles.formFooter}/>
            </HomeBlockTemplate>
        </>
    );
};
