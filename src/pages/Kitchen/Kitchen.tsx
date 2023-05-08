import { FaceBlock } from "../../components/FaceBlock";
import image from "../../assets/pics/KitchenPage/Изображение.png";
import { FormForOrder } from "../../components/Form";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { kitchenCardData } from "../../services/datas";
import { KitchenCard } from "../../components/cards/KitchenCard";
import styles from "./Kitchen.module.scss";
import { MealTimeCard } from "../../components/cards/MealTimeCard";

export const Kitchen = () => {
  // const { data, error } = useGetObjectsQuery();
  // console.log(error);
  // const [housesData,setHousesData] = useState<House[]>([]);

  // const URL = `http://eugene2r.beget.tech/api/objects/`;
  // const request = new Request(URL, {
  //   mode: 'no-cors',
  //   credentials: 'include',
  //   method: "GET",
  //   headers: {
  //     'Content-Type': "application/json",
  //     "Authorization": "Basic YWRtaW46MTIzMTIz",
  //   },
  // });

  // console.log(housesData);
  

  // useEffect(() => {
  //   fetch(request)
  //     .then(res => res.json())
  //     .then(res => setHousesData(res))
  //     .catch(console.error);
  // },[housesData])

  return (
    <>
      <FaceBlock title="Домашняя кухня" image={image}/>
      <HomeBlockTemplate title="Расписание">
        <div className={styles["meal-time"]}>
          <MealTimeCard title="Завтрак" time="9:00" price="15"/>
          <MealTimeCard title="Обед" time="12:00" price="15"/>
          <MealTimeCard title="Ужин" time="18:00" price="15"/>
        </div>
        <div className={styles.title}>У нас можно попробовать</div>
        <div className={styles.grid}>
          {kitchenCardData.map((el,index) => {
            return <KitchenCard key={index.toString()} image={el.image} title={el.title} description={el.description}/>
          })
          }
        </div>
      </HomeBlockTemplate>
      <FormForOrder/>
    </>
  );
};
