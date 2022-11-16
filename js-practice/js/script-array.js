
/*Arrays
var arr=new Array();
arr[0]= "Sirin";
arr[1]= 5;
arr[2]= function(name){
	console.log("Hello "+name);
}
arr[3]= {course: "HTML, CSS & JS"};

console.log(arr);
console.log(arr[1]);
arr[2](arr[0]);//func call
console.log(arr[3].course);*/

/*Short hand array creation
var names=["Yaakov","John","Joe"];
console.log(names);

for (var i = 0; i < names.length; i++){
	console.log("Hello "+names[i]);
}

names[100]="Jim";//sparsing allowed
for (var i = 0; i < names.length; i++){
	console.log("Hello "+names[i]);
}

var names2=["Yaakov","John","Joe"];

var myObject={
	name: "Yaakov",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for(var prop in myObject){
	console.log(prop+": "+myObject[prop]);//special for loop for objects
}

for(var name in names2){
	console.log("Hello "+names2[name]);
}

names2.greeting="Hi!";//greeting becomes aprop of names2
for(var name in names2){
	console.log("Hello "+names2[name]);
}*/

/*Closures*/
function makeMultiplier(multiplier){
	//var multiplier=2
function b(){
	console.log("Multiplier is: "+multiplier);
}
b();

	return( //doesn't have its own "this"
		function(x){
			return multiplier*x;
		}
	);
}
var doubling=makeMultiplier(2);
console.log(doubling(10));//it gets its own exec env