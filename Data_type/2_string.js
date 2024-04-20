// sử dụng dâu ngoặc ngược cho kép string trên nhiều dòng
let a = `
nguyen
duc a
anh
    `;
/*
\n	New line
\r	In Windows text files a combination of two characters 
\r\n represents a new break, while on non-Windows OS it’s just \n. 
That’s for historical reasons, most Windows software also understands \n.
\', \", \`	Quotes
\\	Backslash
\t	Tab
\b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, 
coming from old times, not used nowadays (you can forget them right now).
*/

console.log(a)
let string = "i am duc anh and 20 year old";
console.log(string.length)
console.log(string[3])
console.log(string.at(-5))
console.log(string.toUpperCase())
// tìm kiếm chuỗi // trả về -1 nếu chuỗi không tìm thấy
console.log(string.indexOf('am'))
// tham số thứ 2 là vị trí bắt đầu tìm 
console.log(string.indexOf('a',string.indexOf('a')+1));
// kiểm tra xem 1 string con có tồn tại hay không
console.log(string.includes('duc'))
console.log(string.startsWith('i am du'))// true
// lấy string con
console.log(string.slice(0,8))// không bao gồm vị trí 8
console.log(string.slice(3))// bắt đầu từ vị trí 3

console.log(string.substring(2,5)) // gần giống với slice
console.log(string.substring(5,2)) 
console.log(string.substr(2,5))// số thứ tự bắt đầu, độ dài
// so sánh chữ cái (chữ thường luôn lớn hơn in hoa)
console.log('x'.codePointAt(0));// xem code của ký tự
let str = '';
for(i=65; i<= 220; i++) {
    str += String.fromCharCode(i);
}
console.log(str)
function ucFirst(str) {
    return str[0].toUpperCase() + str.substring(1,str.length);
}
console.log(ucFirst('jon'))
function truncate(str,max) {
    if (str.length < max ) {
        return str;
    }
    return str.substring(0,max-1) + '...';
}
console.log(truncate("What I'd like to tell on this topic is:",20))