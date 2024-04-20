// Hàm khởi tạo đối tượng
// function User(name,age) {
//     this.name = name;
//     this.age = age;
//     this.SayHi = function() {
//         alert(this.name);
//     }
// }
// let user1 = new User("Hân",12)
// user1['SayHi']()
// alert(user1.age)
////////////////////////////////////////////////////////
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Nhập số a",0);
//         this.b = +prompt("Nhập số b",0);
//     }
//     this.sum = function() {
//         return alert(this.a + this.b)
//     }
//     this.mul = function() {
//         return alert(this.a * this.b)
//     }
// }
// let cal1 = new Calculator();
// cal1.read();
// cal1.sum();
// cal1.mul();
/////////////////////////////////////////////////////////////////
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Add ",0);
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values