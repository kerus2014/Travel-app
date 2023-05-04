import styles from "./Price.module.scss";

interface IProps {
  price: string;
  type: "weekday" | "weekend";
}

const Price = (props: IProps) => {
  const { type, price } = props;
  return (
    <div className={styles.container}>
      от <span>{price}</span> BYN {type === "weekday" ? "будни" : "выходные"}
    </div>
  );
};

export default Price;
