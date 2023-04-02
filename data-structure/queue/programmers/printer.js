function solution(priorities, location) {
  let answer = 0;
  const prioritiesOfObject = priorities.map((priority, idx) => ({
    priority,
    isMyOrder: idx === location,
  }));

  while (prioritiesOfObject.length > 0) {
    const maxPriority = [...prioritiesOfObject].sort(
      (a, b) => b.priority - a.priority
    )[0].priority;
    const current = prioritiesOfObject.shift();

    if (current.priority < maxPriority) {
      prioritiesOfObject.push(current);
    } else {
      answer++;

      if (current.isMyOrder) {
        break;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
