import styles from "./HouseItem.module.scss";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useState, useEffect } from "react";
import { DUSH, House, IMeal, INTERNET, KUHNIYA, MANGAL, TELEVISOR } from "../../types";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { useGetFeedingInfoQuery, useGetObjectCurrentQuery } from "../../reduxTools/requests/apiRequests";
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
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";

export const HouseItem = () => {
  const {id} = useParams();
  const { data } = useGetObjectCurrentQuery(id!);
  const { data:meal} = useGetFeedingInfoQuery();
  const datas = useDatas();
  const {title, nameForSearchButton} = datas;
  const rate = useRate();
  const price_weekday = data?.price_weekday?
  `от ${Math.round (Number(data.price_weekday) / rate.cur_scale * rate.cur_rate/10) * 10} BYN будние дни`
  : "цену уточняйте"
  const price_holiday = data?.price_holiday?
  `от ${Math.round (Number(data.price_holiday) / rate.cur_scale * rate.cur_rate/10) * 10} BYN выходные дни`
  : price_weekday


  if (!data) return(
  <div className={styles.preload}><BeatLoader color="#583711" /></div>
  )
  console.log(data)
  return (
    <>
      {JSON.stringify(data) !== "{}" ?
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
              <ToFormButton value={title} buttonValue={nameForSearchButton} className={styles.form}/>
              <div className={styles.prices}>
                <FlagItem value="За дом в сутки" className={styles.flag}/>
                <div className={styles.row}>
                  {price_weekday}  
                </div>
                <div className={styles.row}>
                  {price_holiday} 
                </div>
              </div>
              <div className={styles.kitchen}>
                <h2>Кухня</h2>
                {meal && meal.map((el:IMeal) => {
                  return (
                <LittleMealTimeCard
                  key={el.id}
                  id = {el.id}
                  time={el.time}
                  title={el.title}
                  price={el.price}
                  cur_rate = {rate.cur_rate}
                  cur_scale = {rate.cur_scale}
                />
                );
              })
            }
               
              </div>
            </div>
          </div>
        </HomeBlockTemplate>

        <HomeBlockTemplate>
          <ToFormButton value={title} buttonValue={nameForSearchButton}  />
        </HomeBlockTemplate>
      </>
      :
      <div className={styles.preload}><BeatLoader color="#583711" /></div>
      }
    </>
    
  );
};
