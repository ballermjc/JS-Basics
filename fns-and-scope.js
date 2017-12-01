//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
let isTyler = (name) => name == 'Tyler' ? true : false;
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
  var nameTwo = prompt("What is your name?");
  return nameTwo;
};

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
let welcome = () => {
  var nameTwo = getName();
  alert(`Welcome, ${nameTwo}`);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
//Parameters are the placeholders for items that will be passed into the function. Arguments are the actual items passed into the function.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//False, 0, null, NaN are the ones I though of. MDN also points out that undefined, '', and "". You can check if something is falsy many ways.
//One way would be let falsyChecker = (item) => !item ? "Falsy" : "Truthy";


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  let myName = () => "Michael";


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  let newMyName = () => myName();
//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  let outerFn = () => {
    return function() {
      return "Michael";
    }
  }
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  let innerFn = outerFn();
//Now invoke innerFn.
  innerFn();