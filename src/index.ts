import {
  Config,
  Seed,
  SeedValue,
  ListItem,
  SummaryItem,
  Link,
  List,
} from "./types";

class SexyMail {
  private config: Config;

  constructor(config: Config) {
    if (!config) throw new Error("Config is missing");
    this.config = config;
  }

  private createContainer(content: string, info?: string): string {
    return `<div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color:${
      this.config.colors.background
    }; height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; padding-top: 40px; margin-bottom: 40px;"> 
      <center>
        <table bgcolor="${
          this.config.colors.foreground
        }" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; width: 100%; background-color:${
      this.config.colors.foreground
    };border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:15px;border-spacing:0;color:#242128; margin:0;padding:40px;" heigth="auto">
          <tbody>
          ${
            this.config.logo
              ? `
            <tr>
              <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                <center><img src="${this.config.logo}" height="30" style="max-height:30px" /></center>
              </td>
            </tr>`
              : ""
          }
            <tr>
              <td style="padding-top:10px;border-top:1px solid #e4e2e2">${content}</td>
            </tr>
          </tbody>
        </table>
        ${
          info
            ? `
          <table style="margin-top:30px; padding-bottom:20px;; margin-bottom: 40px;">
            <tbody>
              <tr>
                <td align="center" valign="center">
                  <p style="font-size: 12px; text-decoration: none;line-height: 1; color:${this.config.colors.text}; margin-top:0px; margin-bottom:5px; ">${info}</p>
                </td>
              </tr>
            </tbody>
          </table>`
            : ""
        }
      </center>
    </div>`;
  }

  private createHeader(title: string): string {
    return `<h3 style="color:${this.config.colors.headingText}; font-size:18px; line-height: 1.6; font-weight:500;">${title}</h3>`;
  }

  private createText(text: string): string {
    return `<p style="color:${this.config.colors.text}; font-size: 14px; padding-bottom: 10px; line-height: 1.4;">${text}</p>`;
  }

  private createLink(text: string, url: string): string {
    return `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse;">
        <tbody>
          <tr>
            <td style="padding:15px 0px;" valign="top" align="center"> 
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate !important;"> 
                <tbody> 
                  <tr> 
                    <td align="center" valign="middle" style="padding:14px;">
                      <a href="${url}" title="${text}" target="_blank" style="font-size: 14px; line-height: 1.5; font-weight: 700; letter-spacing: 1px; padding: 15px 40px; text-align:center; text-decoration:none; color:${this.config.colors.primaryText}; border-radius: 10px; background-color:${this.config.colors.primary};">${text}</a> 
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>`;
  }

  private createCodeBlock(text: string): string {
    return `<p style="background-color:${this.config.colors.background}; color: ${this.config.colors.headingText}; padding: 8px 15px; border-radius: 10px; display: inline-block; margin-bottom:20px; font-size: 24px; line-height: 1.4; font-family: Courier New, Courier, monospace; font-weight: 600; margin-top:0">${text}</p>`;
  }

  private createListItem(item: ListItem): string {
    return `<tr>
        <td style="padding-top:0px; padding-bottom:20px; width:140px "> 
          <img src="${item?.img}" style="width: 114px; height: 85px; object-fit: cover; border-radius: 5px; " /> 
        </td>
        <td style="padding-top:0px; padding-bottom:20px;"> 
          <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;">
            <a href="#" style="text-decoration: none; color: ${this.config.colors.headingText}; font-weight:500;">${item.name}</a>
          </h4> 
          <p style="font-size: 12px; text-decoration: none; line-height: 1; color:${this.config.colors.text}; margin-top:0px; margin-bottom:0;">${item?.quantity}</p>
          <p style="font-size: 12px; line-height: 1; color:${this.config.colors.text}; margin-top:5px;">${item?.features}</p> 
        </td>
        <td style="padding-top:0px; padding-bottom:20px; text-align: right;"> 
          <p style="font-size: 14px; line-height: 1; color: ${this.config.colors.primary}; margin-top:5px; vertical-align:top; white-space:nowrap;">${item?.price}</p> 
        </td> 
      </tr>`;
  }

  private createSummaryItem(item: SummaryItem): string {
    return `<tr>
        <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color: ${this.config.colors.text};"> 
          <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;">
            <strong>${item?.name}</strong>
          </p>
        </td>
        <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">
          <p style="font-size: 14px; line-height: 1; margin-top:5px; vertical-align:top;color:${this.config.colors.text}; white-space:nowrap; margin-bottom: 0;">
            <strong>${item?.value}</strong>
          </p>
        </td>
      </tr>`;
  }

  private createListContainer(items: string): string {
    return `<table style="width: 100%;">${items}</table>`;
  }

  private generateList(obj: {
    items?: ListItem[];
    summary?: SummaryItem[];
  }): string {
    let list = "";

    if (obj.items && obj.items.length > 0) {
      obj.items.forEach((item) => {
        list += this.createListItem(item);
      });
    }

    if (obj.summary && obj.summary.length > 0) {
      obj.summary.forEach((item) => {
        list += this.createSummaryItem(item);
      });
    }

    return this.createListContainer(list);
  }

  public generate(seed: Seed[]): string {
    const elements = {
      header: (text: string) => this.createHeader(text),
      text: (text: string) => this.createText(text),
      link: ({ text, url }: Link) => this.createLink(text, url),
      code: (text: string) => this.createCodeBlock(text),
      list: (obj: List) => this.generateList(obj),
      blank: (content: string) => content,
    };

    const content = seed.map((element: Seed) =>
      elements[element.type](element.value as SeedValue)
    );

    return this.createContainer(content.join(""), this.config.footer);
  }
}

export { SexyMail, Config, Seed };
