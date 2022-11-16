/*Object creation
var company=new Object();
company.name="Facebook";
//console.log(company);
company.ceo=new Object();
company.ceo.fname="Mark";
company.ceo.favcolor="blue";

console.log(company);
console.log("Company CEO is: "+company.ceo.fname);

console.log(company["name"]);
var stockVarname="Stock of company";
company[stockVarname]=110;
//company["Stock of company"]=110;
console.log("Stock price is: "+company[stockVarname]);*/

/*Object literal
var facebook= {
	name: "Facebook",
	ceo:{
		fname: "Mark",
		favcolor: "blue"
	},
	"Stock of company": 110
};
console.log(facebook.ceo.fname);*/

/*Functions->first-class DT
function multiply(x,y){
	return x*y;
}
console.log(multiply(5,4));

multiply.version="v.1.0"; //funcs can have properties like objects
//console.log(multiply); //prints the val of the func coded
console.log(multiply.version);*/

/*Functiion factory
function makeMultiplier(multiplier){
	var myfunc=function(x){
		return multiplier * x;
	};
	return myfunc;
}

var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));
var doubling=makeMultiplier(2);
console.log(doubling(20));*/

/*passing funcs as args

function doOpsOn(x,operation){
	return operation(x);
}
var res=doOpsOn(5, multiplyBy3);
console.log(res);
res=doOpsOn(10,doubling);
console.log(res);*/


/*Copy by val(primitive)
var a=7;
var b=a;
console.log("a is: "+a);
console.log("b is: "+b);

b=5;
console.log("after b updated: ");
console.log("a is: "+a);
console.log("b is: "+b);*/

/*Copy by ref(object)
var a={x: 7};
var b=a;
console.log(a);
console.log(b);

b.x=5;
console.log("after b updated: ");
console.log(a);
console.log(b);*/

/*Pass by val
function changePrimitive(primVal){
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primVal);

	primVal=5;
	console.log("after:");
	console.log(primVal);
}
var value=7;
changePrimitive(value);//primVal=value
console.log("after changePrimitive, orig value:");
console.log(value);//value remains same, primVal chnages*/

/*Pass by ref
function changeObject(objValue){
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);

	objValue.x=5;
	console.log("after");
	console.log(objValue);
}
var value={x: 7};
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);//value also changes, as memo loc of value & objVal same*/

// function test(){
// 	console.log(this);
// 	this.name="Sirin";
// }
// test();
// console.log(window.name);

/*Function constructors
function circle(radius){
	//console.log(this);
	this.radius=radius;

//    this.getArea=
//     function(){
// 	  return Math.PI*Math.pow(this.radius,2);
// };
}

circle.prototype.getArea=
function(){
	return Math.PI*Math.pow(this.radius,2);
}
var myCircle=new circle(10);//new object
console.log(myCircle.getArea());

var my2ndCircle=new circle(20);
console.log(my2ndCircle);*/

/*Object literals and "this"*/
var literalCircle={ //new object
	radius:10,

getArea: function(){
	var self=this;
	console.log(this);

	 var increaseRadius=function(){
	 	self.radius=20;
	 };
	 increaseRadius();
	 console.log(this.radius);

	return Math.PI*Math.pow(this.radius,2);

}
};
console.log(literalCircle.getArea());

/*function orderChiWith(sideDish){
	if (sideDish==undefined) {
		sideDish="noodles";
	}
	console.log("Chicken with "+sideDish);
}

orderChiWith("rice");

function orderChiWith(sideDish){
	sideDish=sideDish || "Whatever!";
	console.log("Chicken with "+sideDish);
}

orderChiWith();*/


/*function examples

var mssg="in global";
console.log("global: mssg = "+mssg);

var a= function(){
	var mssg="inside a";
	console.log("a: mssg = "+mssg);

	function b(){
		console.log("b: mssg = "+mssg);
	}
	b();
}
	
a();*/

/* undefined DT example

var x;
console.log(x);

if (x==undefined) {
	console.log("x is undefined");
}

x=5;
if (x==undefined) {
	console.log("x is undefined");
}
else{
	console.log("x is defined");
}*/

/*String concatination

var str="Hola";
str+=" Amigo";
console.log(str+"!");*/

/*Math ops

console.log((5+4)/3);
console.log(undefined/5);

function test(a){
	console.log(a/5);
}
test();*/

/*Equality example

var x=4, y=4;
if (x==y) {
	console.log("x=y");
}
x="4";
if (x==y) {
	console.log("string x = y");
}*/

/*Strict equality

var x=4, y=4;
x="4";
if (x===y) {
	console.log("Strict: x equals to y");
}
else{
	console.log("Strict: x not equals y");
}*/

/*All false

if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't execute");
}
else{
	console.log("All False");
}*/

/*All true

if (true && "hello" && 1 && -1 && "false") {
	console.log("All True");
}*/

/*Curly braces placement(next line)

function a()
{
	return;
	{
		name: "Sirin"
	};
}

Curly braces placement(same line)
function b() {
	return {
		name: "Sirin2"
	};
}

console.log(a());
console.log(b());*/

/*For loop summing

var sum=0;
for (var i = 0; i < 10; i++){
	console.log("i= "+i);
	sum+=i;
}
console.log("sum of 0 to 9 is: " +sum);*/