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

  private static containerStyles = "background-color:{background}; height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; padding-top: 40px; margin-bottom: 40px;";
  private static tableStyles = "max-width:600px; width: 100%; background-color:{foreground};border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:15px;border-spacing:0;color:#242128; margin:0;padding:40px;";
  private static footerStyles = "font-size: 12px; text-decoration: none;line-height: 1; color:{text}; margin-top:0px; margin-bottom:5px;";
  private static headingStyles = "color:{headingText}; font-size:18px; line-height: 1.6; font-weight:500;";
  private static textStyles = "color:{text}; font-size: 14px; padding-bottom: 10px; line-height: 1.4;";
  private static linkTableStyles = "min-width:100%;border-collapse:collapse;";
  private static linkStyles = "font-size: 14px; line-height: 1.5; font-weight: 700; letter-spacing: 1px; padding: 15px 40px; text-align:center; text-decoration:none; color:{primaryText}; border-radius: 10px; background-color:{primary};";
  private static codeBlockStyles = "background-color:{background}; color: {headingText}; padding: 8px 15px; border-radius: 10px; display: inline-block; margin-bottom:20px; font-size: 24px; line-height: 1.4; font-family: Courier New, Courier, monospace; font-weight: 600; margin-top:0";
  private static listItemStyles = "font-size: 12px; line-height: 1; color:{text};";
  private static priceStyles = "font-size: 14px; line-height: 1; color: {primary}; margin-top:5px; vertical-align:top; white-space:nowrap;";
  private static summaryItemStyles = "font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0; color: {text};";
  private static summaryValueStyles = "font-size: 14px; line-height: 1; margin-top:5px; vertical-align:top;color:{text}; white-space:nowrap; margin-bottom: 0;";


  constructor(config: Config) {
    if (!config) throw new Error("Config is missing");
    this.config = config;
  }

  private createLogo = () => {
    return this.config.logo ? `<center><img src="${this.config.logo}" height="30" style="max-height:30px" /></center>` : "";
  }

  private createContainer(content: string, info?: string): string {
    const containerStyles = SexyMail.containerStyles.replace('{background}', this.config.colors.background);
    const tableStyles = SexyMail.tableStyles.replace('{foreground}', this.config.colors.foreground);
    const footerStyles = SexyMail.footerStyles.replace('{text}', this.config.colors.text);

    const logo = this.createLogo();

    return `
      <div style="${containerStyles}">
        <center>
          <table border="0" cellpadding="0" cellspacing="0" style="${tableStyles}">
            <tbody>
              ${this.config.logo ? `<tr><td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">${logo}</td></tr>` : ""}
              <tr><td style="padding-top:10px;border-top:1px solid #e4e2e2">${content}</td></tr>
            </tbody>
          </table>
          ${info ? `<table style="margin-top:30px; padding-bottom:20px; margin-bottom: 40px;"><tbody><tr><td align="center" valign="center"><p style="${footerStyles}">${info}</p></td></tr></tbody></table>` : ""}
        </center>
      </div>`;
  }

  private createHeader(title: string): string {
    const headingStyles = SexyMail.headingStyles.replace('{headingText}', this.config.colors.headingText);
    
    return `<h3 style="${headingStyles}">${title}</h3>`;
  }

  private createText(text: string): string {
    const textStyles = SexyMail.textStyles.replace('{text}', this.config.colors.text);
    
    return `<p style="${textStyles}">${text}</p>`;
  }

  private createLink({ text, url }: Link): string {
    const linkTableStyles = SexyMail.linkTableStyles;
    const linkStyles = SexyMail.linkStyles
      .replace('{primaryText}', this.config.colors.primaryText)
      .replace('{primary}', this.config.colors.primary);

    return `
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="${linkTableStyles}">
        <tbody>
          <tr>
            <td style="padding:15px 0px;" valign="top" align="center">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate !important;">
                <tbody>
                  <tr>
                    <td align="center" valign="middle" style="padding:14px;">
                      <a href="${url}" title="${text}" target="_blank" style="${linkStyles}">
                        ${text}
                      </a>
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
    const codeBlockStyles = SexyMail.codeBlockStyles
      .replace('{background}', this.config.colors.background)
      .replace('{headingText}', this.config.colors.headingText);
    
      return `<p style="${codeBlockStyles}">${text}</p>`;
  }

   private createListItem(item: ListItem): string {
    const listItemStyles = SexyMail.listItemStyles.replace('{text}', this.config.colors.text);
    const priceStyles = SexyMail.priceStyles.replace('{primary}', this.config.colors.primary);
    
    return `
      <tr>
        <td style="padding-top:0px; padding-bottom:20px; width:140px">
          <img src="${item?.img}" style="width: 114px; height: 85px; object-fit: cover; border-radius: 5px;" />
        </td>
        <td style="padding-top:0px; padding-bottom:20px;">
          <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;">
            <a href="#" style="text-decoration: none; color: ${this.config.colors.headingText}; font-weight:500;">${item.name}</a>
          </h4>
          <p style="${listItemStyles}">${item?.quantity}</p>
          <p style="${listItemStyles} margin-top:5px;">${item?.features}</p>
        </td>
        <td style="padding-top:0px; padding-bottom:20px; text-align: right;">
          <p style="${priceStyles}">${item?.price}</p>
        </td>
      </tr>`;
  }

  private createSummaryItem(item: SummaryItem): string {
    const summaryItemStyles = SexyMail.summaryItemStyles.replace('{text}', this.config.colors.text);
    const summaryValueStyles = SexyMail.summaryValueStyles.replace('{text}', this.config.colors.text);
    
    return `
      <tr>
        <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right;">
          <p style="${summaryItemStyles}"><strong>${item?.name}</strong></p>
        </td>
        <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">
          <p style="${summaryValueStyles}"><strong>${item?.value}</strong></p>
        </td>
      </tr>`;
  }

  private createListContainer(items: string): string {
    return `<table style="width: 100%;">${items}</table>`;
  }

 private generateList(obj: { items?: ListItem[]; summary?: SummaryItem[] }): string {
    let listContent = "";

    obj.items?.forEach((item) => {
      listContent += this.createListItem(item);
    });

    obj.summary?.forEach((item) => {
      listContent += this.createSummaryItem(item);
    });

    return this.createListContainer(listContent);
  }

  public generate(seed: Seed[]): string {
    const elements = {
      header: (text: string) => this.createHeader(text),
      text: (text: string) => this.createText(text),
      link: (obj: Link) => this.createLink(obj),
      code: (text: string) => this.createCodeBlock(text),
      list: (obj: List) => this.generateList(obj),
      blank: (text: string) => text,
    };

    const content = seed.map((element: Seed) =>
      elements[element.type](element.value as SeedValue)
    );

    return this.createContainer(content.join(""), this.config.footer);
  }
}

export { SexyMail, Config, Seed };
