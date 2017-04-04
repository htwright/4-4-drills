function fizzBuzz(num){

    for (i = 1; i <= num; i++){
	  switch (true) {
	  	case i%3==0 && i%5==0:
		  console.log('fizzBuzz');
		  break;
		case i%3==0:
		  console.log('fizz');
		  break;
		case i%5==0:
		  console.log('buzz');
		  break;
		default:
		  console.log(i);
		  break;
		}


	}
}
fizzBuzz(15);