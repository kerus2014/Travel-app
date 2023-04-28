import { ClassName } from "../../types";
import styles from "./FlagItem.module.scss";
import React from "react";

interface IProps extends ClassName{
  value: string;
}

export const FlagItem = (props: IProps) => {
  const { value,className } = props;
  return (
    <div className={className ? `${styles.flag} ${className}` : styles.flag}>
      <p className={styles["flag__text"]}>{value}</p>
    </div>
  );
};

