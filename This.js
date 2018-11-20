/* The parameter 'this' behaves almost exactly like a normal parameter, with two differences:
1. you don't get to pick the name. It's name is 'this'
2. you bind the value to the parameter 'this' a little differently 

The parameter 'this' is an identifier that gets a value bound to it (like a variable). 
Instead of defining the bound value explicitly in your code, 'this' is bound to the correct object automatically. 
The rules for what gets bound to 'this' resemble the rules for normal positional parameters. */

// Q: What is 'this' bound to? 
var obj = {
    fn: function (a, b) {
        console.log(this);
    }
};

obj.fn(3, 4);
// A: the object to the left of the dot on a function invocation
// the object to the left of the dot when you call the function is what 'this' refers to 90% of the time! 


                            // none of these five following are what this is bound to:
var obj = {                 // 1. the object created by the literal this appears within 
    fn: function (a, b) {   // 2. the function object this appears within
        log(this);          // 3. a new instance of the function this appears within *generally speaking*
    }
};

var ob2 = {method: obj.fn}  // 4. an object that happens to have that function as a property
obj.fn(3, 4)                // 5. an execution context or scope of that function call */


// What this is bound to
obj.fn(3, 4) // the object found to the left of the dot where the containing function is called


var fn = function (one, two) {
    log(one, two);
};
var r = {},
    g = {},
    b = {}

fn(g, b) // When this is called, one is temporarily bound to g, and two is temporarily bound to b
         // The this keyword behaves like a parameter in most of the important ways. 

// Now, we enter a scenario with this.
var fn = function (one, two) {
    log(this, one, two);
};
var r = {},
    g = {},
    b = {}
r.method = fn; // Using the previous statement that this is bound to 
// the object found to the left of the dot where the containing function is called,
// we can conclude that the following call
r.method(g, b) // will output r, which is {}, g, and b (which are also both {}).
// Obviously, r['method'](g,b) would work as well.

// Here is another harder scenario.
var fn = function (one, two) {
    log(this, one, two);
};
var r = {},
    g = {},
    b = {}
r.method = fn;
fn(g, b) // If there is nothing "left of the dot", what will be outputted?
/* The answer is in the scope that fn was defined.
Since fn is global, calling fn(g,b) would result in an output of global. */

/* Say we want to call a function and it wasn't stored as a property of the
obj we want this to be bound to.
The way we can accomplish this is with call() */
fn.call(, g, b) // When we call this line, we need to pass in an extra value in the beginning
// We pass in whatever we want to access with this.
fn.call(r, g, b)
// This can "override" the left of the dot rule.
r.method.call(y, g, b) // So if we called this, assuming that y was defined earlier,
// What would be returned **would not** be r - it would be y.