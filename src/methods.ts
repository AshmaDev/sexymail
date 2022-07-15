import { SeedProps, ListItem, SummaryItem } from "./types";

export function sexyContainer(this, content: string, info: string = "") {
  const date = new Date();
  return (
    `<div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: ` +
    this.colors.background +
    `; height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; margin-bottom: 40px;"> <center> <table bgcolor="` +
    this.colors.foreground +
    `" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:` +
    this.colors.foreground +
    `;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;" heigth="auto"> <tbody> <tr> <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;"> <img src="` +
    this.logo +
    `" /> </td> <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;"> <span style="color: ` +
    this.colors.text +
    `; font-weight: normal; line-height: 2; font-size: 14px;">` +
    date.toLocaleDateString("en-US") +
    `</span> </td> </tr> <tr> <td colSpan="2" style="padding-top:10px;border-top:1px solid #e4e2e2"> ` +
    content +
    ` </td> </tr> </tbody> </table> <table style="margin-top:30px; padding-bottom:20px;; margin-bottom: 40px;"> <tbody> <tr> <td align="center" valign="center"> <p style="font-size: 12px; text-decoration: none;line-height: 1; color:` +
    this.colors.text +
    `; margin-top:0px; margin-bottom:5px; "> ` +
    info +
    ` </p> </td> </tr> </tbody> </table> </center> </div>`
  );
}

export function sexyHeader(this, title: string) {
  return (
    `<h3 style="color:` +
    this.colors.headingText +
    `; font-size:18px; line-height: 1.6; font-weight:500;">` +
    title +
    `</h3>`
  );
}

export function sexyText(this, text: string) {
  return (
    `<p style="color:` +
    this.colors.ftx +
    `; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">` +
    text +
    `</p>`
  );
}

export function sexyLink(this, text: string, url: string) {
  return (
    `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse;"> <tbody> <tr> <td style="padding:15px 0px;" valign="top" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate !important;"> <tbody> <tr> <td align="center" valign="middle" style="padding:14px;"> <a href="` +
    url +
    `" title="` +
    text +
    `" target="_blank" style="font-size: 14px; line-height: 1.5; font-weight: 700; letter-spacing: 1px; padding: 15px 40px; text-align:center; text-decoration:none; color:` +
    this.colors.primaryText +
    `; border-radius: 50px; background-color:` +
    this.colors.primary +
    `;">` +
    text +
    `</a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table>`
  );
}

export function sexyCode(this, text: string) {
  return (
    `<p style="background-color:` +
    this.colors.background +
    `; color: ` +
    this.colors.text +
    `; padding: 8px 15px; border-radius: 50px; display: inline-block; margin-bottom:20px; font-size: 14px; line-height: 1.4; font-family: Courier New, Courier, monospace; margin-top:0">` +
    text +
    `</p>`
  );
}

export function sexyListItem(this, item: ListItem) {
  return (
    `<tr> <td style="padding-top:0px; padding-bottom:20px; width:140px "> <img src="` +
    item?.img +
    `" style="width: 114px; height: 85px; object-fit: cover; border-radius: 3px; " /> </td> <td style="padding-top:0px; padding-bottom:20px;"> <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#" style="text-decoration: none; color:` +
    this.colors.headingText +
    `; font-weight:500;">` +
    item?.name +
    `</a></h4> <p style="font-size: 12px; text-decoration: none; line-height: 1; color:` +
    this.colors.text +
    `; margin-top:0px; margin-bottom:0;">` +
    item?.quantity +
    `</p> <p style="font-size: 12px; line-height: 1; color:` +
    this.colors.text +
    `; margin-top:5px;">` +
    item?.features +
    `</p> </td> <td style="padding-top:0px; padding-bottom:20px; text-align: right;"> <p style="font-size: 14px; line-height: 1; color:` +
    this.colors.primary +
    `; margin-top:5px; vertical-align:top; white-space:nowrap;">` +
    item?.price +
    `</p> </td> </tr>`
  );
}

export function sexySummary(this, item: SummaryItem) {
  return (
    `<tr> <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:` +
    this.colors.text +
    `;"> <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;"><strong>` +
    item?.name +
    `</strong></p> </td> <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;"> <p style="font-size: 14px; line-height: 1; margin-top:5px; vertical-align:top; color:` +
    this.colors.text +
    `; white-space:nowrap; margin-bottom: 0;"><strong>` +
    item?.value +
    `</strong></p></td></tr>`
  );
}

export function sexyListContainer(items: string) {
  return `<table>` + items + `</table>`;
}

export function makeSexyList(obj: { [key: string]: any }) {
  let list;

  if (obj.items?.length > 0) {
    obj.items.forEach((item) => {
      list += sexyListItem(item);
    });
  }

  if (obj.summary?.length > 0) {
    obj.summary.forEach((item) => {
      list += sexySummary(item);
    });
  }

  return sexyListContainer(list);
}

const pp = {
  header: (text) => sexyHeader(text),
  text: (text) => sexyText(text),
  link: ({ text, url }) => sexyLink(text, url),
  code: (text) => sexyCode(text),
  list: (obj) => makeSexyList(obj),
};

export function ejaculate(seed: SeedProps) {
  let cum;

  Object.entries(seed).forEach((entry) => {
    const [key, value] = entry;
    cum += pp[key](value);
  });

  return sexyContainer(cum);
}
