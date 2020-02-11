function calcArea(a, b, c)  {

  var s = (a + b + c) / 2;

  var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

  return area;

}

function findSides(){

do{
var sideA = prompt('Please enter he size of Side A:'); //Get Side A
var sideB = prompt('Please enter he size of Side B:'); //Get side B
var sideC = prompt('Please enter he size of Side C:'); //Get side C
} while (sideA == null || sideB == null || sideC == null)

  var sides = new Array(3);
  sides[0] = sideA;
  sides[1] = sideB;
  sides[2] = sideC;

  return sides;

}

function findSideA(repeat){

let error = "";

do{

if(repeat == true)  {
  error = "Must be a valid number above 0 \n";
}
var sideA = prompt(error + 'Please enter the size of Side A:'); //Get Side A
repeat = true;

} while (sideA == null || sideA == "" || sideA <= 0 || isNaN(sideA))


return Number(sideA);

}

function findSideB(repeat){

let error = "";

do{

if(repeat == true)  {
  error = "Must be a valid number above 0 \n";
}
var sideB = prompt(error + 'Please enter the size of Side B:'); //Get Side A
repeat = true;

} while (sideB == null || sideB == "" || sideB <= 0|| isNaN(sideA))


return Number(sideB);

}

function findSideC(repeat){

let error = "";

do{

if(repeat == true)  {
  error = "Must be a valid number above 0\n";
}
var sideC = prompt(error + 'Please enter the size of Side C:'); //Get Side A
repeat = true;

} while (sideC == null || sideC == "" || sideC <= 0|| isNaN(sideA))


return Number(sideC);

}

const REPEAT = false;
var sideA = findSideA(REPEAT);
var sideB = findSideB(REPEAT);
var sideC = findSideC(REPEAT);
var sideArea = Number(calcArea(sideA, sideB, sideC));

var node1 = document.createElement('h1');

if(isNaN(sideArea)) {
  var node1Text = document.createTextNode('The area of the triangle of size ' + sideA + ', ' + sideB + ', '
   + sideC + ' cannot be calculated. Sorry');
} else {
  var node1Text = document.createTextNode('The area of the triangle of size ' + sideA + ', ' + sideB + ', '
   + sideC + ', ' + ' is: ' + Number(sideArea));
}

node1.appendChild(node1Text);
var node1Pos = document.getElementsByTagName('div')[0];
node1Pos.appendChild(node1);
