# SexyMail

<div align="center">
  <img src="img/sexymail.png" alt="Sexy Mail" width="250" height="250">
  <p>A simple Node.js tool for generating sexy emails</p>
</div>  

## Getting Started

This package includes a simple HTML generator that allows you to create a sexy email.  

### Installation

```sh
npm i sexymail
```

### Configuration  

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
``` 

### Options

What options are available for formatting messages?  

Type  | Value  | Description
-------------  | -------------  | ------------- 
header  | string  | Returns formatted header
text  |  string  | Returns formatted paragraph
link  | { text: string, url: string } | Returns formatted anchor
code  | string  | Returns formatted code (number/string)
list  | { items: ListItem[], summary: SummaryItem[] }  | Returns formatted list of items / summary
blank  | string  | Returns unstyled text
  
### Example verification message:   
```ts
const htmlMsg = sexyMail.generate([
  {
    type: "header",
    value: "Verification link",
  },
  {
    type: "text",
    value: "Click the link below to verify your account!",
  },
  {
    type: "link",
    value: { text: "Click here", url: "LINK_URL" },
  },
]);
```  
  
### Example confirmation message with list:   
```ts
const htmlMsg2 = sexyMail.generate([
  {
    type: "header",
    value: "Confirmation of purchase",
  },
  {
    type: "text",
    value: "Below you will find a list of your purchases:",
  },
  {
    type: "list",
    value: {
      items: [
        {
          img: "ITEM_IMAGE_1",
          name: "ITEM_NAME_1",
          quantity: "ITEM_QUANTITY_1",
          price: "ITEM_PRICE_1",
        },
        {
          img: "ITEM_IMAGE_2",
          name: "ITEM_NAME_2",
          quantity: "ITEM_QUANTITY_2",
          price: "ITEM_PRICE_2",
        },
      ],
      summary: [
        {
          name: "SUMMARY_TITLE_1",
          value: "SUMMARY_TEXT_1",
        },
        {
          name: "SUMMARY_TITLE_2",
          value: "SUMMARY_TEXT_2",
        },
      ],
    },
  },
]);
```

You can now use your `htmlMsg` as a email message. 

You have complete freedom in building ejaculate argument object. You can use the components in any number and order.


## License

This project is licensed under the MIT License.
