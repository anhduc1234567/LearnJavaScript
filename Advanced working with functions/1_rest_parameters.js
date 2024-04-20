function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6

// rest para phải ở cuối
// đối tượng argument
function showargu() {
    console.log(arguments[0]);
}
showargu("duc anh")

let arr = [1,2,3,4,5,6]
console.log(Math.max(...arr)) // biết mảng thành list các số;
// sao chép 1 đối tượng:
let obj = {
    name: "duc anh",
    age: "26"
}
let copy_obj = Object.assign({},obj);

copy_obj.address = "Ha noi";
console.log(obj);
console.log(copy_obj);