export interface Radius {
  card?: number;
  control?: number;
  image?: number;
}

export interface Config {
  logo?: string;
  colors: {
    headingText: string;
    primaryText: string;
    background: string;
    foreground: string;
    secondary: string;
    primary: string;
    text: string;
    border?: string;
  };
  radius?: Radius;
  footer?: string;
  subfooter?: string;
}

export interface ListItem {
  img: string;
  name: string;
  quantity?: string;
  price?: string;
  features?: string;
}

export interface SummaryItem {
  name: string;
  value: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface List {
  items?: ListItem[];
  summary?: SummaryItem[];
}

export interface OrderedList {
  items: string[];
}

export interface ImageLink {
  url: string;
  img: string;
  alt?: string;
  width?: number;
}

export interface Seed {
  type: "header" | "text" | "link" | "code" | "list" | "orderedList" | "blank" | "imageLink";
  value: string | Link | List | OrderedList | ImageLink;
}

export type SeedValue = string & Link & List & OrderedList & ImageLink;
