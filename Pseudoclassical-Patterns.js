// Pseudoclassical pattern eases the transition for developers coming from traditional class-based languages, like Python. 

var Car = function (loc) {
	var obj = Object.create(Car.prototype); // pseudoclassical pattern does this for you in 'new'
	obj.loc = loc; 
	return obj;                             // pseudoclassical pattern does this for you in 'new'
};

Car.prototype.move = function () {
	this.loc++;
};

var amy = new Car(1);
amy.move();

var ben = new Car(9); // function will run in constructor mode, your interpreter will insert operations into your code
// keyword 'new' temporarily makes your function run as if there was extra code at the beginning and end 
ben.move();

// Can now remove the lines of code that the 'new' keyword will insert for you
var Car = function (loc) {
	this.loc = loc; //	var obj = Object.create(Car.prototype); -> machine writes -> this = Object.create(Car.prototype);              
};                  //	return obj; -> machine writes -> return this;
Car.prototype.move = function () {
	this.loc++;
};
