import styles from "./MainButton.module.scss";

interface IButton {
  value: string;
  handler?: () => void;
}

const MainButton = (props: IButton) => {
  const { value, handler } = props;
  return (
    <button onClick={handler} className={styles.button}>
      {value}
    </button>
  );
};

export default MainButton;
