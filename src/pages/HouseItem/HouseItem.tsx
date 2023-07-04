import styles from "./HouseItem.module.scss";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useState, useEffect } from "react";
import { DUSH, House, INTERNET, KUHNIYA, MANGAL, TELEVISOR } from "../../types";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { useGetObjectCurrentQuery } from "../../reduxTools/requests";
import { ToFormButton } from '../../components/buttons/toFormButton';
import { useParams } from "react-router";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import { Person } from "../../assets/icons/features/Person";
import { FlagItem } from "../../components/FlagItem";
import { LittleMealTimeCard } from "../../components/cards/LittleMealTimeCard";
import { BigBed } from "../../assets/icons/features/BigBed";
import { TV } from "../../assets/icons/features/TV";
import { Fridge } from "../../assets/icons/features/Fridge";
import { Shower } from "../../assets/icons/features/Shower";
import { Internet } from "../../assets/icons/features/Internet";
import { KitchenIcon } from "../../assets/icons/features/KitchenIcon";
import { BeatLoader } from "react-spinners";

export const HouseItem = () => {
  const {id} = useParams();
  const { data } = useGetObjectCurrentQuery(id!);
  
  if (!data) return null
  console.log(data)
  return (
    <>
      {JSON.stringify(data) != "{}" ?
      <>
        <FaceBlock title={data.title} image={data.photos[0]} />
        <HomeBlockTemplate >
          <div className={styles.container}>
            <div className={styles["left-column"]}>
              <div className={styles["first-row"]}>
                <h1>{data.title}</h1>
                <div>
                  <span>{data.pers_num}</span>
                  <Person/>
                  <div className={styles["beds-container"]}>
                    {data.rooms_types && data.rooms_types.map((el,index) => {
                      for(let key in el){
                        if (key === "Спальня"){
                          return (<p>{el[key]} {+el[key] > 1 ? "спальни(ен)" : "спальня"}</p>)
                        }
                        if (key === "Гостинная"){
                          return (<p>{el[key]} {+el[key] > 1 ? "гостиных" : "гостиная"}</p>)
                        }
                      }
                    })}
                  </div>
                </div>
              </div>
              <MyGallery images={data.photos}/>
              <div className={styles.features}>
                <h1>Удобства в домике</h1>
                <hr />
                <div className={styles.grid}>
                  {data.bed_count && data.bed_count > 0 ? <div className={styles["grid-item"]}><BigBed littleIcon={true}/> {data.bed_count} {data.bed_count == 1 ? "кровать" : "кровати(ей)"}</div> : null }
                  {
                    data.features?.map((elem, index) => {
                      switch(elem) {
                        case TELEVISOR:  
                          return <div className={styles["grid-item"]}><TV littleIcon={true}/> {TELEVISOR}</div>;
                        case MANGAL:  
                          return <div className={styles["grid-item"]}><Fridge littleIcon={true}/> {MANGAL}</div>;
                        case KUHNIYA:  
                          return <div className={styles["grid-item"]}><KitchenIcon littleIcon={true}/> {KUHNIYA}</div>;
                        case DUSH:  
                          return <div className={styles["grid-item"]}><Shower littleIcon={true}/> {DUSH}</div>;
                        case INTERNET:  
                          return <div className={styles["grid-item"]}><Internet littleIcon={true}/> {INTERNET}</div>;
                        default:
                          return null;
                      }
                    }
                  )}
                </div>
              </div>
              
              <p className={styles["description"]}>{data.description_long}</p>
            </div>
            <div className={styles["right-column"]}>
              <p>{data.description_short}</p>
              <ToFormButton value="Забронировать домик" buttonValue="Забронировать" className={styles.form}/>
              <div className={styles.prices}>
                <FlagItem value="За дом в сутки" className={styles.flag}/>
                <div className={styles.row}>
                  от <span>{data.price_weekday}</span> BYN будние дни 
                </div>
                <div className={styles.row}>
                  от <span>{data.price_holiday}</span> BYN выходные дни
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

        <HomeBlockTemplate>
          <ToFormButton value="Заповедный остров" buttonValue="Найти домик" />
        </HomeBlockTemplate>
      </>
      :
      <div className={styles.preload}><BeatLoader color="#583711" /></div>
      }
    </>
    
  );
};
//// ?.slice(0,data.price_weekday?.length-3)
//?.slice(0,data.price_holiday?.length-3)