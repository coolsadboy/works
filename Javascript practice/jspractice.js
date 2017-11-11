


//Треугольник
var grid = '#';
while (grid.length <= 7) {
  console.log(grid);
  grid += '#';
};


//FizzBuzz
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
      console.log('Fizz');
    }
       else if (i % 5 == 0) {
      console.log('Buzz');
    }
    else {console.log(i);
         }
}
   
// Шахматная доска

var result = "\n";
for (var row = 0; row < 8; row++) {
  for (var cell = 0; cell < 8; cell++) {
 result += (row % 2 == cell % 2) ? "#" : " ";
  }
  result += "\n";
}
console.log(result);

//Минимун

function min(x, y) {
  if (x > y) {
    return y;
  } else if (x < y) {
  	return x;
  } else {
    console.log('wrong');
  }
}

console.log(min(0, 10));
console.log(min(0,-10));

//Рекурсия
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(n + 2);
  } else return isEven(n - 2);
}


console.log(isEven(50));
//  true
console.log(isEven(75));
//  false
console.log(isEven(-1));