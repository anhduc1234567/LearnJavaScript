let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2; // vì hàm sẽ chọn biết x bên trong
}

func();

function sum(a) {

    return function(b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  
  }
  
  alert( sum(1)(2) ); // 3
  alert( sum(5)(-1) ); // 4
////////////////
  function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
function byField(str) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // create a shooter function,
        alert( i ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.
  // vì không có biến cục bộ i bên trong vòng while
  