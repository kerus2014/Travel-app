import styles from "./HouseItem.module.scss";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useState, useEffect } from "react";
import { House } from "../../types";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { useGetObjectsQuery } from "../../reduxTools/requests/requests";
import { FormForOrder } from "../../components/Form";
import { useParams } from "react-router";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import { Person } from "../../assets/icons/features/Person";
import { FlagItem } from "../../components/FlagItem";
import { LittleMealTimeCard } from "../../components/cards/LittleMealTimeCard";

export const HouseItem = () => {
  const {id} = useParams()
  // const { data, error } = useGetObjectsQuery();
  // console.log(data);

  const [houseItem,setHouseItem] = useState<House>({} as House);

  const URL = `http://45.147.176.176/api/objects/${id}`;
  const request = new Request(URL, {
    method: "GET",
  });

  useEffect(() => {
    fetch(request)
      .then(res => res.json())
      .then(res => setHouseItem(res))
      .catch(console.error);
  },[houseItem])

  return (
    <>
      {JSON.stringify(houseItem) != "{}" ?
      <>
        <FaceBlock title={houseItem.title} image={houseItem.objects_photos[0]} />

        <HomeBlockTemplate >
          <div className={styles.container}>
            <div className={styles["left-column"]}>
              <div className={styles["first-row"]}>
                <h1>{houseItem.title}</h1>
                <div>
                  <span>{houseItem.pers_num}</span>
                  <Person/>
                  <div className={styles["beds-container"]}>
                    {houseItem.rooms_count?.bdr && houseItem.rooms_count.bdr > 0 ? <p>{houseItem.rooms_count.bdr} спальни</p> : null}
                    {houseItem.rooms_count?.gst && houseItem.rooms_count.gst > 0 ? <p>{houseItem.rooms_count.gst} {houseItem.rooms_count.gst == 1 ? "гостиная" : "гостиных"}</p> : null}
                  </div>
                </div>
              </div>
              <MyGallery images={houseItem.objects_photos}/>
              <p className={styles["description"]}>{houseItem.description_long}</p>
            </div>
            <div className={styles["right-column"]}>
              <p>{houseItem.description_short}</p>
              <FormForOrder value="Забронировать домик" buttonValue="Забронировать" className={styles.form}/>
              <div className={styles.prices}>
                <FlagItem value="За дом в сутки" className={styles.flag}/>
                <div className={styles.row}>
                  от <span>{houseItem.price_weekday?.slice(0,houseItem.price_weekday?.length-3)}</span> BYN будние дни
                </div>
                <div className={styles.row}>
                  от <span>{houseItem.price_holiday?.slice(0,houseItem.price_holiday?.length-3)}</span> BYN выходные дни
                </div>
              </div>
              <div className={styles.kitchen}>
                <h2>Кухня</h2>
                <LittleMealTimeCard/>
                <LittleMealTimeCard/>
                <LittleMealTimeCard/>
              </div>
            </div>
          </div>
        </HomeBlockTemplate>

        <HomeBlockTemplate>
          <FormForOrder value="Заповедный остров" buttonValue="Найти домик" />
        </HomeBlockTemplate>
      </>
      :
      <div>Загрузка...</div>
      }
    </>
    
  );
};
