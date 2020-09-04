import {
  getNthFibIter,
  getNthFibRecurse,
  factorialRecurse,
  factorialIter,
} from "../math";

describe("math algorithms", () => {
  test("fibonacci function recursive solution", () => {
    expect(getNthFibRecurse(1)).toBe(0);
    expect(getNthFibRecurse(2)).toBe(1);
    expect(getNthFibRecurse(3)).toBe(1);
    expect(getNthFibRecurse(4)).toBe(2);
    expect(getNthFibRecurse(5)).toBe(3);
    expect(getNthFibRecurse(6)).toBe(5);
  });

  test("fibonacci function iterative solution", () => {
    expect(getNthFibIter(1)).toBe(0);
    expect(getNthFibIter(2)).toBe(1);
    expect(getNthFibIter(3)).toBe(1);
    expect(getNthFibIter(4)).toBe(2);
    expect(getNthFibIter(5)).toBe(3);
    expect(getNthFibIter(6)).toBe(5);
  });

  test("factorial function recursive solution", () => {
    expect(factorialRecurse(1)).toBe(1);
    expect(factorialRecurse(2)).toBe(2);
    expect(factorialRecurse(3)).toBe(6);
    expect(factorialRecurse(4)).toBe(24);
    expect(factorialRecurse(5)).toBe(120);
    expect(factorialRecurse(6)).toBe(720);
  });

  test("factorial function iterative solution", () => {
    expect(factorialIter(1)).toBe(1);
    expect(factorialIter(2)).toBe(2);
    expect(factorialIter(3)).toBe(6);
    expect(factorialIter(4)).toBe(24);
    expect(factorialIter(5)).toBe(120);
    expect(factorialIter(6)).toBe(720);
  });
});
