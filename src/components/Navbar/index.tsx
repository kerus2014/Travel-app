import { useDispatch } from "react-redux";
import { closeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { ClassName, INavbarData} from "../../types";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props: ClassName) => {
  const dispatch = useDispatch()

  const navbarData: INavbarData[] = [
    {
      id: 1,
      value: "Главная",
      path: "/",
    },
    {
      id: 2,
      value: "Домики",
      path: "/houses",
    },
    {
      id: 3,
      value: "Домашняя Кухня",
      path:"/kitchen",
    },
    {
      id: 4,
      value: "Развлечения",
      path: "/entertainment"
    },
    {
      id: 5,
      value: "Галерея",
      path: "/galery"
    },
    {
      id: 6,
      value: "Правила",
      path: "/rules",
    },
    {
      id: 7,
      value: "Контакты",
      path: "/contacts",
    },
  ];

  return (
    <nav
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
      {navbarData.map(({ id, value, path }) => (
        <NavLink key={id.toString()} to={path} className={({ isActive }: { isActive: boolean }): string => (isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"])} onClick={() => dispatch(closeMenuStateAction())} >
          {value}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
