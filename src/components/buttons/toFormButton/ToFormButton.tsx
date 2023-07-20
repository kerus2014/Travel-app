import styles from "./ToFormButton.module.scss";
import { ClassName } from "../../../types";
import { useDispatch } from "react-redux";
import { MainButton } from "../mainButton/MainButton";
import { changeFormStateAction } from "../../../reduxTools/formForOrderHouse/actions";

interface IProps extends ClassName {
  buttonValue?: string;
  value?: string;
}

export const ToFormButton = (props: IProps) => {
  const {buttonValue="Найти домик",value="Заповедный остров",className} = props
  const dispatch = useDispatch()
  return (
    <div
      className={
        className ? `${styles.form} ${className}` : styles.form
      }
    >
      <p>{value}</p>
      <MainButton value={buttonValue} handler={() =>{
        // document.body.style.position = 'fixed';
        // document.body.style.width = '100%';
        // document.body.style.top = `-${window.scrollY}px`;
        document.body.style.overflow = "hidden"
        dispatch(changeFormStateAction())
      }
      }/>
    </div>
  );
};