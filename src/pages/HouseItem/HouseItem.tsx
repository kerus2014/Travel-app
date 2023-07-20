import styles from "./HouseItem.module.scss";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {useState, useEffect} from "react";
import {DUSH, House, INTERNET, KUHNIYA, MANGAL, TELEVISOR} from "../../types";
import {FaceBlock} from "../../components/FaceBlock/FaceBlock";
import {useGetObjectsQuery} from "../../reduxTools/requests/requests";
import {FormForOrder} from "../../components/Form";
import {useParams} from "react-router";
import {MyGallery} from "../../components/ImageGalleryCarousel";
import {Person} from "../../assets/icons/features/Person";
import {FlagItem} from "../../components/FlagItem";
import {LittleMealTimeCard} from "../../components/cards/LittleMealTimeCard";
import {BigBed} from "../../assets/icons/features/BigBed";
import {TV} from "../../assets/icons/features/TV";
import {Fridge} from "../../assets/icons/features/Fridge";
import {Shower} from "../../assets/icons/features/Shower";
import {Internet} from "../../assets/icons/features/Internet";
import {KitchenIcon} from "../../assets/icons/features/KitchenIcon";
import {BeatLoader} from "react-spinners";
import {housesData} from "../../services/datas";

export const HouseItem = () => {
    const {id} = useParams()
    // const { data, error } = useGetObjectsQuery();
    // console.log(data);

    // const [houseItem,setHouseItem] = useState<House>({} as House);

    const houseItem = housesData[0]

    const URL = `http://eugenest.vh77.hosterby.com/swagger-ui/objects/${id}`;
    const request = new Request(URL, {
        method: "GET",
    });

    // useEffect(() => {
    //   fetch(request)
    //     .then(res => res.json())
    //     .then(res => setHouseItem(res))
    //     .catch(console.error);
    // },[houseItem])

    return (
        <>
            {JSON.stringify(houseItem) != "{}" ?
                <>
                    <FaceBlock title={houseItem.title} image={houseItem.photos[0]}/>
                    <HomeBlockTemplate>
                        <div className={styles.container}>
                            <div className={styles["house-info"]}>
                                <h1>{houseItem.title}</h1>
                                <div className={styles["block-commonInfo"]}>
                                    <div>
                                        <span>{houseItem.pers_num}</span>
                                        <Person/>
                                    </div>
                                    <div className={styles["beds-container"]}>
                                        {houseItem.rooms_count && houseItem.rooms_count.map((el: any, index) => {
                                            for (let key in el) {
                                                if (key === "Спальня") {
                                                    return (<p>{el[key]} {+el[key] > 1 ? "спальни(ен)" : "спальня"}</p>)
                                                }
                                                if (key === "Гостинная") {
                                                    return (<p>{el[key]} {+el[key] > 1 ? "гостинных" : "гостинная"}</p>)
                                                }
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className={styles["left-column"]}>
                                <MyGallery images={houseItem.photos}/>
                                <p className={styles["description"]}>{houseItem.description_long}</p>
                            </div>
                            <div className={styles["right-column"]}>
                                {/*<p>{houseItem.description_short}</p>*/}
                                <FormForOrder value="Забронировать домик" buttonValue="Забронировать"
                                              className={styles.form}/>
                                <div className={styles.features}>
                                    <h2>Удобства в домике</h2>
                                    <div className={styles.line}></div>
                                    <div className={styles.grid}>
                                        {houseItem.beds_count && houseItem.beds_count > 0 ?
                                            <div className={styles["grid-item"]}><BigBed
                                                littleIcon={true}/> {houseItem.beds_count} {houseItem.beds_count == 1 ? "кровать" : "кровати(ей)"}
                                            </div> : null}
                                        {
                                            houseItem.objects_features?.map((elem, index) => {
                                                    switch (elem) {
                                                        case TELEVISOR:
                                                            return <div className={styles["grid-item"]}><TV
                                                                littleIcon={true}/> {TELEVISOR}</div>;
                                                        case MANGAL:
                                                            return <div className={styles["grid-item"]}><Fridge
                                                                littleIcon={true}/> {MANGAL}</div>;
                                                        case KUHNIYA:
                                                            return <div className={styles["grid-item"]}><KitchenIcon
                                                                littleIcon={true}/> {KUHNIYA}</div>;
                                                        case DUSH:
                                                            return <div className={styles["grid-item"]}><Shower
                                                                littleIcon={true}/> {DUSH}</div>;
                                                        case INTERNET:
                                                            return <div className={styles["grid-item"]}><Internet
                                                                littleIcon={true}/> {INTERNET}</div>;
                                                        default:
                                                            return null;
                                                    }
                                                }
                                            )}
                                    </div>
                                </div>
                                <div className={styles.prices}>
                                    <FlagItem value="За дом в сутки" className={styles.flag}/>
                                    <div className={styles.row}>
                                        от <span>{houseItem.price_weekday?.slice(0, houseItem.price_weekday?.length - 3)}</span> BYN
                                        будние дни
                                    </div>
                                    <div className={styles.row}>
                                        от <span>{houseItem.price_holiday?.slice(0, houseItem.price_holiday?.length - 3)}</span> BYN
                                        выходные дни
                                    </div>
                                </div>
                                <div className={styles.kitchen}>
                                    <h2>Кухня</h2>
                                    <LittleMealTimeCard/>
                                    <LittleMealTimeCard title="Обед" time="14:00"/>
                                    <LittleMealTimeCard title="Ужин" time="19:00" price="20"/>
                                </div>
                            </div>
                        </div>
                    </HomeBlockTemplate>

                    {/*<HomeBlockTemplate>*/}
                    {/*    <FormForOrder value="Заповедный остров" buttonValue="Найти домик"/>*/}
                    {/*</HomeBlockTemplate>*/}
                </>
                :
                <div className={styles.preload}><BeatLoader color="#583711"/></div>
            }
        </>

    );
};
