import { useGetEntertainmentsQuery } from "../../reduxTools/requests/apiRequests";
import { EntertainmentBigCard } from "../../components/cards/EntertainmentBigCard/EntertainmentBigCard";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import styles from "./Entertainment.module.scss";
import { FaceBlock } from "../../components/FaceBlock";
import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import {useDatas} from "../../services/useDatas";
import { useRate } from "../../services/useRate";


const Entertainment = () => {
  const { data } = useGetEntertainmentsQuery();
  const datas = useDatas();
  const rate = useRate();
  const {titleEntertainment, entertainments_back} = datas;
  const {cur_rate, cur_scale } = rate;
  
  return (
    <>
      <FaceBlock title={titleEntertainment} image={entertainments_back}/>
      <HomeBlockTemplate title="">
        <div className={styles.container}>
          {data && data.map((element) => (
            <EntertainmentBigCard 
              key={element.id} 
              cur_rate = {cur_rate}
              cur_scale = {cur_scale}
              {...element}
             />
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
