let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    address: {
        city: "Hà nÔị",
        district: "Chuong My"
    },
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);
// JSON áp dụng cho hầu hết các kiểu dữ liệu
/*
JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
ngoại trừ các kiểu như hàm, symbol undefined
let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)
*/ 
// công thức mở rộng
//let json = JSON.stringify(value[, replacer, space])
//replacer mảng các thuộc tính cần mã hóa
    spouse: null
    spouse: null
    let json2 =JSON.stringify(student,["name","address","age","isAdmin","courses","spouse"],2)
    console.log(json2)// các thuộc tính city, district không được encode
// toJSON cho 1 đối tượng 

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(json2);

console.log( user ); // 1
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(meetup.date.getDate())