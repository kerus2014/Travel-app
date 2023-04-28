import styles from "./index.module.scss";

interface IProps{
  image:string;
}

export const BackgroundBlockImage = (props:IProps) => {
  const {image} = props

  return (
    <>
      <div className={styles.image}>
        <img src={image} alt="background image" />
      </div>

      <div className={styles.background}>
      </div>
    </>
  )
}