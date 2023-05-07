import styles from "./Header.module.scss";
import { Container } from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import { Logo } from "../../assets/icons/Logo";
import { ClassName } from "../../types";

export const Header = (props: ClassName) => {
  return (
    <div
      className={
        props.className ? `${styles.header} ${props.className}` : styles.header
      }
    >
      <Container>
        <div className={styles["content-container"]}>
          <Logo />
          <Navbar className={styles.navigation}/>
        </div>
      </Container>
    </div>
  );
};
