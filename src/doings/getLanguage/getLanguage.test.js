import localTranslate from "./getLanguage";

describe("localTranslate", () => {
  it("given no language is set, returns default language", () => {
    const actual = localTranslate();

    expect(actual).toBe("en");
  });
});
