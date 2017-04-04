// without sort or math.max/min and with a while loop

function max(numbers){
	let i = 0;
	let currentMax = 0;

	while (i < numbers.length){
		if (numbers[i] > currentMax){
			currentMax = numbers[i];
		}
		i++;
	}
	return currentMax;
}

function min(numbers){
	let i = 0;
	let currentMin = numbers[0];

	while (i < numbers.length){
		if (numbers[i] < currentMin){
			currentMin = numbers[i];
		}
		i++;
	}
	return currentMin;
}
let numList = [1, 2, 9, 4, 5 , 6];
const list = max(numList);
console.log(list);
const list1= min(numList);
console.log(list1);