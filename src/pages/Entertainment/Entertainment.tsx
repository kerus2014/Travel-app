import {useGetEntertainmentsQuery} from "../../reduxTools/requests/requests";
import {EntertainmentBigCard} from "../../components/cards/EntertainmentBigCard/EntertainmentBigCard";
import image from "../../assets/pics/Entertainment/Картинка.png";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import styles from "./Entertainment.module.scss";
import {FormForOrder} from "../../components/Form";
import {FaceBlock} from "../../components/FaceBlock";
import {entertainmentCardData, photoExample} from "../../services/datas";
import Carousel from "../../components/Carousel";

const Entertainment = () => {
    // const { data } = useGetEntertainmentsQuery();

    // if (data === undefined) {
    //   return null;
    // }

    const entertainmentCardsSettings = {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // rows: 3,
        // dots: true,
        // infinite: true,
        // slidesPerRow: 3,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        dots: true,
        infinite: true,
        slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 3,
                    slidesPerRow: 1,
                }
            }
        ]
    };

    return (
        <>
            <FaceBlock title="Развлечения" image={image}/>
            <HomeBlockTemplate title="">
                <div className={styles.container}>
                    <Carousel settings={entertainmentCardsSettings}>
                        {/*{data.map((element) => (*/}
                        {entertainmentCardData.map((element) => (
                            <EntertainmentBigCard key={element.id} {...element} />
                        ))}
                    </Carousel>
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <FormForOrder/>
            </HomeBlockTemplate>
        </>
    );
}
    ;

    export default Entertainment;
