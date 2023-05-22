import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { NearestCard } from "../../components/cards/NearestCard";
import { useGetNearestQuery } from "../../reduxTools/requests/requests";
import styles from "./Nearest.module.scss";

const Nearest = () => {
  const { data } = useGetNearestQuery();
  console.log(data);

  return (
    <>
      <div className={styles.header}></div>
      <HomeBlockTemplate title="">
        <div className={styles.container}>
          {data?.map((nearestCard) => (
            <NearestCard key={nearestCard.id} element={nearestCard} />
          ))}
        </div>
      </HomeBlockTemplate>{" "}
    </>
  );
};

export default Nearest;
