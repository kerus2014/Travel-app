import cn from "classnames";
import styles from "./Navlink.module.scss";

interface IProps {
  value: any;
  handler: any;
  activeLink: any;
}
const NavLink = (props: IProps) => {
  const { value, handler, activeLink } = props;

  return (
    <li
      className={cn(styles.link, {
        [styles["link_active"]]: activeLink === value,
      })}
      onClick={() => handler(value)}
    >
      {value}
    </li>
  );
};

export default NavLink;
