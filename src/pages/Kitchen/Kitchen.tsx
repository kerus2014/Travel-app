import { FaceBlock } from "../../components/FaceBlock";
import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";
import { KitchenCard } from "../../components/cards/KitchenCard";
import styles from "./Kitchen.module.scss";
import { MealTimeCard } from "../../components/cards/MealTimeCard";
import { BeatLoader } from "react-spinners";
import { useGetFeedingInfoQuery, useGetDishesQuery } from "../../reduxTools/requests/apiRequests";
import { IMeal } from "../../types";


export const Kitchen = () => {
  const { data: meal} = useGetFeedingInfoQuery();
  const { data: dishes } = useGetDishesQuery();
  const datas = useDatas();
  const rate = useRate();
  const {title, titleKitchen, kitchen_back, nameForSearchButton} = datas;
  const {cur_rate, cur_scale} = rate;
  
  
  return (
    <>
      <FaceBlock title={titleKitchen} image={kitchen_back} />
      <HomeBlockTemplate title="Расписание">
        <div className={styles["meal-time"]}>
         {meal && meal.map((el:IMeal) => {
            return (
              <MealTimeCard
                key={el.id}
                id = {el.id}
                time={el.time}
                title={el.title}
                price={el.price}
                cur_rate ={cur_rate}
                cur_scale ={cur_scale}
                
              />
            );
          })
        }
        </div>
        <div className={styles.title}>У нас можно попробовать</div>
        <div className={styles.grid}>
          {dishes ? dishes.map((el) => {
            return (
              <KitchenCard
                key={el.id}
                id = {el.id}
                photo={el.photo}
                title={el.title}
                description={el.description}
              />
            );
          })
          :
          <div className={styles.preload}>
            <BeatLoader color="#583711" />
          </div>
          }
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton value={title} buttonValue={nameForSearchButton} />
      </HomeBlockTemplate>
    </>
  );
};
