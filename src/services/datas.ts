import { House, IEntertainmentCard, IKitchenCard } from "../types";
import haromi from "../assets/pics/houses/haromiIaromi/Изображение.png";
import eggs from "../assets/pics/kitchen/kitchenLogoExample.png";
import faceImg1 from "../assets/pics/Home/carouselImages/20210607_104318 1.png";
import faceImg2 from "../assets/pics/Home/carouselImages/IMG-1127d31fd8da398fa5b4f7f8a070e0b5-V 1.png";
import faceImg3 from "../assets/pics/Home/carouselImages/IMG-1127d31fd8da398fa5b4f7f8a070e0b5-V 2.png";

export const housesData:House[] = [
  {
    title:"Домик Харомы Яромы",
    description_short:`Деревянный дом в аренду. (Харомы Яромы) рассчитан на размещение семи человек ...`,
    photos:[haromi],
    price_weekday:"150",
  },
  {
    title:"Домик рубленый и мансардного типа",
    description_short:`Рассчитан на размещение шести человек ...`,
    photos:[haromi],
    price_weekday:"120",
  },
  {
    title:"Бревенчатый домик",
    description_short:`Деревянный дом в аренду (Бревенчатый домик) рассчитан на размещение трех человек ...`,
    photos:[haromi],
    price_weekday:"100",
  },
  {
    title:"Деревянный домик",
    description_short:`Деревянный дом в аренду (Деревянный домикитан на размещение семи человек ...`,
    photos:[haromi],
    price_weekday:"250",
  },
  {
    title:"Коттедж Харомы Яровы",
    description_short:`Деревянный дом в аренду (Харомы Яромы) рассчитан на размещение семи человек ...`,
    photos:[haromi],
    price_weekday:"180",
  },
]

export const kitchenCardData:IKitchenCard[] = [
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
  {
    image:eggs,
    title:"Суп куриный",
    description:"Куриный суп с вермишелью с удовольствием съедят и дети, и взрослые.",
  },
]

export const entertainmentCardData:IEntertainmentCard[] = [
  {
    image:eggs,
    title:"Купаловская ночь",
    id:1,
  },
  {
    image:eggs,
    title:"Дайвинг",
    id:2,
  },
  {
    image:eggs,
    title:"Рыбалка",
    id:3,
  },
  {
    image:eggs,
    title:"Ягоды и грибы",
    id:4,
  },
  {
    image:eggs,
    title:"Катание на лошадях",
    id:5,
  },
  {
    image:eggs,
    title:"Музыка и танцы",
    id:6,
  },
  {
    image:eggs,
    title:"Суп куриный",
    id:7,
  },
  {
    image:eggs,
    title:"Суп куриный",
    id:8,
  },
]

export const faceBlockCarouselImages = [
  {
    image:faceImg1
  },
  {
    image:faceImg2
  },
  {
    image:faceImg3
  },
]