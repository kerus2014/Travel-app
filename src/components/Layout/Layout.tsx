import styles from "./Layout.module.scss";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Arrow } from "../../assets/icons/Arrow";

export const Layout = () => {
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
      <Header className={visible ? styles["header-background"] : undefined} />
      <Outlet />
      <div
        onClick={handleClick}
        className={visible ? styles["arrow-top"] : styles.hide}
        id="arrow-top"
      >
        <Arrow />
      </div>
    </div>
  );
};
