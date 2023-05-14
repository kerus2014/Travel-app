import styles from "./Layout.module.scss";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Arrow } from "../../assets/icons/Arrow";
import { Footer } from "../Footer";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";
import { useDispatch } from "react-redux";
import { closeFormStateAction } from "../../reduxTools/formForOrderHouse/actions";

export const Layout = () => {
  const burgerIsOpen = useSelector((state:AppState) => state.burgerMenu.isOpen)
  const isFormOpen = useSelector((state:AppState) => state.form.isFormOpen)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    const element = document.body;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  });

  return (
    <div className={styles.layout}>
      <Header className={burgerIsOpen || visible ? styles["header-background"] : undefined} />
      <Outlet />
      <Footer/>
      <div
        onClick={handleClick}
        className={visible ? styles["arrow-top"] : styles.hide}
        id="arrow-top"
      >
        <Arrow />
      </div>
      <div className={isFormOpen ? styles.container : styles.hide}>
        <div className={styles.form}>
          <div className={styles["close-button"]} onClick={() => dispatch(closeFormStateAction())}>&#10006;</div>
        </div>
      </div>
    </div>
  );
};
