import { SexyMail, Config, Seed } from "../src";

describe("SexyMail", () => {
  const config: Config = {
    logo: "http://example.com/logo.png",
    footer: "Sample Footer",
    colors: {
      background: "#ffffff",
      foreground: "#f4f4f4",
      text: "#333333",
      headingText: "#111111",
      primary: "#007bff",
      primaryText: "#ffffff",
      secondary: "#007bff",
    },
  };

  let sexyMail: SexyMail;

  beforeEach(() => {
    sexyMail = new SexyMail(config);
  });

  test("throws error if no config", () => {
    expect(() => new SexyMail(null as any)).toThrow("Config is missing");
  });

  test("generates the correct email HTML", () => {
    const seed: Seed[] = [
      { type: "header", value: "Welcome!" },
      { type: "text", value: "This is a sample email." },
      {
        type: "link",
        value: { text: "Click here", url: "http://example.com" },
      },
    ];

    const emailHTML = sexyMail.generate(seed);

    expect(emailHTML).toMatchSnapshot();
  });
});
