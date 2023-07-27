import {BigLogo} from "../../assets/icons/BigLogo";
import {ContactsInfo} from "../../components/ContactsInfo";
import {Container} from "../../components/Container";
import {FaceBlock} from "../../components/FaceBlock";
import {FormForOrder} from "../../components/Form";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {RuleCard} from "../../components/cards/RuleCard";
import {rulesData} from "../../services/datas";
import styles from "./Contacts.module.scss";
import {FullscreenControl, GeolocationControl, Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {ClassName} from "../../types";

export const Contacts = () => {
    // const { data, error } = useGetObjectsQuery();
    // console.log(error);
    // const [housesData,setHousesData] = useState<House[]>([]);

    // const URL = `http://eugene2r.beget.tech/api/objects/`;
    // const request = new Request(URL, {
    //   mode: 'no-cors',
    //   credentials: 'include',
    //   method: "GET",
    //   headers: {
    //     'Content-Type': "application/json",
    //     "Authorization": "Basic YWRtaW46MTIzMTIz",
    //   },
    // });

    // console.log(housesData);


    // useEffect(() => {
    //   fetch(request)
    //     .then(res => res.json())
    //     .then(res => setHousesData(res))
    //     .catch(console.error);
    // },[housesData])


    return (
        <>
            <HomeBlockTemplate title="">
                <div className={styles["contacts-block"]}>
                    <div className={styles.logo}>
                        <BigLogo/>
                    </div>
                    <ContactsInfo hideLogo={true} className={styles.contacts}/>
                </div>
            </HomeBlockTemplate>
            <YMaps>
                <Map
                    defaultState={{center: [55.167786, 28.250614], zoom: 14, controls: [],}}
                    className={styles.map}
                >
                    <GeolocationControl options={{float: "right"}}/>
                    <FullscreenControl/>
                    <Placemark geometry={[55.167786, 28.250614]}/>
                </Map>

            </YMaps>
        </>
    );
};
