import { useGetEntertainmentsQuery } from "../../reduxTools/requests/requests";
import { EntertainmentBigCard } from "../../components/cards/EntertainmentBigCard/EntertainmentBigCard";
import image from "../../assets/pics/Entertainment/Картинка.png";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import styles from "./Entertainment.module.scss";
import { FormForOrder } from "../../components/Form";
import { FaceBlock } from "../../components/FaceBlock";

const Entertainment = () => {
  const { data } = useGetEntertainmentsQuery();

  if (data === undefined) {
    return null;
  }
  return (
    <>
      <FaceBlock title="Развлечения" image={image}/>
      <HomeBlockTemplate title="">
        <div className={styles.container}>
          {data.map((element) => (
            <EntertainmentBigCard key={element.id} {...element} />
          ))}
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <FormForOrder/>
      </HomeBlockTemplate>
    </>
  );
};

export default Entertainment;
