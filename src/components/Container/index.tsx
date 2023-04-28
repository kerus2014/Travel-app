import { ClassName } from "../../types";
import styles from "./index.module.scss";
import cn from "classnames";

interface Props extends ClassName{
  children:React.ReactNode
}

export  const Container = (props:Props) => {
  const {className,children} = props
  return(
    <div className={className ? `${styles.container} ${className}` : styles.container}>
      {children}
    </div>
  )
}