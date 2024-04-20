// có thể viết 1 tỷ vd:
let a_billion = 1_000_000_000;
let billion = 1e9;
//e tương ứng với số 0
// 1 * 1000000000
// với số nhở:
let mcs = 1e-6; // five zeroes to the left from 1
//0.0000001 = 1/100000
// toString(base) -> trả vêf 1 chuỗi biểu diễn các số trong hệ cơ sở
let num = 255;
console.log(num.toString(16)) //ff
console.log(num.toString(2)) //11111111

let a = 123456;
console.log(a.toString(36))
// Làm tròn
/*
Math.floor :làm tròn xuống
Math.ceil :làm tròn lên
Math.round :làm tròn gần nhất
Math.trunc : xóa bot phần thập phân
*/
// Làm tròn n số sau dấu thập phân:
let b = 1.4321;
console.log(Math.floor(b*1000)/1000) //1.4321 *1000=1432.1->1432->1.432
// toFixed(n)
///////////////////////////
// isNaN(value) chuyển đối số sang number và kiểm tra xem có NaN không
// isFinite(value) 
// chuyển đổi đối số thành 1 số thông thường
// trả về true nếu là số thông thường
alert( isFinite(+prompt("Enter a number", '')) )
//chuyển sổ string sang kiểu số: +"1000" +"1000px"
// trong trường hợp 1000px, hoặc 100$
// sử dụng parseInt('100px') ở parseFLoat('12.5em')
// dừng lại trước ký tự không phải số


function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
      } while ( !isFinite(num) );
    
      if (num === null || num === '') return null;
    
      return +num;
}
function random(min, max) { // random min-max
  return min + Math.random() * (max - min);
}



