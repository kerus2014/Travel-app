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
import { FormInput } from "../FormInput";
import { Phone } from "../../assets/icons/inputIcons/Phone";
import { Email } from "../../assets/icons/inputIcons/Email";
import { Telegram } from "../../assets/icons/inputIcons/Telegram";
import { Persons } from "../../assets/icons/inputIcons/Persons";
import { Pets } from "../../assets/icons/inputIcons/Pets";
import { Dropdown } from "../Dropdown";
import { House } from "../../types";
import { Person } from "../../assets/icons/features/Person";
import { sexData } from "../../services/datas";
import { HouseIcon } from "../../assets/icons/inputIcons/HouseIcon";
import { Name } from "../../assets/icons/inputIcons/Name";
import { Passport } from "../../assets/icons/inputIcons/Passport";
import { Adress } from "../../assets/icons/inputIcons/Adress";
import * as fi from "date-fns/locale/fi";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Layout = () => {
  const burgerIsOpen = useSelector((state:AppState) => state.burgerMenu.isOpen)
  const isFormOpen = useSelector((state:AppState) => state.form.isFormOpen)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [housesData,setHousesData] = useState<House[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const URL = `http://45.147.176.176/api/objects/`;
  const request = new Request(URL, {
    method: "GET",
  });

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

    fetch(request)
      .then(res => res.json())
      .then(res => setHousesData(res))
      .catch(console.error);
  },[housesData]);

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
          <div className={styles["close-button"]} onClick={() =>{
              const scrollY = document.body.style.top;
              document.body.style.position = '';
              document.body.style.top = '';
              window.scrollTo(0, parseInt(scrollY || '0') * -1);
              dispatch(closeFormStateAction())
            } 
          }>
            &#10006;
          </div>

          <h1>найти домик</h1>
          <p>Обязательное поле*</p>
          <div className={`${styles.grid} ${styles["first-grid"]}`}>
            <div>
              <p className={styles.label}>Домик*</p>
              <Dropdown dropdownData={housesData} icon={<HouseIcon/>}/>
            </div>
            <FormInput type="text" label="Ф.И.О." required={true} placeholder="Иванов Иван Иванович" icon={<Name/>}/>
            <div>
              <p className={styles.label}>Пол*</p>
              <Dropdown dropdownData={sexData} icon={<Persons/>}/>
            </div>
          </div>
          <div className={`${styles.grid} ${styles["second-grid"]}`}>
            <FormInput type="text" label="Паспорт" required={true} placeholder="Республика Беларусь" icon={<Passport/>}/>
            <FormInput type="text" label="Адрес" required={true} placeholder="ул. Ленина 42, кв 42, г. Минск, Беларусь" icon={<Adress/>}/>
          </div>
          <h2>контакты</h2>
          <div className={`${styles.grid} ${styles.contacts}`}>
            <FormInput type="phone" label="Телефон" required={true} placeholder="+375 (29) 99-99-999" icon={<Phone/>}/>
            <FormInput type="email" label="Почта" required={true} placeholder="ivanov@gmail.com" icon={<Email/>}/>
            <FormInput type="text" label="Telegram" required={true} placeholder="@ivanov" icon={<Telegram/>}/>
          </div>
          <h2>подробности</h2>
          <div className={`${styles.grid} ${styles.more}`}>
            <FormInput type="text" label="Количество гостей" required={true} placeholder="4" icon={<Persons/>}/>
            <FormInput type="text" label="Количество спальных мест" required={true} placeholder="6" icon={<Email/>}/>
            <FormInput type="text" label="Баня" required={true} placeholder="нуждается" icon={<Telegram/>}/>
            <FormInput type="text" label="Путешествуете с домашними животными?" required={true} placeholder="Собака породы Корги" icon={<Pets/>}/>
          </div>
          <DatePicker 
            onChange={(date) => {setStartDate(date)}}
            id="startDate"
            required={true}
            locale="fi"
            dateFormat="d.M.yyyy"
          />
        </div>
      </div>
    </div>
  );
};
