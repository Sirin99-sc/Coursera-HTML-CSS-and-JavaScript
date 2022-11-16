
(function (window) {
var greeter={};
greeter.name="Sirin";
var greeting="Hello ";
greeter.sayHello = function(){
	//console.log("Hello "+greeter.name);
	console.log(greeting+greeter.name);
   }

   window.greeter=greeter;//placing it in the window object
})(window);