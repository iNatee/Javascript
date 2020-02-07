
var sideA = 5;
var sideB = 6;
var sideC = 7;

function calcArea(a, b, c)  {

  var s = (a + b + c) / 2;

  var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

  return area;

}
console.log(calcArea(sideA, sideB, sideC))
