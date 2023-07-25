import {FaceBlock} from "../../components/FaceBlock";
import {FormForOrder} from "../../components/Form";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {RuleCard} from "../../components/cards/RuleCard";
import {rulesData} from "../../services/datas";
import styles from "./Rules.module.scss";

export const Rules = () => {
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
            <HomeBlockTemplate title="Правила усадьбы">
                <div className={styles["rules-block"]}>
                    {rulesData.map((el, index) => {
                        return <RuleCard key={index.toString()} content={el.content}/>
                    })}
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <FormForOrder className={styles.form}/>
            </HomeBlockTemplate>
        </>
    );
};
