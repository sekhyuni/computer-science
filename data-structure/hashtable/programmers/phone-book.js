function solution(phone_book) {
  const m = new Map();

  // Time Complexity: O(n * m), n === 1,000,000, m === 20
  for (let i = 0; i < phone_book.length; i++) {
    m.set(phone_book[i], i); // Time Complexity: O(m), m === 20
  }

  // Time Complexity: O(n * m^2), n === 1,000,000, m === 20
  for (let i = 0; i < phone_book.length; i++) {
    let str = "";

    for (let j = 0; j < phone_book[i].length; j++) {
      str += phone_book[i][j]; // Time Complexity: O(m), m === 20

      const v = m.get(str); // Time Complexity: O(m), m === 20
      if (typeof v === "number" && v !== i) return false;
    }
  }

  // Total Time Complexity: O(n * m^2), n === 1,000,000, m === 20
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
