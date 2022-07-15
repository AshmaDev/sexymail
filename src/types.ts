export interface Config {
  logo: string;
  colors: {
    headingText: string;
    primaryText: string;
    background: string;
    foreground: string;
    secondary: string;
    primary: string;
    text: string;
  };
  footer: string;
}

export interface SeedProps {
  [key: string]: any;
}

export interface ListItem {
  img: string;
  name: string;
  quantity: string;
  price: string;
  features?: string;
}

export interface SummaryItem {
  name: string;
  value: string;
}
