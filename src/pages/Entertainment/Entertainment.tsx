import { useGetEntertainmentsQuery } from "../../reduxTools/requests";
import { EntertainmentBigCard } from "../../components/cards/EntertainmentBigCard/EntertainmentBigCard";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import styles from "./Entertainment.module.scss";
import { FaceBlock } from "../../components/FaceBlock";
import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import {useDatas} from "../../services/useDatas"

const Entertainment = () => {
  const { data } = useGetEntertainmentsQuery();
  const datas = useDatas();
  const {titleEntertainment, entertainments_back} = datas;

  
  return (
    <>
      <FaceBlock title={titleEntertainment} image={entertainments_back}/>
      <HomeBlockTemplate title="">
        <div className={styles.container}>
          {data && data.map((element) => (
            <EntertainmentBigCard key={element.id} {...element} />
          ))}
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton/>
      </HomeBlockTemplate>
    </>
  );
};

export default Entertainment;
