import { useGetEntertainmentsQuery } from "../../reduxTools/requests/requests";
import { EntertainmentBigCard } from "../../components/cards/EntertainmentBigCard/EntertainmentBigCard";

import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import styles from "./Entertainment.module.scss";

const Entertainment = () => {
  const { data } = useGetEntertainmentsQuery();

  console.log(data);
  if (data === undefined) {
    return null;
  }
  return (
    <HomeBlockTemplate title="">
      <div className={styles.container}>
        {data.map((element) => (
          <EntertainmentBigCard key={element.id} {...element} />
        ))}
      </div>
    </HomeBlockTemplate>
  );
};

export default Entertainment;
