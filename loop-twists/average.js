// function average(numberList) {
// 	let i = 0;
// 	let totalSum = 0;
// 	while(i < numberList.length) {
// 		totalSum += numberList[i];
// 		i++;
// 	}
// 	return totalSum / numberList.length;
// }
// let numbers = [1, 2, 9, 4, 5 , 6];
// let averageCalc = average(numbers);
// console.log(averageCalc);


let numbers = [1, 2, 9, 4, 5 , 6];
let totalSum = 0;
numbers.forEach(function(element) {
		totalSum += element;
});
console.log(totalSum / numbers.length);
