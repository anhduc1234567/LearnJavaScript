/*
sử dụng Object.keys(obj) thay vì obj.keys()
sử dụng Object.values(obj) thay vì obj.values()
sử dụng Object.entries(obj) thay vì obj.entries()

Objects.keys(obj) trả về mảng thực thay vì iterator
*/
let obj = {
    name: 'duc anh',
    age:20,
    love :true,
    address:"ha noi"
}
console.log(Object.keys(obj))
//console.log(typeof(obj))
for (let  k of Object.keys(obj)) {
    console.log(k)
}
function sumSalaries(obj) {
    let sum = 0;
    for (let i of Object.values(obj)) {
        sum += i;
    }
    return sum
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650