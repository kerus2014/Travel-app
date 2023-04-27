export interface ClassName {
  className?:string;
}

export interface INavbarData {
  id: number;
  value: NavLinkValueType;
  path:string;
}

export type NavLinkValueType =
  | "Главная"
  | "Домики"
  | "Домашняя Кухня"
  | "Развлечения"
  | "Галерея"
  | "Правила"
  | "Контакты";