function repeat(fn, n) {
let i = 0;
  while (i < n) {
    fn();
    i++;
  }
}
function hello() {
  console.log('hello world');
}
function goodbye() {
  console.log('goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn){
  let newArray = [];
  for (let i=0; i < arr.length; i++){
  	let currentElement = arr[i];
  	if (fn(currentElement)  ){
  		newArray.push(currentElement);
  	}
  }
  return newArray;	
}

function anaFun(arg){
	if(arg.length === 3) {
		return true;
	} else {
		return false;
	}
};


const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const newFilteredArray = filter(myNames, anaFun);
console.log(newFilteredArray);


/*const filteredNames = filter(myNames, function(name){
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
*/