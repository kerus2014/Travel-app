import styles from "./Header.module.scss";
import {Container} from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import {Logo} from "../../assets/icons/Logo/Logo";
import {HeaderProps} from "../../types";
import {useSelector} from "react-redux";
import {AppState} from "../../reduxTools/store";
import {Cross} from "../../assets/icons/Cross/Cross";
import {Burger} from "../Burger/Burger";
import cn from "classnames";

export const Header = (props: HeaderProps) => {
    const burgerIsOpen = useSelector(
        (state: AppState) => state.burgerMenu.isOpen
    );
    return (
        <div className={cn(styles.header, {[styles.headerBg]: burgerIsOpen || props.visible})}>
            <Container>
                <div className={styles["content-container"]}>
                    <Logo/>
                    <Navbar className={styles.navigation}/>
                    {burgerIsOpen ? <Cross/> : <Burger visible={props.visible}/>}
                    <div className={burgerIsOpen ? `${styles["menu"]} ${styles["menu-open"]}` : styles["menu"]}>
                        <Container>
                            <Navbar/>
                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    );
};
