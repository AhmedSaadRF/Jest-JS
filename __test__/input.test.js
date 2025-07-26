const theFilter = require("../input");

describe('Validate The Input Field', () => {
  test.skip('Check If Name Is Empty', () => {
    expect(theFilter()).toBe("Unknown");
  })
  test('Check If Name Is Spaces', () => {
    expect(theFilter(" Osama ")).toBe("Osama");
  })
  test.only('Check If Name Is More Than 10 Characters', () => {
    expect(theFilter("Osama_Mohamed")).toBe("Osama_Moha");
  })
});
