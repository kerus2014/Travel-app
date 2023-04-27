import styles from "./FlagItem.module.scss";
import React from "react";

interface IProps {
  value: string;
}

export const FlagItem = (props: IProps) => {
  const { value } = props;
  return (
    <div className={styles.flag}>
      <p className={styles["flag__text"]}>{value}</p>
    </div>
  );
};

