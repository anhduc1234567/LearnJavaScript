// empty object
let users = new Object(); // "object constructor" syntax
let user = {
    name:"Duc anh",
    age: 30,
    "Address district": "Ha noi"
};  // "object literal" syntax
alert(user.name)
user.isAdmin = true;
delete user.age; //xóa 1 thuộc tính
console.log(user["Address district"])
let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); 
//Thuộc tính được tính toán:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
    // function makeUser(name, age) {
    //     return {
    //       name, // same as name: name
    //       age,  // same as age: age
    //       // ...
    //     };
  }
let duc = makeUser("Duc anh",19);
console.log(duc["name"])
// kiểm tra thuococj tính tồn tại hay không
console.log("abc" in user)
// liệt kê các thuộc tính :
// Math.trunc is a built-in function that removes the decimal part
for (i in user) {
    console.log(`${i} - ${user[i]}`)
}