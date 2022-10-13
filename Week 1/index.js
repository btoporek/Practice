//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 12;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 51.35;

//create a variable to hold a person's middle initial
let middleInitial = 'D';

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;

//create a variable to hold a customer's first name
let customerFirstName = 'Mike';

//create a variable to hold a street address
let streetAddress = '12345 East This Way Lane';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log (isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "L"
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let customerFullName = customerFirstName + " " + middleInitial + " " + "Jones";
console.log(customerFullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hi, my name is ' + customerFullName + ' and I live at ' + streetAddress + '.');