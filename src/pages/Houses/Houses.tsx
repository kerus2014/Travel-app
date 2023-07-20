import image from "../../assets/pics/HousesPage/housesPageBgImageBanner.png";
import HouseBigCard from "../../components/cards/HouseBigCard";
import styles from "./Houses.module.scss";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { House } from "../../types";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { useGetObjectsQuery, useGetMainPageQuery } from "../../reduxTools/requests/apiRequests";
import { BeatLoader } from "react-spinners";
import { ToFormButton } from "../../components/buttons/toFormButton";
import { useDatas} from "../../services/useDatas";
import { useRate } from "../../services/useRate";


export const Houses = () => {
  const { data, isError:houseErr, isLoading:houseLoad} = useGetObjectsQuery();
  const datas = useDatas();
  const rate = useRate();

  const {title, titleHouse, house_back, nameForSearchButton} = datas
  const {cur_rate, cur_scale} = rate;
    
  return (
    <>
      <FaceBlock title={titleHouse} image={house_back} />
      <HomeBlockTemplate title="">
        <div className={styles["houses-container"]}>
          {data ? data.map((house:House) => {
            return (
              <HouseBigCard
                key={house.id}
                id={house.id}
                title={house.title}
                description_short={house.description_short}
                description_long={house.description_long}
                photos={house.photos}
                price_weekday={house.price_weekday}
                price_holiday={house.price_holiday}
                features={house.features}
                pers_num={house.pers_num}
                bed_count={house.bed_count}
                beds_types={house.beds_types} 
                rooms_types={house.rooms_types}
                cur_rate = {cur_rate}
                cur_scale = {cur_scale}
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
