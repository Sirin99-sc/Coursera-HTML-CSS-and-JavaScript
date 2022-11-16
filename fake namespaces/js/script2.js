
(function (window) {
var greeter2={};
greeter2.name="John";
var greeting="Hi ";
greeter2.sayHi = function(){
	//console.log("Hi "+greeter2.name);
	console.log(greeting+greeter2.name);
  }
  window.greeter2=greeter2;
})(window);