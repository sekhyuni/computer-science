function solution(bridge_length, weight, truck_weights) {
    let time = 1;
    const queueOfPassingTrucks = [];
    const queueOfWaitingTrucks = truck_weights.map(truck_weight => ({ weight: truck_weight, restLength: bridge_length }));

    queueOfPassingTrucks.push(queueOfWaitingTrucks.shift());
    while (queueOfPassingTrucks.length > 0) {
        const lengthOfPassingTrucks = queueOfPassingTrucks.length;
        for (let idxOfPassingTrucks = 0; idxOfPassingTrucks < lengthOfPassingTrucks; idxOfPassingTrucks++) {
            queueOfPassingTrucks[idxOfPassingTrucks].restLength--;
        }

        if (queueOfPassingTrucks[0].restLength === 0) {
            queueOfPassingTrucks.shift();
        }

        const weightOfTrucksOnBridge = queueOfPassingTrucks.map(passingTruck => passingTruck.weight).reduce((acc, cur) => acc + cur, 0);
        if (queueOfWaitingTrucks.length !== 0 && weightOfTrucksOnBridge + queueOfWaitingTrucks[0].weight <= weight) {
            queueOfPassingTrucks.push(queueOfWaitingTrucks.shift());
        }

        time++;
    }

    return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]))
console.log(solution(100, 100, [10]))
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))