import { FaceBlock } from "../../components/FaceBlock";
import { ToFormButton } from './../../components/buttons/toFormButton/ToFormButton';
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { RuleCard } from "../../components/cards/RuleCard";
import { useGetRuleQuery } from "../../reduxTools/requests/apiRequests";
import styles from "./Rules.module.scss";


export const Rules = () => {
  const { data } = useGetRuleQuery();
  console.log(data)
  return (
    <>
      <div className={styles.header}></div>
      <HomeBlockTemplate title="Правила усадьбы">
        <div className={styles.grid}>
          {data && data.map((el) => {
            return <RuleCard key={el.id} content={el.content}/>
          })}
        </div>
      </HomeBlockTemplate>
      <ToFormButton className={styles.form}/>
    </>
  );
};
