var sagas = []; // global array to store saga function objects, accessible outside of the newSaga function 

var hero = aHero();
var newSaga = function(){
    var foil = aFoil();
    
	//var saga = function(){   -> now need to push saga function objects into the sagas array 
	sagas.push(function(){  
		var deed = aDeed();
		log(hero+deed+foil);
	});
};
newSaga();
sagas[0](); // invokes the first function stored in sagas array

newSaga();
sagas[1]();
