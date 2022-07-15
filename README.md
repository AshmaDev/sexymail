# sexymail
A simple HTML email message generator.

## Getting Started

This package includes a simple HTML generator that allows you to create a sexy email.  

### Installation

```sh
npm i https://github.com/AshmaDev/sexymail.git
```

### Usage


```ts
import { SexyMail } from "sexymail";

const sexyMail = new SexyMail({
    logo: "YOUR_LOGO_URL",
    colors: {
        headingText: "#000000", // heading text color
        primaryText: "#ffffff", // buttons text color
        background: "#f8f8f8", // background color
        foreground: "#ffffff", // foreground color
        secondary: "#5a5a5a", // secondary theme color
        primary: "#000000", // buttons background color
        text: "#5a5a5a", // body text color
    },
    footer: "optional footer text"
});

const htmlMsg = sexyMail.ejaculate({
    header: "Your header text",
    text: "First paragraph",
    text: "Second paragraph",
    link: { text: "Call to action", url: "LINK_URL" }, // sexy link
    header: "Another header", 
    code: "123 456", // sexy code
    list: { // you can use items or summary or both:
        items: [
           {
            img: "IMG_URL";
            name: "ITEM_NAME";
            quantity: "ITEM_QUANTITY";
            price: "ITEM_PRICE";
            features: "OPTIONAL_STRING";
            } 
        ], 
        summary: [
          {
            name: "ITEM_NAME";
            value: "ITEM_VALUE";
          },
          {
            name: "ITEM_NAME";
            value: "ITEM_VALUE";
          }
        ]
    }
});
```

Now you can use your `htmlMsg` as a email message. 

You have complete freedom in building ejaculate argument object. You can use the components in any number and order.


## License

This project is licensed under the MIT License.
