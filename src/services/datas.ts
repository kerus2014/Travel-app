import { House, IEntertainmentCard, IKitchenCard, Rule } from "../types";
import haromi from "../assets/pics/houses/haromiIaromi/Изображение.png";
import eggs from "../assets/pics/kitchen/kitchenLogoExample.png";
import faceImg1 from "../assets/pics/Home/carouselImages/20210607_104318 1.png";
import faceImg2 from "../assets/pics/Home/carouselImages/IMG-1127d31fd8da398fa5b4f7f8a070e0b5-V 1.png";
import faceImg3 from "../assets/pics/Home/carouselImages/IMG-1127d31fd8da398fa5b4f7f8a070e0b5-V 2.png";

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
    objects_photos: [haromi, eggs, haromi],
    price_weekday: "150",
    price_holiday: "150",
    objects_features: [haromi, haromi, haromi, haromi, haromi],
  },
  {
    title: "Домик рубленый и мансардного типа",
    description_short: `Рассчитан на размещение шести человек ...`,
    objects_photos: [haromi, eggs, haromi],
    price_weekday: "120",
    price_holiday: "150",
  },
  {
    title: "Бревенчатый домик",
    description_short: `Деревянный дом в аренду (Бревенчатый домик) рассчитан на размещение трех человек ...`,
    objects_photos: [haromi, eggs, haromi],
    price_weekday: "100",
    price_holiday: "150",
  },
  {
    title: "Деревянный домик",
    description_short: `Деревянный дом в аренду (Деревянный домикитан на размещение семи человек ...`,
    objects_photos: [haromi, eggs, haromi],
    price_weekday: "250",
    price_holiday: "150",
  },
  {
    title: "Коттедж Харомы Яровы",
    description_short: `Деревянный дом в аренду (Харомы Яромы) рассчитан на размещение семи человек ...`,
    objects_photos: [haromi],
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
    image: eggs,
    title: "Купаловская ночь",
    id: 1,
  },
  {
    image: eggs,
    title: "Дайвинг",
    id: 2,
  },
  {
    image: eggs,
    title: "Рыбалка",
    id: 3,
  },
  {
    image: eggs,
    title: "Ягоды и грибы",
    id: 4,
  },
  {
    image: eggs,
    title: "Катание на лошадях",
    id: 5,
  },
  {
    image: eggs,
    title: "Музыка и танцы",
    id: 6,
  },
  {
    image: eggs,
    title: "Суп куриный",
    id: 7,
  },
  {
    image: eggs,
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

export const rulesData:Rule[] = [
  {
    id:1,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:2,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:3,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:4,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:5,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:6,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:7,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:8,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
  {
    id:9,
    content:"Курить в помещениях (в усадьбе есть предусмотренные для курения места)."
  },
]
