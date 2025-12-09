function solution(phone_book) {
  const m = new Map();

  for (let i = 0; i < phone_book.length; i++) {
    m.set(phone_book[i], i);
  }

  for (let i = 0; i < phone_book.length; i++) {
    let str = "";

    for (let j = 0; j < phone_book[i].length; j++) {
      str += phone_book[i][j];

      const v = m.get(str);
      if (typeof v === "number" && v !== i) return false;
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
