import {
  kadanesAlgo,
  flatten,
  reduce,
  findThreeLargestNumbers,
  threeNumSum,
  smallestDifference,
  moveElementToEnd,
  isMonotonic,
  spiralTraversal,
  longestPeak,
  getPermutationIter,
  getPermutationRecursive,
  powerset,
  wordSearch,
  kDiffPairs,
  mergeTwoSortedArrays,
  zigzagTraverse,
  sameBST,
  riverSizes,
} from "../arrays";

describe("array algorithms", () => {
  test("kadane's algorithm", () => {
    expect(
      kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    ).toBe(19);
    expect(kadanesAlgo([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).toBe(-1);
  });

  test("flatten nest arrays", () => {
    const arr = [[[[[[55], 33], 28]]]];
    expect(flatten(arr)).toStrictEqual([55, 33, 28]);
  });
  test("reduce an array", () => {
    function add(a: number, b: number): number {
      return a + b;
    }
    expect(reduce.bind([1, 2, 3, 4], add)()).toBe(10);
  });

  test("return three largest numbers of an array", () => {
    expect(
      findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
    ).toStrictEqual([18, 141, 541]);

    expect(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])).toStrictEqual([
      11,
      43,
      55,
    ]);

    expect(
      findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])
    ).toStrictEqual([7, 7, 8]);
  });

  test("return array of triplets that sum to a given target", () => {
    expect(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toStrictEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });

  test("return smallest difference between two input arrays", () => {
    expect(
      smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
    ).toStrictEqual([28, 26]);

    expect(
      smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])
    ).toStrictEqual([20, 17]);
  });

  test("return array with value to move moved to the end", () => {
    expect(moveElementToEnd([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 5, 4, 3]);
    expect(
      moveElementToEnd(
        [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
        5
      )
    ).toStrictEqual([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]);
    expect(
      moveElementToEnd(
        [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
        5
      )
    ).toStrictEqual([12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5]);
  });

  test("return true if input array is monotonic", () => {
    expect(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])).toBe(
      true
    );
    expect(isMonotonic([])).toBe(true);
    expect(isMonotonic([1])).toBe(true);
    expect(isMonotonic([-1])).toBe(true);
    expect(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001])).toBe(
      false
    );
    expect(
      isMonotonic([
        -1,
        -1,
        -2,
        -3,
        -4,
        -5,
        -5,
        -5,
        -6,
        -7,
        -8,
        -7,
        -9,
        -10,
        -11,
      ])
    ).toBe(false);
  });

  test("spiral traversal", () => {
    expect(
      spiralTraversal([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    expect(
      spiralTraversal([
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7],
      ])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test("find longest peak in array", () => {
    expect(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])).toBe(6);
    expect(longestPeak([5, 4, 3, 2, 1, 2, 1])).toBe(3);
  });

  test("return all permutations of input number array", () => {
    expect(getPermutationIter([1, 2, 3])).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1],
    ]);
    expect(getPermutationRecursive([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test("return powerset of input array", () => {
    expect(powerset([1, 2, 3])).toStrictEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
    expect(powerset([1, 2, 3, 4])).toStrictEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
      [4],
      [1, 4],
      [2, 4],
      [1, 2, 4],
      [3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4],
    ]);
  });

  test("wordSearch", () => {
    expect(
      wordSearch(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCCED"
      )
    ).toBeTruthy();
    expect(
      wordSearch(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "SEE"
      )
    ).toBeTruthy();
    expect(
      wordSearch(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCB"
      )
    ).toBeFalsy();
  });

  test("return n-pairs that have kth difference", () => {
    expect(kDiffPairs([3, 1, 4, 1, 5], 2)).toBe(2);
    expect(kDiffPairs([1, 2, 3, 4, 5], 1)).toBe(4);
    expect(kDiffPairs([1, 3, 1, 5, 4], 0)).toBe(1);
  });

  test("merge two sorted arrays in place", () => {
    const result: number[] = [1, 2, 3, 0, 0, 0];
    mergeTwoSortedArrays(result, 3, [2, 5, 6], 3);
    expect(result).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });

  test("zig zag traverse nxm matrix", () => {
    expect(
      zigzagTraverse([
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  test("return true if input arrays are the same binary search tree", () => {
    expect(
      sameBST(
        [10, 15, 8, 12, 94, 81, 5, 2, 11],
        [10, 8, 5, 15, 2, 12, 11, 94, 81]
      )
    ).toBe(true);
    expect(
      sameBST(
        [10, 15, 8, 12, 94, 81, 5, 2, 11],
        [10, 8, 5, 14, 2, 12, 11, 94, 81]
      )
    ).toBe(false);
  });

  test("riverSizes", () => {
    expect(
      riverSizes([
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0],
      ])
    ).toStrictEqual([2, 1, 5, 2, 2]);

    expect(
      riverSizes([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toStrictEqual([]);
  });
});
