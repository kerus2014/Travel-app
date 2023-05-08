import { ShipIcon } from "../../../assets/icons/Ship";
import { Rule } from "../../../types";
import styles from "./RuleCard.module.scss";

export const RuleCard = (props: Rule) => {
  const { content } = props;
  return (
    <div className={styles.flag}>
      <div>
        <ShipIcon/>
      </div>
      <p>
        {content}
      </p>
    </div>
  );
};
