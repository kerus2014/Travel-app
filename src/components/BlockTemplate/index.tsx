import { ClassName } from "../../types";
import { Container } from "../Container";
import styles from "./index.module.scss";

interface Props extends ClassName {
  children: React.ReactNode;
  id?:string;
}

export const BlockTemplate = (props: Props) => {
  return (
    <div
      className={
        props.className ? `${styles.block} ${props.className}` : styles.block
      }
      id={props.id}
    >
      <Container>{props.children}</Container>
    </div>
  );
};
