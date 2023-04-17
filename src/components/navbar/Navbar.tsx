import styles from "./Navbar.module.scss";

import { useState } from "react";

// import { useNavigate } from "react-router-dom";
import { NavLink } from "../navlink";

const Navbar = (props: any) => {
  const [activeLink, setActiveLink] = useState("Главная");

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const navbarData = [
    {
      id: 1,
      value: "Главная",
      handler: (value: any) => {
        setActiveLink(value);
        // navigate("");
        // dispatch(closeMenuStateAction());
      },
    },
    {
      id: 2,
      value: "Моя история",
      handler: (value: any) => {
        setActiveLink(value);
        // navigate("/about");
        // dispatch(closeMenuStateAction());
      },
    },
    {
      id: 3,
      value: "Проекты",
      handler: (value: any) => {
        setActiveLink(value);
        // dispatch(closeMenuStateAction());
        // navigate("/projects/etno");
      },
    },
    {
      id: 4,
      value: "Кейсы",
      handler: (value: any) => {
        setActiveLink(value);
        // dispatch(closeMenuStateAction());
        // navigate("/cases/category1");
      },
    },
    {
      id: 5,
      value: "Блог",
      handler: (value: any) => {
        setActiveLink(value);
        // dispatch(closeMenuStateAction());
        // navigate("/blog/events");
      },
    },
    {
      id: 6,
      value: "Сотрудничество",
      handler: (value: any) => {
        setActiveLink(value);
        // navigate("/services/audit");
        // dispatch(closeMenuStateAction());
      },
    },
    {
      id: 7,
      value: "Контакты",
      handler: (value: any) => {
        setActiveLink(value);
        // navigate("/contacts");
        // dispatch(closeMenuStateAction());
      },
    },
  ];

  return (
    <ul
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
      {navbarData.map(({ id, value, handler }) => (
        <NavLink
          key={id}
          value={value}
          handler={handler}
          activeLink={activeLink}
        />
      ))}
    </ul>
  );
};

export default Navbar;
