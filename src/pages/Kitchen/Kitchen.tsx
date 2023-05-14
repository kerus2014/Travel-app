import { FaceBlock } from "../../components/FaceBlock";
import image from "../../assets/pics/KitchenPage/Изображение.png";
import { FormForOrder } from "../../components/Form";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { kitchenCardData } from "../../services/datas";
import { KitchenCard } from "../../components/cards/KitchenCard";
import styles from "./Kitchen.module.scss";
import { MealTimeCard } from "../../components/cards/MealTimeCard";
import { useEffect, useState } from "react";
import { House, IKitchenCard } from "../../types";

export const Kitchen = () => {
  // const { data, error } = useGetObjectsQuery();
  // console.log(error);
  const [kitchenData,setKitchenData] = useState<IKitchenCard[]>([]);

  const URL = `http://45.147.176.176/api/dishes/`;
  const request = new Request(URL, {
    method: "GET",
  });

  useEffect(() => {
    fetch(request)
      .then(res => res.json())
      .then(res => setKitchenData(res))
      .catch(console.error);
  },[kitchenData])


  return (
    <>
      <FaceBlock title="Домашняя кухня" image={image} />
      <HomeBlockTemplate title="Расписание">
        <div className={styles["meal-time"]}>
          <MealTimeCard title="Завтрак" time="9:00" price="15" />
          <MealTimeCard title="Обед" time="12:00" price="15" />
          <MealTimeCard title="Ужин" time="18:00" price="15" />
        </div>
        <div className={styles.title}>У нас можно попробовать</div>
        <div className={styles.grid}>
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
        </div>
      </HomeBlockTemplate>
      <FormForOrder />
    </>
  );
};
