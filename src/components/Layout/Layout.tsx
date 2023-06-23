import styles from "./Layout.module.scss";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef, ChangeEventHandler } from "react";
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
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import { DateRange, DayPicker, SelectRangeEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Calendar } from "../../assets/icons/inputIcons/Calendar";
import { MainButton } from "../buttons/mainButton/MainButton";

export const Layout = () => {
  const burgerIsOpen = useSelector((state:AppState) => state.burgerMenu.isOpen)
  const isFormOpen = useSelector((state:AppState) => state.form.isFormOpen)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [housesData,setHousesData] = useState<House[]>([]);
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<any>(null);
  const refCalendarOne = useRef<any>(null)

  const resizeTextArea = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [textareaValue]);

  const onChangeTextarea = (e:any) => {
    setTextareaValue(e.target.value);
  };
  
  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = ( range: DateRange | undefined ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };

  // const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
  //   setIsFocus(true);
  //   setIsBlur(false);
  // };

  // const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
  //   setIsFocus(false);
  //   setIsBlur(true);
  // };

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

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click",hideOnClickOutside,true)
  })

  const hideOnEscape = (e:KeyboardEvent) => {
    if( e.key === "Escape"){
      setIsFocus(false)
    }
  }

  const hideOnClickOutside = (e:any) => {
    if(refCalendarOne.current && !refCalendarOne.current.contains(e.target)){
      setIsFocus(false)
    }
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
        <form className={styles.form}>
          <div className={styles["close-button"]} onClick={() =>{
              document.body.style.overflow = "visible"
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
            <div className={styles["from-date"]}>
              <FormInput type="text" label="Дата заезда" required={true} value={fromValue} placeholder="2023-06-03" icon={<Calendar/>} onClick={() => setIsFocus(true)} onChange={handleFromChange}/>
              <div ref={refCalendarOne} className={styles.calendar}>
                {isFocus &&
                <DayPicker
                  mode="range"
                  selected={selectedRange}
                  onSelect={handleRangeSelect}
                  showOutsideDays
                />
                }
              </div>
              
            </div>
            <div>
              <FormInput type="text" label="Дата выезда" required={true} value={toValue} placeholder="2023-06-03" icon={<Calendar/>} onClick={() => setIsFocus(true)} onChange={handleToChange}/>
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

          <div className={styles["textarea-container"]}>
            <p>Комментарий</p>
            <textarea placeholder="Комментарий" className={styles.textarea} ref={textareaRef} value={textareaValue} onChange={onChangeTextarea} rows={4}/>
          </div>
          <MainButton className={styles["submit-button"]} value={"Отправить"}/>
        </form>
      </div>
    </div>
  );
};
