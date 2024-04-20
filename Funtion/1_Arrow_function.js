// cú pháp:
// let func = (arg1,....) => expression;
// let func = function(arg1, arg2, ..., argN) {
//     return expression;
//   };
let sum = (a,b) => alert(a + b);
sum(4,5)
let a = (100 %2 == 1 ) ? 1 : 2;
alert(a)
prompt("x","y")// (câu hỏi, câu trả lời)
// function fibo(n){
//     if (n<2){
//         return 1;
//     }
//     else {
//         return fibo(n-1) + fibo(n-2);
//     }
// }
// cách 2
let fibo =(n) => {    if (n<2){
    return 1;
}
else {
    return fibo(n-1) + fibo(n-2);
}
};
alert(fibo(9))
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");

// welcome();
