// biến user chỉ lưu địa chỉ tới tham chiếu đối tượng
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); //

let user2 = {
    name: "John",
    age: 30
};
  
let clone = {}; // the new empty object
  
  // let's copy all user properties into it
for (let key in user2) {
    clone[key] = user2[key];
 }
  
  // now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
  
alert( user2.name ); // still John in the original object
  //sử dụng Object.assign(dest, ...sources)
  /*
  The first argument dest is a target object.
  Further arguments is a list of source objects.
  let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
*/
let clone2 = Object.assign({},user2); // copy clone  2 với thuộc tính giống user
console.log(clone2.name);
console.log(clone2.age);
user2.name = 'Hân';
console.log(user2.name);
// sử dụng structuredClone(object) để tạo 1 đối tượng clone phức hợp
let user3 = {
    name: "Ducanh",
    age: 19,
    size: {
        height: 165,
        weight: 50
    }
};
let clone3 = structuredClone(user3);
let clone4 = Object.assign({},user3);
console.log(user3.size === clone3.size) //false

console.log(user3.size === clone4.size) //true
