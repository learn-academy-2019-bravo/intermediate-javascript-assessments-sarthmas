// Intermediate Javascript Assessments

/* 1. Write an arrow function that takes one argument of type array and
returns the contents of that array in reverse order.*/
//
var arr4 = [1, 2, 3, 4, 5, 6, 7]
var new_arr4 = arr4.reverse();

console.log(new_arr4)

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

var n = ourString.search("l");


console.log(n);

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//

var fibonacci_series = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(9));

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

// var arr5 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function isInteger(value) {
  return typeof value === "number";
}

var intArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"].filter(isInteger);
function isOdd(value) {
  return value % 2 !== 0;
}
var finalArr = intArr.filter(isOdd);
console.log(finalArr);
