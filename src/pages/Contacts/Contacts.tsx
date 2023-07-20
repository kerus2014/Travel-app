import { BigLogo } from "../../assets/icons/BigLogo";
import { ContactsInfo } from "../../components/ContactsInfo";
import { Container } from "../../components/Container";
import styles from "./Contacts.module.scss";
import { FullscreenControl, GeolocationControl, Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const Contacts = () => {
    
  return (
    <>
      <div className={styles.header}></div>
      <Container>
        <div className={styles.row}>
          <div className={styles.logo}>
            <BigLogo/>
          </div>
          <ContactsInfo hideLogo={true} className={styles.contacts}/>
        </div>
      </Container>
      <YMaps>
        <Map 
          defaultState={{ center: [55.167786, 28.250614], zoom: 14, controls: [], }} 
          className={styles.map} 
        >
          <GeolocationControl options={{ float: "right" }} />
          <FullscreenControl   />
          <Placemark geometry={[55.167786, 28.250614]} />
        </Map>
        
      </YMaps>
    </>
  );
};
