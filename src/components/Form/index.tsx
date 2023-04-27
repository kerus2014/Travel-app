import styles from "./index.module.scss"
import { ClassName } from "../../types"
import { MainButton } from "../buttons/mainButton/MainButton"

interface IProps extends ClassName{
  buttonValue:string;
  value:string;
}

export const Form = (props:IProps) => {
  return (
    <div className={props.className ? `${styles.form} ${props.className}` : styles.form}>
        <p>
          {props.value}
        </p>
        <MainButton value={props.buttonValue} />
    </div>
  )
}