import styles from "./Layout.module.scss";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect,  } from "react";
import { FormForOrder } from "../Form";
import { Arrow } from "../../assets/icons/Arrow";
import { Footer } from "../Footer";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";
import { useGetObjectsQuery } from "../../reduxTools/requests/apiRequests";


export const Layout = () => {
  const { data } = useGetObjectsQuery();
  const burgerIsOpen = useSelector((state:AppState) => state.burgerMenu.isOpen)
  const isFormOpen = useSelector((state:AppState) => state.form.isFormOpen)
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
  },[data]);
   
  if (data === undefined) {
    return null;
  }
  
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
        <FormForOrder/>        
      </div>
    </div>
  );
};