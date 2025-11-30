function recoverOrder(order: number[], friends: number[]): number[] {
  // Time Complexity: O(m) + O(m) + O(m) => O(m)
  const m = new Map(Object.values(friends).map((value) => [value, true]));

  // Time Complexity: O(n)
  const result = order.filter((item) => m.has(item));

  // Total Time Complexity: O(n + m)
  return result;
}

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4]));
console.log(recoverOrder([1, 4, 5, 3, 2], [2, 5]));

function recoverOrderBySet(order: number[], friends: number[]): number[] {
  // Time Complexity: O(m)
  const s = new Set(friends);

  const result = [];

  // Time Complexity: O(n)
  for (let i = 0; i < order.length; i++) {
    if (s.has(order[i])) result.push(order[i]);
    if (result.length === friends.length) break;
  }

  // Total Time Complexity: O(n + m)
  return result;
}

console.log(recoverOrderBySet([3, 1, 2, 5, 4], [1, 3, 4]));
console.log(recoverOrderBySet([1, 4, 5, 3, 2], [2, 5]));
