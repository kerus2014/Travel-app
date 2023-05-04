import { ClassName } from "../../../types";
import styles from "./MainButton.module.scss";

interface IButton extends ClassName {
  value: string;
  handler?: () => void;
}

export const MainButton = (props: IButton) => {
  const { value, handler, className } = props;
  return (
    <button
      onClick={handler}
      className={className ? `${styles.button} ${className}` : styles.button}
    >
      {value}
    </button>
  );
};
