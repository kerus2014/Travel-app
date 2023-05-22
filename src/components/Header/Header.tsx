import styles from "./Header.module.scss";
import { Container } from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import { Logo } from "../../assets/icons/Logo";
import { ClassName } from "../../types";
import { useDispatch } from "react-redux";
import { changeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";

export const Header = (props: ClassName) => {
  const burgerIsOpen = useSelector(
    (state: AppState) => state.burgerMenu.isOpen
  );
  const dispatch = useDispatch();
  return (
    <div
      className={
        props.className ? `${styles.header} ${props.className}` : styles.header
      }
    >
      <Container>
        <div className={styles["content-container"]}>
          <Logo />
          <Navbar className={styles.navigation} />
          <div
            className={
              burgerIsOpen
                ? `${styles["menu-button-container"]} ${styles["menu-open"]}`
                : styles["menu-button-container"]
            }
            onClick={() => dispatch(changeMenuStateAction())}
          >
            <div className={styles["menu-button"]}>
              <div className={styles["line"]}></div>
            </div>
          </div>
          <div
            className={
              burgerIsOpen
                ? `${styles["menu"]} ${styles["menu-open"]}`
                : styles["menu"]
            }
          >
            <Container>
              <Navbar />
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};
