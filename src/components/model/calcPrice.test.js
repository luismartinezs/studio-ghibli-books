import calcPrice from "./calcPrice";

describe("calcPrice", () => {
  let price;
  beforeAll(() => {
    price = {
      unitPrice: "0",
      currency: "€"
    };
  });

  beforeEach(() => {
    price = {
      unitPrice: "0",
      currency: "€"
    };
  });

  test("19.90 for unitPrice", () => {
    expect(calcPrice("19.90").unitPrice).toBe("19.90");
  });

  test("19.90 for currency", () => {
    expect(calcPrice("19.90").currency).toBe("€");
  });

  test("19.90$ for currency", () => {
    expect(calcPrice("19.90$").currency).toBe("$");
  });

  test("$19.90 for currency", () => {
    expect(calcPrice("$19.90").currency).toBe("$");
  });

  test("$19.90 for unitPrice", () => {
    expect(calcPrice("$19.90").unitPrice).toBe("19.90");
  });

  for (let i of ["0", "44", "10.0", "999.999"]) {
    test(`${i} for unitPrice`, () => {
      expect(calcPrice(i).unitPrice).toBe((+i).toFixed(2));
    });
  }

  for (let i of ["$0", "€44", "10.0£", "¥999.999"]) {
    test(`${i} for currency`, () => {
      expect(calcPrice(i).currency).toBe(i.match(/[^.0-9]/)?i.match(/[^.0-9]/)[0]:'€');
    });
  }

});
