function fizzBuzz(num){

    for (i = 1; i <= num; i++){
    	if (i % 5 == 0 && i % 3 == 0){
    		let j = 3;
    	} else if (i % 5 == 0){
    		let j = 2;
    	} else if (i % 3 == 0){
    		let j = 1;
    	} else {
    		let j = 0;
    	}
			  switch () {
			  	case j=3:
				  console.log('fizzBuzz');
				  break;
				case j=2:
				  console.log('fizz');
				  break;
				case j=1:
				  console.log('buzz');
				  break;
				default:
				  console.log(i);
				  break;
			

		}
	}
}
fizzBuzz(15);