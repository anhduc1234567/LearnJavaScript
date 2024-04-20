// phân tách mảng thành các biến
let arr = ["John","Smith"];
let [firstName,surname] = arr;
console.log(firstName);
console.log(surname);
let [f, ,s] = "John Smith".split(' ');
console.log(f);
console.log(s);
// Phân tách mảng cũng có thể được dùng như sau
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(one)
// sử dụng để làm  thuộc tính của đối tượng
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith
// Nhiều mảng phân tách những chỉ có 2 biến
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic","color", "viiiiir"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere
let[name11, name22, ...rest] =  ["Julius", "Caesar", "Consul", "of the Roman Republic","color", "viiiiir"];
// rest là mảng các phần tử còn lại
console.log(rest[0]);
console.log(rest[2])
// Gía trị mặc định:
let[h,k = 'giá trị mặc định'] = []
console.log(h)
console.log(k)
//////////////////////////////////////////
console.log("OBJECT DESTRUCTURING")
//let {var1, var2} = {var1:…, var2:…}
let person = {
    name: 'Nguyễn đức anh',
    age: 20,
    love: true
}
let {name,age,love} = person;
console.log(name);
console.log(age);
console.log(love);
// tên biến phải giống với thuộc tính
// nếu muốn đổi tên
let {name: n,age: ah,love : l} = person;
console.log(n);
console.log(ah);
console.log(l);
// ta cũng có thể set giá trị mặc định như trêb
let {name:duc,...r} = person;
console.log(duc);
console.log(r.love);
// đối với đối tượng phức tạp
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  }
let {
    size: {
        width,height
    },
    items:[cake,donut],
   // extra
}=options
 console.log(width);
 console.log(cake)
 //////////////////
 function showPerson ({
    name,age,love,person="Person infor: "
 }) {
    console.log(person)
    console.log(name),
    console.log(age),
    console.log(love)
 }
showPerson(person)
