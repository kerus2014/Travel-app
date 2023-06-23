import { ClassName } from "../../types";
import styles from "./FormInput.module.scss";
import React, { ChangeEventHandler } from 'react';

interface IProps extends ClassName {
  type: string;
  placeholder?:string;
  label?:string;
  icon?:JSX.Element;
  required?:boolean;
  error?:boolean;
  value?:string;
  ref?:React.RefObject<HTMLInputElement>;
  onChange?:ChangeEventHandler<HTMLInputElement>;
  onFocus?:(event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?:(event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?:() => void;
}

export const FormInput = (props: IProps) => {
  const { type,placeholder,label,icon, required,error,value,ref, onFocus, onBlur, onClick } = props;
  return (
    <label className={error ? `${styles.label} ${styles.error}` : styles.label}>
      <p>{label}{required ? "*" : null}</p>
      {icon}
      <input type={type} placeholder={placeholder} value={value} ref={ref} onClick={onClick} onFocus={onFocus} onBlur={onBlur}/>
      {error && (
        <div className={styles["error-icon"]}>!</div>
      )}
    </label>
  );
};
