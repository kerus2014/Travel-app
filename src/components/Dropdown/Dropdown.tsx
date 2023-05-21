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

export const Dropdown = (props: IProps) => {
  const { dropdownData,icon } = props;
  const [open, setOpen] = useState<boolean>(false);

  const [value, setValue] = useState('');

  const closeDropdownMenu = () => {
    setOpen(false);
  };
  const toggleDropdownMenu = () => {
    setOpen((prevState) => !prevState);
  };
  const clickDropdownItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    e.stopPropagation();
    closeDropdownMenu();
    setValue(value);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdownMenu}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles["dropdown__value"]}>{value}</div>
      <div
        className={cn(styles["dropdown__items"], {
          [styles["dropdown__items_visible"]]: open,
        })}
      >
        {dropdownData.map(({ title }) => (
          <div className={styles["dropdown__item"]} key={title} onClick={(e) => clickDropdownItem(e, title)}>
            {title}
          </div>
        ))}
      </div>
      <div className={cn(styles["dropdown__arrow"], { [styles["dropdown__arrow-open"]]: open, })}>
        <div>
          <LittleArrow/>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
