import styles from "./MainButton.module.scss";

interface IButton {
  value: string;
  handler?: () => void;
}

export const MainButton = (props: IButton) => {
  const { value, handler } = props;
  return (
    <button onClick={handler} className={styles.button}>
      {value}
    </button>
  );
};

