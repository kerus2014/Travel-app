import styles from "./FlagItem.module.scss";

interface IProps {
  value: string;
}

const FlagItem = (props: IProps) => {
  const { value } = props;
  return (
    <div className={styles.flag}>
      <p className={styles["flag__text"]}>{value}</p>
    </div>
  );
};

export default FlagItem;
