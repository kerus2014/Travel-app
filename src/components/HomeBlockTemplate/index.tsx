import { ClassName } from "../../types";
import { Container } from "../Container";
import styles from "./index.module.scss";

interface Props extends ClassName {
  children: React.ReactNode;
  id?:string;
  title:string;
}

export const HomeBlockTemplate = (props: Props) => {
  return (
    <div
      className={
        props.className ? `${styles.block} ${props.className}` : styles.block
      }
      id={props.id}
    >
      <Container>
        <div className={styles.title}>{props.title}</div>
        {props.children}
      </Container>
    </div>
  );
};
