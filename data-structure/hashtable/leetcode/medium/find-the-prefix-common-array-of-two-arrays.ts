function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const aMap = new Map<number, number>();
  const bMap = new Map<number, number>();
  const result = [];

  for (let i = 0; i < A.length; i++) {
    aMap.set(A[i], i);
    bMap.set(B[i], i);
  }

  let count = 0;
  for (let i = 0; i < A.length; i++) {
    const aV = aMap.get(B[i]);
    const bV = bMap.get(A[i]);

    if (A[i] === B[i]) {
      count++;
    } else {
      if (typeof aV === "number" && aV <= i) count++;
      if (typeof bV === "number" && bV <= i) count++;
    }
    result.push(count);
  }

  return result;
}

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
