/////////////////////////////////////////////////////////////
// these objects do the same
//
//
// user = {
//     sayHi: function() {
//       alert("Hello");
//     }
// };
/////////////////////////////////////////////////////
// let user = {
    
// };
// user.sayHi = function() {
//     alert("hello!");
// }
// user.sayHi()
//////////////////////////////////////////////////
//   // method shorthand looks better, right?
//   user = {
//     sayHi() { // same as "sayHi: function(){...}"
//       alert("Hello");
//     }
//   };
///////////////////////////////////////////
// let user = {name: "john"};
// let admin = {
//     name: "Admin"
// };
// function sayHi() {
//     alert(this.name)
// }
// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();
// admin['f'](); 
////////////////////////////////////////
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );