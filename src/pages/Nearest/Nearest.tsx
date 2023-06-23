import { FormForOrder } from "../../components/Form";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { NearestCard } from "../../components/cards/NearestCard";
import { useGetNearestQuery } from "../../reduxTools/requests/requests";
import styles from "./Nearest.module.scss";
import { BeatLoader } from "react-spinners";

const Nearest = () => {
  const { data } = useGetNearestQuery();
  console.log(data);

  return (
    <>
      <div className={styles.header}></div>
      <HomeBlockTemplate title="">
        <div className={styles.container}>
          {data ? data.map((nearestCard) => (
            <NearestCard key={nearestCard.id} element={nearestCard} />
          ))
          :
          <div className={styles.preload}>
          <BeatLoader color="#583711" />
          </div>
          }
        </div>
      </HomeBlockTemplate>{" "}
      <HomeBlockTemplate>
        <FormForOrder value="Заповедный остров" buttonValue="Найти домик" />
      </HomeBlockTemplate>
    </>
  );
};

export default Nearest;
