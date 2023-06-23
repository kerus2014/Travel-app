import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import cn from "classnames";
import { LittleArrow } from "../../assets/icons/LittleArrow";
import { HouseIcon } from "../../assets/icons/inputIcons/HouseIcon";

export interface IDropdownData {
  id?: number;
  title: string;
}

interface IProps {
  dropdownData: IDropdownData[];
  icon:React.ReactNode
}

export const TabItem = (props: IProps) => {
  const { dropdownData,icon } = props;
  const [value, setValue] = useState('');

  const clickTabItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    e.stopPropagation();
    setValue(value);
  };

  return (
    <div></div>
  );
};

export default TabItem;
