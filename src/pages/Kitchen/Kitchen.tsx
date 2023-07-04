import { FaceBlock } from "../../components/FaceBlock";
import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useDatas } from "../../services/useDatas";
import { KitchenCard } from "../../components/cards/KitchenCard";
import styles from "./Kitchen.module.scss";
import { MealTimeCard } from "../../components/cards/MealTimeCard";
import { BeatLoader } from "react-spinners";
import { useGetFeedingInfoQuery, useGetDishesQuery } from "../../reduxTools/requests";


export const Kitchen = () => {
  const { data: meal} = useGetFeedingInfoQuery();
  const { data: dishes } = useGetDishesQuery();
  const datas = useDatas();
  const {title, titleKitchen, kitchen_back, nameForSearchButton} = datas
  
  return (
    <>
      <FaceBlock title={titleKitchen} image={kitchen_back} />
      <HomeBlockTemplate title="Расписание">
        <div className={styles["meal-time"]}>
          <MealTimeCard title="Завтрак" time="9:00" price="15" />
          <MealTimeCard title="Обед" time="12:00" price="15" />
          <MealTimeCard title="Ужин" time="18:00" price="15" />
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
