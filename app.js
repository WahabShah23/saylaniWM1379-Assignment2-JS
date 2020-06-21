console.log('Hello JS Assignment 2 WM1379!');



// <----------------------BEGIN:: Chapter No  21-25 BEGIN:: --------------------------->






/* <--------------------------- END:: Chapter 21-25 END:: ----------------------------------------> */





/* <---------------------------BEGIN:: Chapter 26-30 BEGIN::----------------------------------------> */


// @@ Task 1 ---------------------------------------

function positiveInteger() {
    var number = prompt("Enter a positive integer");

    if (number > 0) {
        console.log(number + " is a positive");
        console.log(Math.round(number));
        console.log(Math.floor(number));
        console.log(Math.ceil(number));
    } else {
        alert("you can't enter negative number")
        console.log(number + " is negative" + "<br/>");
        positiveInteger(); 
    }
}

// positiveInteger();



// @@ Task 2 -------------------------------------------

function negativeInteger() {
    var number = prompt("Enter a negative floating point number");

    if (number < 0) {
        console.log(number + " is -ve");
        console.log(Math.round(number));
        console.log(Math.floor(number));
        console.log(Math.ceil(number));
    } else {
        alert("you can't enter positive number")
        console.log(number + " is positive" + "<br/>");
        negativeInteger(); 
    }
}
// negativeInteger();



// @@ Task 3 -------------------------------------------------------


 const absolute = () => {

 	var num = prompt("Enter number");

	if(num > 0) {
		Math.abs(num);
		console.log(num + " is absolute");
	} else {
		console.log("It is -ve");
		let absolute = Math.abs(num);
		console.log({absolute});
	}
}
// absolute();





// @@ Task 4 ---------------------------------------------------


 const rollDice = () => {

 	let random = Math.random() * 6;
 	console.log(random);
 	let dice = Math.ceil(random);
 	console.log('Dice Shows', dice);
 	alert('Dice rolled and shows ' + dice);
}
// rollDice();




// @@ Task 5 ------------------------------------------------------

 const flipCoin = () => {

 	let random = Math.random() * 2;
 	let coin = Math.ceil(random);

 	if(coin == 2) {
 		alert(coin + " Its Heads");
 	} else {
 		alert( coin + " Its Tails");
 	}
}

// flipCoin();




// @@ Task 6 ----------------------------------------------------------

 const randomNumber = () => {

 	let random = Math.random() * 100;
 	let number = Math.ceil(random);

 	alert( "Random number between 1 and 100 ==> " + number);
 	console.log( "Random number between 1 and 100 ==> " , number);

}
// randomNumber();



// @@ Task 7 -----------------------------------------------------

 const weightFunc = () => {

 	var weight = prompt("Enter you weight (50, 50kgs, 50.5kgs or 50.2kilograms)");

	if(weight * 1) {
		console.log("The weight is " + weight + " kilograms");
	} else if (weight.indexOf(' ')) {
		alert("There is a space in your entry, enter the mentioned format");
		weightFunc();
	} else {
		let extracted = weight.split('k');
		
		console.log("It was string", weight);
		console.log("Extracted weight " + extracted[0] + " kilograms");
	}
}

// weightFunc();




//  @@ task 8 -----------------------------------------------


 const randomSecretNumber = () => {

 	let random = Math.random() * 10;
 	let secretNumber = Math.ceil(random);

 	let userInput = prompt('Enter number between 1 and 10');

 	if(userInput < 1 || userInput > 10) {
 		alert("you can not enter number less than 1 and greater than 10!");
 		randomSecretNumber();
 	} else {
 		if(userInput == secretNumber) {
 			alert("Wow you must be a psychopath xD!");
 		} else {
 			alert("Try Again");
 			randomSecretNumber();
 		}
 	}


}
// randomSecretNumber();




// <---------------------------- CHAPTER 26-30 END ------------------------------------>





// <----------------------BEGIN:: Chapter No  31-34 BEGIN:: --------------------------->






/* <--------------------------- END:: Chapter 31-34 END:: ----------------------------------------> */











// <----------------------BEGIN:: Chapter No  35-38 BEGIN:: --------------------------->


// @@ TASK1 -----------------------------

const dateTime = () => {
	let date = new Date();
	console.log(date);
}
// dateTime();




// @@ Task 2 ---------------------------------

const greet = () => {
  let firstName = prompt("Enter First Name");
  let lastName = prompt("Enter Last Name");

  alert('Welcome ' + firstName + ' ' + lastName);
}




// @@ Task 3 --------------------------------------

const sum = () => {
  let firstNumber = prompt("Enter First Number");
  let lastNumber = prompt("Enter Last Number");
	
  let sum = Number(firstNumber) + Number(lastNumber);

  return sum;
}
// document.write(sum());



// @@ Task 4 -------------------------------------------

// Calculator




//@@ Task 5 --------------------------------------------


// var num = prompt("Enter number to be squared");

// const square = (a) => {
  
//   let square = a * a;
//   return square;
// }
// document.write(square(num));
// alert(square(num));





// @@ Task 6 ----------------------------------------

var input = prompt("Enter a number to calculate factorial!");

const factorial = (num) => {

	if(num > 1) {
		return (num * factorial(num-1));
	}else {
		return 1;
	}



}

// document.write(factorial(input));




// @@ Task 7 -----------------------------------


const counting = () => {

	var startNumber = prompt("Enter Start Number");
	var endNumber = prompt("Enter End Number");
  
  for(var i = startNumber; i < endNumber; i++ ) {
  	console.log(i);
  }


}
// counting();






// @@ Task 10 ----------------------------------------


const palindrome = () => {
	var word = prompt('Enter a word to check if it is a palindrome');

	let reverseWord = word.split("").reverse().join("");

	if(word == reverseWord) {
		alert(word + " is palindrom");
	} else {
		alert(word + " and " + reverseWord + " are not palindrome");
	}

}

// palindrome();




// @@ task 11 --------------------------------------


const capitalize = () => {
	var sentence = prompt('Enter a sentence to make its first letter in uppercase');

	var modifiedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

	alert('original sentence ' + sentence);
	alert('capitalized sentence ' + modifiedSentence);

}

// capitalize();



/* <--------------------------- END:: Chapter 35-38 END:: ----------------------------------------> */