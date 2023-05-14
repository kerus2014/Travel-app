export interface ClassName {
  className?: string;
}

export interface IKitchenCard {
  id?:number;
  photo: string;
  title: string;
  description: string;
}

export interface IEntertainmentCard {
  id?: number;
  image: string;
  title: string;
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

type Feature = "Internet" | "Shower" | "Kitchen" | "Fridge" | "TV"

interface Rooms {
  [key: string]: number;
}


export interface House {
  id?:number;
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
  beds_count?: number,
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
    id?:number;
    content:string;
  }