import styles from "./Form.module.scss";
import { ClassName } from "../../types";
import { MainButton } from "../buttons/mainButton/MainButton";

interface IProps extends ClassName {
  buttonValue?: string;
  value?: string;
}

export const FormForOrder = (props: IProps) => {
  const {buttonValue="Найти домик",value="Заповедный остров",className} = props
  return (
    <div
      className={
        className ? `${styles.form} ${className}` : styles.form
      }
    >
      <p>{value}</p>
      <MainButton value={buttonValue} />
    </div>
  );
};
