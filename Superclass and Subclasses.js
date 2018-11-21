
// Superclass and Subclasses

var Car = function (loc) {
	var obj = {loc: loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};

// Create a second category of object for cal (a Cop object), with same powers as category
var cal = Car(2);
// cal.call() // error -> property does not exist in Car, special to Cop. 

// Create superclass that produces an object that starts where the superclass leaves off
var SuperCar = function () {
	var obj = {loc: loc};
	obj.move = function () {
		obj.loc++;
	};
	return obj;
};
