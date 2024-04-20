//Khai báo
//let arr = new Array()
// let arr = []
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length)
fruits.push("Yellow")// thêm vào cuối
console.log(fruits)
fruits.pop() // xóa ở cuối đầu
console.log(fruits)
fruits.shift() // xóa ở đầu
console.log(fruits) 
fruits.unshift("Thêm vào đầu"," có thể thêm dduocj nhiều hơn 1")
console.log(fruits)
// chỉnh length 
fruits.length = 2;
console.log(fruits)
//So, the simplest way to clear the array is: arr.length = 0;.
let colors = new Array('Black','Red','Blue','Yellow');
// ma trận
let col = new Array(colors);
col.length = 0
console.log(colors)

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
//   alert( matrix[1][1] ); // 5, the central element
  let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true
function sumInput() {
    sum = 0;
    while(true) {
        a = +prompt('Nhập số tiếp theo: ',0);
        if (isFinite(a) === false || (a.length == 0) || (a === null)|| a == 0) {
            alert(`Tổng tổng của: ${sum}`)
            break;
        }
        sum += a;
    }
}
// sumInput()

function sumarr(arr) {
    let summ = 0;
    for(i of arr) {
        summ += i;
    }
    return summ
}
// function getMaxSubSum(arr) {
//     let l = arr.length;
//     let max = sumarr(arr);
//     let arr2 = [];
//     for (i = 1; i <= l; i++) {
//         for(j = 0; j < l-i+1; j++) {
//             arr2.length = 0
//              for (r = j ;r < j+i-1;r++ ) {
//                 arr2.push(arr[r])
//              }
//             for (k = j+i-1; k < l; k++ ) {
//                 arr2.push(arr[k]);
//                 let summm= 0;
//                 for(p = 0; p < arr2.length;p++) {
//                     summm += arr2[p];
//                 }     
//                 if (summm > max) {
//                          max = summm;
//                       }
//                 arr2.pop()
//             }
//         }
//      }
//     return max
// }
// console.log(getMaxSubSum([-1,2,3,-9,11]))
function getMaxSubSum2(arr) {
    let l = arr.length;
    let max = 0;
    let arr2 = [];
    for (i = 1; i <= l; i++) {
        for(j = 0; j < l-i+1; j++) {
            arr2.length = 0
            for (r = j ;r < j+i;r++ ) {
                arr2.push(arr[r])
             }
            let summm= 0;
            for(p = 0; p < arr2.length;p++) {
                    summm += arr2[p];
            }     
            if (summm > max ) {
                    max = summm;
                }
        }
     }
    return max
}
console.log(getMaxSubSum2([1,2,3]))