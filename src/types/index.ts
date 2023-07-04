export interface ClassName {
  className?: string;
}

export interface IDishCard {
  id: number;
  title: string;
  description: string;
  photo: string;
}

export interface IEntertainmentCard {
  id: number;
  photos?: string[];
  title: string;  
}

export interface IEntertainmentPrices{
    [key: string]: number;
}

export interface IEntertainments extends IEntertainmentCard {
  entertaiments_prices: IEntertainmentPrices[];
  description_short?: string;
  description_long?: string;  
}

export interface INavbarData {
  id: number;
  value: string;
  path: string;
}

export interface IMeal {
  id: number,
  title: string,
  time: string,
  price?: string,  
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

interface IRoomTypes {
  [key: string]:number;  
}

interface IBedTypes{
  [key: string]:number;
}

export interface House {
  id: number;
  photos: string[];
  features?: Feature[];
  bed_count?: number;
  title: string;
  pers_num: number;
  description_short: string;
  description_long?: string;
  price_weekday?: number;
  price_holiday?: number;
  beds_types?: IBedTypes[];  
  rooms_types?: IRoomTypes[];
}

export interface IRule {
  id?: number;
  content: string;
}
export interface IGallery {
  id: number;
  photos:string[];
  title: string;
}

export interface ImagesGallery {
  original: string;
  thumbnail: string;
}

export enum Gender {
  "Мужской", "Женский"
}

export interface IBackPhotos {
  id: number;
  photo_m: string;
  photo_h: string;
  photo_k: string;
  photo_e: string;
}

export interface IMainPage {
  id: number;
  photos: string[];
  title: string;
  description: string;
  house_title: string;
  house_description: string;
  kitchen_title: string;
  kitchen_description: string;
  entertainment_title: string;
  entertainment_description: string;
}

export interface INearest {
  id: number;
  places_photos: string[];
  title: string;
  description: string;
  location: string;
}

export interface IInfo {
  id: number;
  social: [
    {
      [key: string]: string
    },
    {
      [key: string]: string
    }
  ],
  phones: [
    string,
    string
  ],
  address: string,
  comment: string,
  geolocation: string,
  currency: string
}
