const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// const totalBatteries = function batteries(arr, reducer){
//     batteryBatches
// }

// function reducer(batteryBatches){
//     let total = 0
//     return batteryBatches+=total
// }


const totalBatteries = batteryBatches.reduce((aggregate, number) => aggregate + number);
