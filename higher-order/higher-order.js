// function repeat(fn, n) {
// let i = 0;
//   while (i < n) {
//     fn();
//     i++;
//   }
// }
// function hello() {
//   console.log('hello world');
// }
// function goodbye() {
//   console.log('goodbye world');
// }
//
// repeat(hello, 5);
// repeat(goodbye, 5);
//
// function filter(arr, fn){
//   let newArray = [];
//   for (let i=0; i < arr.length; i++){
//   	let currentElement = arr[i];
//   	if (fn(currentElement)  ){
//   		newArray.push(currentElement);
//   	}
//   }
//   return newArray;
// }
//
// function anaFun(arg){
// 	if(arg.length === 3) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
//
//
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// const newFilteredArray = filter(myNames, anaFun);
// console.log(newFilteredArray);




function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road at');
const iceWarning = hazardWarningCreator('Ice on the Road');
const bodiesWarning = hazardWarningCreator('Dead bodies on the Road');

rocksWarning('71st Street');
rocksWarning('81st Street');
iceWarning('Elm Street');
bodiesWarning('Main Street');


 



let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


movements = movements.filter(function(step){
	if (step[0] >= 0 && step[1] >= 0){
		return true;
	}

})

let distance = movements.map(function(step){
	return step[0] + step[1];
})

distance.forEach(function(totalSteps) {
  console.log(totalSteps);
});