import { ClassName } from "../../types";
import styles from "./FormInput.module.scss";

interface IProps extends ClassName {
  type: string;
  placeholder?:string;
  label?:string;
  icon?:JSX.Element;
  required?:boolean;
}

export const FormInput = (props: IProps) => {
  const { type,placeholder,label,icon, required } = props;
  return (
    <label className={styles.label}>
      <p>{label}{required ? "*" : null}</p>
      {icon}
      <input type={type} placeholder={placeholder}/>
    </label>
  );
};
