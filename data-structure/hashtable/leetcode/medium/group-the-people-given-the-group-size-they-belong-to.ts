function groupThePeople(groupSizes: number[]): number[][] {
  const m = new Map<number, number[]>();
  const result: number[][] = [];

  // Time Complexity: O(n)
  groupSizes.forEach((groupSize, index) => {
    const v = m.get(groupSize) ?? [];

    v.push(index);
    m.set(groupSize, v);

    if (groupSize === v.length) {
      result.push(v);
      m.delete(groupSize);
    }
  });

  // Total Time Complexity: O(n)
  return result;
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));

function groupThePeopleByMySolution(groupSizes: number[]): number[][] {
  const m = new Map<number, number[]>();

  // Time Complexity: O(n)
  groupSizes.forEach((groupSize, index) => {
    const v = m.get(groupSize);

    if (v) {
      v.push(index);
      m.set(groupSize, v);
    } else {
      m.set(groupSize, [index]);
    }
  });

  const result: number[][] = [];

  // Time Complexity: O(n)
  for (const [k, v] of m) {
    if (k === v.length) {
      result.push(v);
    } else {
      Array.from({ length: v.length / k }).forEach((_, index) => {
        result.push(v.slice(index * k, (index + 1) * k));
      });
    }
  }

  // Total Time Complexity: O(n)
  return result;
}

console.log(groupThePeopleByMySolution([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeopleByMySolution([2, 1, 3, 3, 3, 2]));
