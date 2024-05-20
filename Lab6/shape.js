const pi = Math.PI 
function getAreaOfCircle(radius) {
  return pi * radius ** 2;
}

console.log(getAreaOfCircle(11));


function getCircumferenceOfCircle (radius){
  return ((2 * pi)*radius);
}

console.log(getCircumferenceOfCircle(11));



function getAreaOfSquare (side){
  return (side * 5);
}
console.log(getAreaOfSquare(4));


function getAreaOfTriangle (base,height){
  return(base * height);
}

console.log(getAreaOfSquare(11,12));

