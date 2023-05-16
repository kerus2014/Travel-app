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
  image: string;
  title: string;
}

export interface IEntertainments extends IEntertainmentCard {
  entertaiments_photos: string[];
  description_short: string;
  description_long: string;
  price_desription: string;
  price: string;
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
  bdr?: number;
  gst?: number;
}

export interface House {
  id?: number;
  title: string;
  pers_num?: number;
  description_short: string;
  description_long?: string;
  rooms_count?: Rooms;
  kitchen?: Meal[];
  price_weekday?: string;
  price_holiday?: string;
  objects_photos: string[];
  objects_features?: Feature[];
  beds_count?: number;
  created_date?: string;
}

export type NavLinkValueType =
  | "Главная"
  | "Домики"
  | "Домашняя Кухня"
  | "Развлечения"
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
