export interface ClassName {
  className?: string;
}

export interface IKitchenCard {
  id?: number;
  photo: string;
  title: string;
  description: string;
}

export interface IEntertainmentCard {
  id?: number;
  entertaiments_photos?: string[];
  title: string;
}

export interface IEntertainmentPrices{
    [key: string]: string;
}

export interface IEntertainments extends IEntertainmentCard {
  entertaiments_prices: IEntertainmentPrices[];
  description_short?: string;
  description_long?: string;
  price_desription?: string;
}

export interface INavbarData {
  id: number;
  value: NavLinkValueType;
  path: string;
}

interface Meal {
  [key: string]: {
    time: string;
    cost: string;
  };
}

export const INTERNET = "Интернет";
export const DUSH = "Душ";
export const HOLODILNIK = "Холодильник";
export const KUHNIYA = "Кухня";
export const TELEVISOR = "Телевизор";
export const MANGAL = "Мангал";
export const DETSKAYA_PLOSCHADKA = "Детская площадка";

type Feature =
  | typeof INTERNET
  | typeof DUSH
  | typeof HOLODILNIK
  | typeof KUHNIYA
  | typeof TELEVISOR
  | typeof MANGAL
  | typeof DETSKAYA_PLOSCHADKA;

interface Rooms {
  "Спальня"?:string;
  "Гостинная"?:string;
}

interface IBedsTypes{
  "Односпальная кровать"?:string;
  "Большая двухместная кровать"?:string;
  "Детская кровать"?:string
}

export interface House {
  id?: number;
  title: string;
  pers_num?: number;
  description_short: string;
  description_long?: string;
  rooms_count?: Rooms[];
  kitchen?: Meal[];
  price_weekday?: string;
  price_holiday?: string;
  objects_photos: string[];
  objects_features?: Feature[];
  beds_count?: number;
  created_date?: string;
  beds_types?:IBedsTypes[];
  is_reserved?:boolean;
}

export type NavLinkValueType =
  | "Главная"
  | "Домики"
  | "Домашняя Кухня"
  | "Развлечения"
  | "Что рядом"
  | "Галерея"
  | "Правила"
  | "Контакты";

export interface Rule {
  id?: number;
  content: string;
}

export interface ImagesGallery {
  original: string;
  thumbnail: string;
}

export interface ISexData {
  title: string;
}
