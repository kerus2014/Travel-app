import {useParams} from "react-router";
import {useGetEntertainmentsCurrentQuery} from "../../reduxTools/requests/requests";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {entertainmentCardData, photoExample} from "../../services/datas";
import {MyGallery} from "../../components/ImageGalleryCarousel";
import styles from "./EntertainmentCurrent.module.scss";
import image from "../../assets/pics/Entertainment/Картинка.png";
import {FaceBlock} from "../../components/FaceBlock";
import {Container} from "../../components/Container";
import {FormForOrder} from "../../components/Form";

const EntertainmentCurrent = () => {
    const {id} = useParams();
    const {data} = useGetEntertainmentsCurrentQuery(id!);
    console.log(data);

    return (
        <>
            <FaceBlock title="Развлечения" image={image}/>
            <HomeBlockTemplate>
                <Container>
                    <div className={styles.card}>
                        <p className={styles.title}>
                            {entertainmentCardData[0].title}
                            {/*{data?.title}*/}
                        </p>
                        <div className={styles.sliderContainer}>
                            {
                                // data?.entertaiments_photos
                                entertainmentCardData[0].entertaiments_photos
                                    ?
                                    <MyGallery images={entertainmentCardData[0].entertaiments_photos}
                                               thubnailPosition="right"/>
                                    :
                                    null
                            }
                        </div>
                        <div className={styles.info}>
                            <p className={styles.description}>
                                {/*{data?.description_long}*/}
                                {entertainmentCardData[0]?.description_long}
                            </p>
                            <div className={styles.price}>Цены</div>
                            <div className={styles.line}></div>
                            <div className={styles.grid}>
                                {
                                    // data?.entertaiments_prices && data?.entertaiments_prices.map((el,index) => {
                                    entertainmentCardData[0]?.entertaiments_prices && entertainmentCardData[0]?.entertaiments_prices.map((el, index) => {
                                        for (let key in el) {
                                            return (
                                                <>
                                                    <div>{key}</div>
                                                    <div>{el[key]}</div>
                                                </>

                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <FormForOrder/>
            </HomeBlockTemplate>
        </>
    );
};

export default EntertainmentCurrent;
