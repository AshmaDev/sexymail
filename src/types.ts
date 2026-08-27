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

export interface Seed {
  type: "header" | "text" | "link" | "code" | "list" | "orderedList" | "blank";
  value: string | Link | List | OrderedList;
}

export type SeedValue = string & Link & List & OrderedList;
