import styles from "./Price.module.scss";

interface IProps {
  price: number;
  type: "weekday" | "weekend";
}

const Price = (props: IProps) => {
  const { type, price } = props;
  return (
    <div className={styles.container}>
      <p>от <span>{price}</span> BYN </p>
      <p>{type === "weekday" ? "будни" : "выходные"}</p>
    </div>
  );
};

export default Price;
