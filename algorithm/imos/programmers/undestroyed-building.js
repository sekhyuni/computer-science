function solution(board, skill) {
  // 정확성 통과, 효율성 미통과
  let answer = 0;

  const lengthOfBoardRow = board.length;
  const lengthOfBoardColumn = board[0]?.length;
  const lengthOfSkill = skill.length;

  for (let i = 0; i < lengthOfSkill; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];

    for (let col = c1; col <= c2; col++) {
      for (let row = r1; row <= r2; row++) {
        board[row][col] += type === 1 ? -degree : degree;
      }
    }
  }

  for (let col = 0; col < lengthOfBoardColumn; col++) {
    for (let row = 0; row < lengthOfBoardRow; row++) {
      if (board[row][col] > 0) {
        answer++;
      }
    }
  }

  return answer;
}

function solutionUseIMOS(board, skill) {
  // 정확성, 효율성 모두 통과
  let answer = 0;

  const lengthOfBoardRow = board.length;
  const lengthOfBoardColumn = board[0]?.length;
  const lengthOfSkill = skill.length;
  const imos = Array.from({ length: lengthOfBoardRow + 1 }, () =>
    Array(lengthOfBoardColumn + 1).fill(0)
  );

  for (let i = 0; i < lengthOfSkill; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];

    imos[r1][c1] += type === 1 ? -degree : degree;
    imos[r1][c2 + 1] += type === 1 ? degree : -degree;
    imos[r2 + 1][c1] += type === 1 ? degree : -degree;
    imos[r2 + 1][c2 + 1] += type === 1 ? -degree : degree;
  }
  for (let row = 0; row < lengthOfBoardRow; row++) {
    let sum = 0;
    for (let col = 0; col < lengthOfBoardColumn; col++) {
      sum += imos[row][col];
      imos[row][col] = sum;
    }
  }
  for (let col = 0; col < lengthOfBoardColumn; col++) {
    let sum = 0;
    for (let row = 0; row < lengthOfBoardRow; row++) {
      sum += imos[row][col];
      imos[row][col] = sum;
    }
  }

  for (let row = 0; row < lengthOfBoardRow; row++) {
    for (let col = 0; col < lengthOfBoardColumn; col++) {
      board[row][col] += imos[row][col];
      if (board[row][col] > 0) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
console.log(
  solutionUseIMOS(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);
console.log(
  solutionUseIMOS(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
