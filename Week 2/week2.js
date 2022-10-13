// WEEK 2 CURRICULUM SUGGESTION FOR LOOPS:
/*
let loggedIn = false;
let username = null;
let password = null;
for(let i = 0; i < 3; i++){
    if(!loggedIn){
        username = prompt("USERNAME: ");
        password = prompt("PASSWORD: ");
        if(username == 'samy123' && password == '12345'){
            loggedIn=true;
            break;
        } else {
            alert('Inaccurate credentials!');
        }
    }
}
if(loggedIn){
    alert("Welcome back, "+username);
} else {
    alert("You're locked out")
}
/*

//WEEK 2 LAB PRACTICE

// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
let speedLimit = 50;
let mySpeed = 49;

// using a conditional, determine if mySpeed is greater than the speedLimit
if (mySpeed > speedLimit){

// if true, print "Slow Down! Mom is mad!" to the console
console.log('Slow down! Mom is mad!');
}
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
else if (mySpeed == speedLimit){
    console.log('Everyone is happy!');
}
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
else {
    console.log('Speed up! Dad is mad!');
}

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
let alarmSet = true;
let openDoor = false;

// using a conditional, determine if alarm is set. 
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
if (alarmSet && openDoor){
    console.log('Sound Alarm!');
// otherwise, print "Everything is fine." to the console.

} else {
        console.log('Everything is fine.');
    }

// create two variables, username and password
let username;
let password;
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
if((username === 'Tommy123' && password === '12345') || (username === 'Timmy456' && password === '6789')){
    console.log('Admin Login Successful');
}else{
    // otherwise, print "Admin Access Denied"
    console.log('Admin Access Denied');
}

// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
let studentGrade = 6;
let studentClass;

switch(studentGrade){
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        studentClass = 'Elementary';
        break;
    case 6:
    case 7:
    case 8:
        studentClass = 'Middle School';
        break;
    case 9:
        studentClass = 'Freshman';
        break;
    case 10:
        studentClass = 'Sophomore';
        break;
    case 11:
        studentClass = 'Junior';
        break;
    case 12:
        studentClass = 'Senior';
        break;
    default:
        console.log('Error');
}
console.log(studentClass);



// write a for loop that will iterate backwards from 10 to -10
for(let i = 10; i >= -10; i--){
    console.log(i);
}


// write a do/while loop that prints 1 through 50
let iterator = 1;
do {
console.log(iterator);
iterator++;
} while(iterator <= 50);

// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4
do {
    console.log(iterator % 4);
    iterator++;
    } while(iterator <= 50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
      console.log(i);
    } 
*/
/*
for(let i = 1; i < 10; i++){
    console.log(i);
  } 

  for(let i = 11; i < 100; i++){
    console.log(i);
  } 

  for(let i = 110; i > 10; i--){
    console.log(i);
  } 
*/
//END WEEK 2 LAB PRACTICE

// BEGIN CONDITIONALS COMMENTS:
/* if/else statements:

state variable

if(condition) {
    statement
}
else if(condition) {
    statement
}
else if(condition) {
    statement
}
else {
    statement
} 

let hour = 10;

if(hour >= 6 && hour < 12) {
    console.log('Good morning!');
}
else if(hour >= 12 && hour < 18) {
    console.log('Good afternoon!')
}
else {
    console.log('Good evening!');
}
*/

/* Nested if/else statements:
state variable

if(condition1){
    if(condition2){
        if(condition3){
            console.log(statement for met condition3)
        }else{
            console.log(statement for met condition 2 but not conditon3)
        }
    }
    else {
        console.log(statement for NOT met condition2 but met condition1)
    }
}
else {
    console.log(statement for NOT met condition1)
}
EXAMPLE:
let spend = 15

if(spend >= 20){
    if(spend >= 50){
        if(spend >= 100){
            console.log('Free shipping!')
        }else{
            console.log('Shipping is $5.00!')
        }
    }
    else {
        console.log('Shipping is $10.00')
    }
}
else {
    console.log('Shipping is $15.00!')
}
*/

/* 
let num1 = 20
let num2 = 15
let num3 = 25
let num4 = 26

if(num1 >= num2){
    if(num3 >= num4){
        console.log('Both statments are true.');
    }else {
        console.log('The first statement is true, but the second is not.');
    }
}

console.log('Program ended.');
*/

/* Print The Smaller Number: 
Write an if/else if statement that prints the smaller of the two given inputs, num1 and num2. 
If they are the same, print "same"

if(num1 < num2){
    console.log(statement for condition 1 true)
}else if(num1 == num2){  <--condition "But if neither is less than the other but they are equal"
    console.log(statement says they are the same)

} else{
    console.log(condition for condition 1 false)
}

*/

/*
if(num1 < num2){
    console.log(num1)
}else if(num1 == num2){
    console.log('same')

} else{
    console.log(num2)
}
*/

/* If num1 = num2, say A
If num 1 is greater than or equal to num2, say B
If neither is true and num2 is greater than num1, say C

let num1 = 5
let num2 = 5

if(num1 == num2){
    console.log('A');
}else if (num1 >= num2){
    console.log('B')
}else {
    console.log('C')
}
*/

/* Equality Comparison: 
Write an if statement that compares num1 to num2. 
If they are equal, print "num1 is equal to num2."

let num1 = 3
let num2 = 3
if(num1 == num2){
    console.log('num1 is equal to num2.')
}
*/

/*Old Enough To Drive? 
Write an if statement that checks if the given age is greater than or equal to 16. 
If it is, set canDrive to true and print it's value to the console. 
Use the already declared variables of age and canDrive.

if(age >= 16){
    console.log(canDrive = true);
}

ALTERNATE CODE (CHANGING VARIABLE WITHIN IF STATEMENT)
if(age >= 16 ){
     canDrive = true; <--changed variable
     console.log(canDrive);
 }
*/


/* Switch statements:
-Are case and type sensitive (capitalization, strings vs numbers, etc.)
-Are neater than writing if/else statements
-default statements act like else statements
-only accepts single values, cannot do comparisons

EXAMPLE SWITCH CODE:
let month = 4;

switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    default:
        console.log('That is a month not listed.');
}
*/

/* Day Of The Week: 
Write a switch statement that checks the already declared variable numberOfDay 
and prints the corresponding name of the day of the week.
For example, if numberOfDay is 1, "Sunday" will be printed to the console. 
If the numberOfDay is not between 1 and 7, print "The number of day is invalid."


let numberOfDay = 7;

switch(numberOfDay){
    case 1: 
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log("The number of day is invalid.");

}
*/ 

/* Number Comparison: 
Create an if/else if statement that checks myNumber against num1 and 
based on which condition evaluates to true, print the following messages:
- num1 + " is smaller than my number, " + myNumber 
- num1 + " is larger than my number, " + myNumber 
- num1 + " is equal to my number, " + myNumber


if(num1 < myNumber){
    console.log(num1 + " is smaller than my number, " + myNumber);
}
else if(num1 == myNumber){
    console.log(num1 + ' is equal to my number, ' + myNumber);
}
else{
    console.log(num1 + ' is larger than my number, ' + myNumber);
}

ALTERNATE CODE STATING WITH ELSE STATEMENT REPRESENTING IF EQUAL:
if ( num1 < myNumber ) {
    console.log(num1 + " is smaller than my number, " + myNumber);
} else if ( num1 > myNumber){
    console.log(num1 + " is larger than my number, " + myNumber);
} else {
    console.log(num1 + " is equal to my number, " + myNumber);
}
*/

/* What Is My Letter Grade? 
Write a series of if/else if statements using the already declared variables 
numberGrade and letterGrade that check the numberGrade and assign letterGrade 
to a string of the corresponding letter grade. 
Print the letter grade to the console.
A: 90+
B: 80-89
C: 70-79
D: 60-69
F: 0-59


if(numberGrade >=90){
    let letterGrade = 'A';
    console.log(letterGrade)
} else if(numberGrade >= 80 && numberGrade <= 89){
    let letterGrade = 'B';
    console.log(letterGrade)
} else if(numberGrade >= 70 && numberGrade <= 79){
    let letterGrade = 'C';
    console.log(letterGrade)
} else if(numberGrade >= 60 && numberGrade <= 69){
    let letterGrade = 'D';
    console.log(letterGrade)
} else if(numberGrade <= 59){
    let letterGrade = 'F';
    console.log(letterGrade)
}

ALTERNATE CLEANER CODE WITHOUT && OPERATOR AND PRINTING ON EVERY LINE
 if(numberGrade >= 90){
     letterGrade = 'A';
 } else if(numberGrade >= 80){
     letterGrade = 'B';
 } else if(numberGrade >= 70){
     letterGrade = 'C';
 } else if(numberGrade >= 60){
     letterGrade = 'D';
 } else {
     letterGrade = 'F';
 }
 
 console.log(letterGrade);

*/ 

/* Can I Buy A Soda? 
Write an if statement that checks to see if there is enough money to cover the cost of a soda. 
Use the already declared variables money and costOfSoda. 
Use console.log() to print one of the following results:
- If there is enough money to cover the cost of a soda, print "I can buy a soda!" 
- If not, print "I need to earn some more money!"
 

if(money >= costOfSoda){
    console.log('I can buy a soda!');
} else {
    console.log('I need to earn some more money!');
}
*/ 

/* Print the Larger Number: 
Write an if else/if statement that compares num1 to num2 and prints the larger of the two. 
If they are equal, print "num1 is equal to num2"

if(num1 > num2){
    console.log(num1);
} else if(num1 == num2){
    console.log('num1 is equal to num2');
} else {
    console.log(num2)
}
*/

/* Which Month Is It? 
Write a switch statement to check the value of the already declared variable 
monthNumber and then when the match is made, print out the name of that month in a string.
Example: if the monthNumber is 7, print out "July" to the console. 
If the monthNumber is not between 1 and 12, print out "Invalid Month" to the console.

switch(monthNumber){
    case 1: 
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('Invalid Month');
}
*/
// END CONDITIONALS COMMENTS

// BEGIN BOOLEAN OPERATORS COMMENTS:
/* Using Boolean Operators, write a comparison to see if age is greater than or equal to 16, 
and using console.log() print the result to the screen.

let age = 12
let canDrive = false

if(age >= 16){
    console.log(true);
}
else {
    console.log(false);
}

ALTERNATE CODE WITHOUT IF/ELSE STATEMENT:
console.log(age >= 16 );

*/

/* Let's go on vacation! 
We can go if we have enough money for a plane ticket and we have vacation time. 
Use the already declared variables money, planeTicket and vacationTime. 
Determine if we can go, and print the result to the console using console.log()

var planeTicket = parseInt(input[0]);
var money = parseInt(input[1]);
var vacationTime = inputText;

console.log(money >= planeTicket && vacationTime === true);
*/

/* Not Equal: 
Determine if var1 is not equal to var2. 
Print the result to the console using console.log().

console.log(var1 != var2);
*/

/* NOTE: 
When using the Strict Equality (===), the data type and the value must be equal. 
A Number is not equal to String when using ===.
*/

/* Is it the Weekend? 
If the day is "Sunday" or "Saturday", print true. 
Otherwise, print false.

CODE 1: (can use == or === because comparing string to string)
if(day === "Sunday" || day === "Saturday"){
    console.log(true);
}else {
    console.log(false);
}

CODE 2: (can use == or === because comparing string to string)
console.log(day === "Sunday" || day === "Saturday");
*/

/* Grade Comparison:
Did I pass? Determine if myGrade is passing. 
Using console.log(), print true if it is and false if not. 

Did I get an A? Also, determine if myGrade is an A. 
Using console.log(), print the result to the console, either true or false. 
(An A will be a grade of 90 or above).

To determine if myGrade is passing, it must be greater than or equal to >= passingGrade.
To determine if myGrade is an A, it must be greater than or equal to >= 90.

console.log(myGrade >= passingGrade);
console.log(myGrade >= 90);
*/

/* Using Boolean Operators, print the result of A is greater than B or B and C are greater than D.

console.log(a > b || (b && c > d));

ALTERNATE:
console.log(a > b || (b > d && c > d));
*/

/* Using Boolean Operators, write the following comparisons and print the results using console.log():
(1) Print the result of num1 is greater than num2.
(2) Print the result of num1 is less than num2.

The greater than operator is >.
The less than operator is <.

console.log(num1 > num2);
console.log(num1 < num2);
*/

// END BOOLEAN OPERATORS COMMENTS

// BEGIN LOOPS COMMENTS
/* For loops
for (intial expression; condition; increment expression)

for (let i = 0; i <5; i++) {
    console.log('Hello world');
}
RESULT: Hello world will print 5 times.

FIND ODD NUMBERS:
for (let i = 0; i <=5; i++) {
    if (i % 2 !== 0) console.log(i);
}
NOTE: % 2 !== 0 represents an odd number as the remainder after dividing by 2 does NOT equal 0

REVERSE:
for (let i = 5; i >=1; i--) {
    if (i % 2 !== 0) console.log(i);
}
*/

/* For Loop: Write a for loop that prints every third number from 0 up to, and including, 99.
Notes: 
- ++ adds 1
- -- subtracts 1
- +=# counts/adds every nth number
- -=# subtracts every nth number

for(let i = 0; i <= 99; i+=3){
    console.log(i)
}

Do while loops that does the same thing as above for loop:

let i = 0
do{
    if(i % 3 === 0){
        console.log(i);
    }
    i++;

}while(i <=99);
*/

/* For Loop 0 to x: Write a for loop that prints the numbers 0 to x. 
The x is an already declared variable. 
x has been initialized for you and will be based on a user's input.

for(let i = 0; i <= x; i++){
    console.log(i);
}
*/

/* Let's play a game: This is an advanced problem!
Rules of this Game:
- The game will consist of 100 turns. 
- If the number of turns is even, you gain 5 points. 
- If the number of turns is odd, you gain 3 points. 
- If ever your score is equal to 125, you are reset back to 25 points. 
- This will only be allowed to happen once. 
- The game ends if you are able to make it through 100 turns or you reach more than 290 points, 
  whichever comes first.
- Using a for loop, and the two already declared variables points and pointsReset, create the game.
 
for(let i = 0; i < 100 && points < 290; i++){
    if(points == 125 && pointsReset === false){
    points = 25;
    pointsReset = true;
    }
    else if(i % 2 == 0){
        points = points + 5;
    }
    else{
        points = points + 3;
    }
    console.log("Turns: " + i + " Score: " + points);
}

EXPLANATION:
for(let i = 0 [turns]; i < 100 [TURNS UP TO 100] && points < 290 [POINTS UP TO 290]; i++ [COUNTS TURNS]){
    if(points == 125 && pointsReset === false){
    points = 25;
    pointsReset = true; [IF POINTS GET TO 125, THE POINTSRESET AT FALSE CHANGES TO TRUE AS POINTS CHANGE TO 25]
    }
    else if(i % 2 == 0){
        points = points + 5 [IF TURN NUMBER IS EVEN ADD 5];
    }
    else{
        points = points + 3 [IF TURN NUMBER IS NOT EVEN/ IS ODD ADD 3];
    }
    console.log("Turns: " + i + " Score: " + points) [PRINTS TURN AND SCORE NUMBERS];
}
*/

/* Do/While Loop: 
Create a do/while loop that will print the already declared variable userNumber 
and then add 6 each time through the loop. 
Stop the loop once the number is greater than or equal to 100.

do{
    console.log(userNumber);
    userNumber += 6;
}while(userNumber <= 100);

EXPLANATION:
do{
    console.log(userNumber) [PRINT USERNUMBER STARTING WITH ORIGINAL];
    userNumber += 6 [ADD 6 TO EACH PRINT];
}while(userNumber <= 100) [STOP WHEN UNDER OR AT 100];


for (i = 1; i <=10; i++) {
    console.log(num + ' x ' + i + ' = ' + (num*i));
}

EXPLANATION:
for (i = 1; i <=10; i++) { [product starts are 1; product is listed up until 10; product is incremented by 1 ]
    console.log(num + ' x ' + i + ' = ' + (num*i)); [print products in number sentence form: "number x increment = PRODUCT"]
}

*/

/* Countdown: 
-Write a while loop that does a count down using the already declared variable countdown. 
-This variable is initialized to the number that a user enters.
-Check to make sure the number is not larger than 10, but greater than or equal to 3 
-Each time the loop runs, print to the console the value of the counter followed by three periods (…) 
-Once out of the loop, print to the console "We have lift off!" 
-If a number is less than 3 or greater than 10, then the only message printed to the console is "We have lift off!"
-If the user inputs 3, the output should be:
3…
2…
1…
We have lift off!


if (countdown <= 10 && countdown >= 3) { [conditions set for countdown]
    while (countdown >= 1) { [setting countdown to go to 1]
        console.log(countdown + "..."); [print statement to include ellipses]
        countdown--; [increment counting down]
    }
}

console.log("We have lift off!"); [statement after or outside of countdown is printed]

*/

/* While Loop: 
Check to see if userNumber is between 1 and 100. 
If it is, create a while loop that prints all integers starting with userNumber to 100. 
If not, print "Your number was not between 1 and 100."

if(userNumber >= 1 & userNumber <= 100){ [conditions that number is 1 and above but at or below 100]
    let i = userNumber; [assigning increments to userNumber]
    while(i <= 100){ [while condition that increments stay at or below 100]
        console.log(i); [print increments of userNumber]
        i++; [increments of userNumber increase by 1]
    }
}else {
    console.log('Your number was not between 1 and 100.'); [else statement to say it isn't within specified conditions]
}
*/
//END LOOPS COMMENTS

/* Questions for mentor:
1. What does while mean? 
2. How was I to look up or figure out the above OpenClass problems with loops?
3. The curriculum videos did not explain most of what was in OpenClass. I know we are encouraged to look elsewhere,
but I could not figure out how to search these problems.
*/

/* let countdown = 4

if (countdown <= 10 && countdown >= 3) { //starting countdown between 3 and 10
    console.log("Countdown in If: " + countdown);
    while (countdown >= 1) { //sets loop condition to stop at 1
      console.log(countdown);
      countdown--;
    }
    console.log("Blastoff!");
  }else{
    console.log('Number outside countdown');
  }
  console.log('After if statement', countdown);
*/ 

  /* ALTERNATE OPTION FOR COUNTDOWN LOOP
for(let i = 10; i>0; i--){
    console.log(i + '...');
    if(countdown <= 10 && countdown >= 3){
        countdown--;
        console.log(countdown);
    }
}
console.log('Blastoff!'); */

/* EXTRA PRACTICE:
Adding cups of rice with loops-
Using for loop:
for(i = 1; i <= requiredCupsOfRice; i++){
    currentCupsOfRice += 1;
    console.log('The bowl contains ' + currentCupsOfRice + ' cups of rice.');
}  console.log('We have enough rice!');

Using while loop:
while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

*/
/* Testing loops for research explanation

for (let i = 0; i < 5; i++){ 
    console.log('Hello world'); 
 } 

let num1 = 0
let num2 = 5
while(num1 < num2) { 
    console.log('Num1 is ' + (++num1) + ', which is less than num2'); 
} console.log('Num1 is no longer less than num2') 

let userNumber = 12
do{
    console.log(userNumber);
    userNumber += 6;
}while(userNumber <= 60);

*/