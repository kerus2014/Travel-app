import {FaceBlock} from "../../components/FaceBlock";
import image from "../../assets/pics/KitchenPage/Изображение.png";
import {FormForOrder} from "../../components/Form";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {kitchenCardData} from "../../services/datas";
import {KitchenCard} from "../../components/cards/KitchenCard";
import styles from "./Kitchen.module.scss";
import {MealTimeCard} from "../../components/cards/MealTimeCard";
import {useEffect, useState} from "react";
import {House, IKitchenCard} from "../../types";
import {BeatLoader} from "react-spinners";
import Carousel from "../../components/Carousel";
import {LittleKitchenCard} from "../../components/cards/LittleKitchenCard/LittleKitchenCard";

export const Kitchen = () => {
    // const { data, error } = useGetObjectsQuery();
    // console.log(error);
    const [kitchenData, setKitchenData] = useState<IKitchenCard[]>([]);

    const URL = `http://eugenest.vh77.hosterby.com/swagger-ui/dishes/`;
    const request = new Request(URL, {
        method: "GET",
    });

    const kitchenCardsSettings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
        dots: true,
        infinite: true,
        slidesPerRow: 6,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    row: 1,
                    slidesPerRow: 8,
                }
            }
        ]
    }

    useEffect(() => {
        fetch(request)
            .then(res => res.json())
            .then(res => setKitchenData(res))
            .catch(console.error);
    }, [kitchenData]);

    const windowWidth = document.body.clientWidth;

    return (
        <>
            <FaceBlock title="Домашняя кухня" image={image}/>
            <HomeBlockTemplate title="">
                <div className={styles["kitchen-container"]}>
                    {windowWidth <= 360 ?
                        <LittleKitchenCard/>
                        : <div className={styles["meal-time-block"]}>
                            <div className={styles["meal-time-title"]}>Расписание</div>
                            <div className={styles["meal-time"]}>
                                <MealTimeCard title="Завтрак" time="9:00" price="15"/>
                                <MealTimeCard title="Обед" time="12:00" price="15"/>
                                <MealTimeCard title="Ужин" time="18:00" price="15"/>
                            </div>
                        </div>
                    }
                    <div className={styles["meal-slider-block"]}>
                        <div className={styles["meal-slider-title"]}>У нас можно попробовать</div>
                        <div className={styles["meal-slider"]}>
                            {/*{kitchenData ? kitchenData.map((el, index) => {*/}
                            <Carousel settings={kitchenCardsSettings}>
                                {kitchenCardData ? kitchenCardData.map((el, index) => {
                                        return (
                                            <KitchenCard
                                                key={index.toString()}
                                                photo={el.photo}
                                                title={el.title}
                                                description={el.description}
                                            />

                                        );
                                    })
                                    :
                                    <div className={styles.preload}>
                                        <BeatLoader color="#583711"/>
                                    </div>
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <FormForOrder value="Заповедный остров" buttonValue="Найти домик"/>
            </HomeBlockTemplate>
        </>
    );
};
