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

  test("applies custom border color and zero radius", () => {
    const custom = new SexyMail({
      ...config,
      radius: { card: 0, control: 0, image: 0 },
      colors: {
        ...config.colors,
        border: "#112233",
      },
    });

    const html = custom.generate([{ type: "text", value: "Hello" }]);

    expect(html).toContain("border:1px solid #112233");
    expect(html).toContain("border-radius:0px");
    expect(html).toContain("border-top:1px solid #112233");
  });

  test("applies custom radius to buttons", () => {
    const custom = new SexyMail({
      ...config,
      radius: { card: 32, control: 999, image: 16 },
    });

    const html = custom.generate([
      {
        type: "link",
        value: { text: "Go", url: "http://example.com" },
      },
    ]);

    expect(html).toContain("border-radius:32px");
    expect(html).toContain("border-radius: 999px");
  });

  test("renders orderedList as numbered steps", () => {
    const html = sexyMail.generate([
      {
        type: "orderedList",
        value: {
          items: [
            "Show your card when you visit the store",
            "Collect stamps for your purchases",
            "Unlock rewards and redeem them easily",
          ],
        },
      },
    ]);

    expect(html).toContain("1.");
    expect(html).toContain("2.");
    expect(html).toContain("3.");
    expect(html).toContain("Show your card when you visit the store");
    expect(html).toContain("Collect stamps for your purchases");
    expect(html).toContain("Unlock rewards and redeem them easily");
  });

  test("renders subfooter below the footer", () => {
    const custom = new SexyMail({
      ...config,
      footer: "Sent from Stamply",
      subfooter: '<a href="https://example.com/unsub">Unsubscribe</a>',
    });

    const html = custom.generate([{ type: "text", value: "Hello" }]);

    expect(html).toContain("Sent from Stamply");
    expect(html).toContain("Unsubscribe");
    expect(html.indexOf("Sent from Stamply")).toBeLessThan(html.indexOf("Unsubscribe"));
    expect(html).toContain("font-size: 10px");
    expect(html).toContain("opacity: 0.5");
  });
});
