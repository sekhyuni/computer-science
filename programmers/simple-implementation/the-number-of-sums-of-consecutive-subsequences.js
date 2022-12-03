function solution(elements) {
    let answer = 0;

    const circularSequence = elements.concat(elements);
    const lengthOfElements = elements.length;

    const listOfItem = [];
    for (let i = 0; i < lengthOfElements; i++) {
        for (let j = 0; j < lengthOfElements; j++) {
            let sum = circularSequence[j];
            for (let k = 1; k < i + 1; k++) {
                sum += circularSequence[j + k];
            }
            listOfItem.push(sum);
        }
    }
    answer = new Set(listOfItem).size;

    return answer;
}

function solutionOfUseReduce(elements) {
    const answer = new Set();

    const circularSequence = elements.concat(elements);
    const lengthOfElements = elements.length;

    for (let len = 1; len <= lengthOfElements; len++) {
        for (let idx = 0; idx < lengthOfElements; idx++) {
            let sum = circularSequence.slice(idx, idx + len).reduce((prev, curr) => prev + curr, 0);
            answer.add(sum);
        }
    }

    return answer.size;
}

console.log(solution([7, 9, 1, 1, 4]));
console.log(solutionOfUseReduce([7, 9, 1, 1, 4]));