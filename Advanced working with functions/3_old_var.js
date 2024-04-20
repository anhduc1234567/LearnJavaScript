// sự khác biệt Var và Let
if (true) {
    var test_v = true; // use "var" instead of "let"
  }
  
  console.log(test_v); // true, the variable lives after if

//   if (true) {
//     let test_l = true; // use "let" instead of "var"
//   }
  
//   console.log(test_l); // gây ra lỗi cú pháp
// nếu biến cấp hàm thì var không hoạt động được
function test_var() {
    var test_var_fun = true;
}
// console.log(test_var_fun) // lỗi
// Var có thể khai bao lặp lại
var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John
// Var có thể được sử dụng trước khi khai báo
function sayHi() {
    phrase = "Hello Var có thể được sử dụng trước khi khai báo ";
  
    console.log(phrase);
  
    var phrase;
  }
sayHi();

(function() {

    var message = "Hello";
  
    alert(message); // Hello
  
  })();