import styles from "./index.module.scss"
import { FlagItem } from "../../FlagItem"
import { IEntertainmentCard } from "../../../types"

export const EntertainmentCard = (props:IEntertainmentCard) => {
  const {id,image,title} = props

  return(
    <div className={styles.card}>
      <img src={image} alt="" />
      <FlagItem value={title} className={styles.flag}/>
    </div>
  )
}