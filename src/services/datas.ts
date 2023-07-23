import {
    DUSH,
    House,
    IEntertainmentCard,
    IKitchenCard, INTERNET,
    ISexData, KUHNIYA, MANGAL,
    Rule, TELEVISOR,
} from "../types";
import haromi from "../assets/pics/houses/haromiIaromi/Изображение.png";
import eggs from "../assets/pics/kitchen/kitchenLogoExample.png";
import faceImg1 from "../assets/pics/Home/carouselImages/20210607_104318 1.png";
import faceImg2 from "../assets/pics/Home/carouselImages/IMG-1127d31fd8da398fa5b4f7f8a070e0b5-V 1.png";
import faceImg3 from "../assets/pics/Home/carouselImages/IMG-1127d31fd8da398fa5b4f7f8a070e0b5-V 2.png";
import entertainment from "../assets/pics/Entertainment/Картинка.png"

export const sexData: ISexData[] = [
    {
        title: "Мужской",
    },
    {
        title: "Женский",
    },
];

export const housesData: House[] = [
    {
        title: "Домик Харомы Яромы",
        description_short: `Деревянный дом в аренду. (Харомы Яромы) рассчитан на размещение семи человек ...`,
        description_long: `В этом доме 2 спальни, гостиная, кухня и туалет.
    Вся мебель ручной работы.
    Имеется интернет, телевидение. Перед домом большая беседка с русской печкой и летней кухней, мангал, гамак, место для костра. Рядом детская площадка. Вся мебель ручной работы.
    Имеется интернет, телевидение. Перед домом большая беседка с русской печкой и летней кухней, мангал, гамак, место для костра. Рядом детская площадка. Вся мебель ручной работы.
    Имеется интернет, телевидение. Перед домом большая беседка с русской печкой и летней кухней, мангал, гамак, место для костра. Рядом детская площадка. Вся мебель ручной работы.
    Имеется интернет, телевидение. Перед домом большая беседка с русской печкой и летней кухней, мангал, гамак, место для костра. Рядом детская площадка.`,
        photos: [haromi, eggs, haromi, eggs],
        price_weekday: "150",
        price_holiday: "150",
        rooms_count: [{"Спальня": "2"}, {"Гостинная": "1"}],
        pers_num: 7,
        beds_count: 2,
        objects_features: [TELEVISOR, MANGAL, KUHNIYA, DUSH, INTERNET],
    },
    {
        title: "Домик рубленый и мансардного типа",
        description_short: `Рассчитан на размещение шести человек ...`,
        photos: [haromi, eggs, haromi],
        price_weekday: "120",
        price_holiday: "150",
    },
    {
        title: "Бревенчатый домик",
        description_short: `Деревянный дом в аренду (Бревенчатый домик) рассчитан на размещение трех человек ...`,
        photos: [haromi, eggs, haromi],
        price_weekday: "100",
        price_holiday: "150",
    },
    {
        title: "Деревянный домик",
        description_short: `Деревянный дом в аренду (Деревянный домикитан на размещение семи человек ...`,
        photos: [haromi, eggs, haromi],
        price_weekday: "250",
        price_holiday: "150",
    },
    {
        title: "Коттедж Харомы Яровы",
        description_short: `Деревянный дом в аренду (Харомы Яромы) рассчитан на размещение семи человек ...`,
        photos: [haromi],
        price_weekday: "180",
        price_holiday: "150",
    },
];

export const kitchenCardData: IKitchenCard[] = [
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
    {
        photo: eggs,
        title: "Суп куриный",
        description:
            "Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
    },
];

export const entertainmentCardData: IEntertainmentCard[] = [
    {
        entertaiments_photos: [entertainment, eggs, haromi],
        title: "Купаловская ночь",
        entertaiments_prices: [
            {"Купаловская ночь": "50"}
        ],
        description_short: "Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят",
        description_long: "Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят jnbbbbbbbbbb bbbbbbbbb bbbjjbmvk vkvkkkvkv vmvmvm mvmnvnnn " +
            "nfkfkrkrkrkrkr rmfmmmffmfmfmfmn",
        id: 1,
    },
    {
        entertaiments_photos: eggs,
        title: "Дайвинг",
        id: 2,
        description_short: "Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят",
    },
    {
        entertaiments_photos: eggs,
        title: "Рыбалка",
        id: 3,
        description_short: "Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят",
    },
    {
        entertaiments_photos: eggs,
        title: "Ягоды и грибы",
        id: 4,
    },
    {
        entertaiments_photos: eggs,
        title: "Катание на лошадях",
        id: 5,
    },
    {
        entertaiments_photos: eggs,
        title: "Музыка и танцы",
        id: 6,
    },
    {
        entertaiments_photos: eggs,
        title: "Суп куриный",
        id: 7,
        description_short: "Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят Первоначальные навыки погружений вы освоите в комфортной, спокойной обстановке. Все " +
            "необходимое для погружения вам предоставят",
    },
    {
        entertaiments_photos: eggs,
        title: "Суп куриный",
        id: 8,
    },
    {
        entertaiments_photos: eggs,
        title: "Суп куриный",
        id: 8,
    },
];

export const faceBlockCarouselImages = [
    {
        image: faceImg1,
    },
    {
        image: faceImg2,
    },
    {
        image: faceImg3,
    },
];

export const rulesData: Rule[] = [
    {
        id: 1,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 2,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 3,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 4,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 5,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 6,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 7,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 8,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
    {
        id: 9,
        content:
            "Курить в помещениях (в усадьбе есть предусмотренные для курения места).",
    },
];

export const photoExample = [haromi, eggs, haromi, haromi, haromi];

export interface INearest {
    id: number;
    places_photos: string[];
    title: string;
    description: string;
    location: string;
}
