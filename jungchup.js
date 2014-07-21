var add = function(x,y) {
  console.log(x+y);  
  return x + y;
}

var mul = function(x, y) {
  console.log(x*y);
  return x * y;
}

function execOperation(f) {
  return function(x) {
    return function(y) {
      f(x, y);
    }
  }
}

execOperation(add)(3)(5);
execOperation(mul)(3)(5);