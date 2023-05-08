import image from "../../assets/pics/HousesPage/housesPageBgImageBanner.png";
import { BackgroundBlockImage } from "../../components/BackgroundBlockImage";
import { Container } from "../../components/Container";
import { housesData } from "../../services/datas";
import HouseBigCard from "../../components/cards/HouseBigCard";
import styles from "./Houses.module.scss";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import {useState,useEffect} from "react"
import { House } from "../../types";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";

export const Houses = () => {
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
      <FaceBlock title="Домики" image={image}/>
      <HomeBlockTemplate title="">
        <div className={styles["houses-container"]}>
          {housesData.map((house, index) => {
            return (
              <HouseBigCard
                key={index.toString()}
                title={house.title}
                description_short={house.description_short}
                description_long={house.description_long}
                objects_photos={house.objects_photos}
                price_weekday={house.price_weekday}
                price_holiday={house.price_holiday}
                objects_features={house.objects_features}
              />
            );
          })}
        </div>
      </HomeBlockTemplate>
    </>
  );
};
