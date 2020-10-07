import * as fp from "../fp";

describe("functional programming implementations", () => {
  test("mapObj transforms input obj's values according to mapper callback fn", () => {
    const obj = { age: 26, state: "NY" };
    expect(
      Object.values(
        fp.mapObj((val) => {
          if (typeof val === "number") return val.toString();
          if (typeof val === "string") return val.toLowerCase();
        }, obj)
      )
    ).toEqual(["26", "ny"]);
  });

  test("filterObj filters input obj's values according to predicate callback fn", () => {
    const obj = { age: 26, state: "NY" };
    expect(
      Object.values(fp.filterObj((val) => typeof val === "number", obj))
    ).toEqual([26]);
  });

  test("reduceObj reduces input obj's values according to reducer callback fn", () => {
    const obj = { age: 26, state: 101 };
    expect(fp.reduceObj((acc, val) => acc + val, obj, 100)).toBe(227);
  });
});
