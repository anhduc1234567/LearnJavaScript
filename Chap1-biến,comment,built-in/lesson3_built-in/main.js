// Built-in là hàm đã đc built sẵn
// 1.Alert
// 2. Console\
var fullName = 'ducanh';
console.log(fullName) 
console.error(fullName) 
console.warn(fullName) 
// 3. Confirm
confirm('Bạn có yêu tôi không');
// 4.Prompt
prompt('NHập tên của cậu')
//5. Set time out
setTimeout(function() {
 alert('Thong bao')
},2000 ) // cho 1 đoạn code chạy sau 1 khoảng tg //milis
//6. Set interval
setInterval(function() {
    console.log('yeu cau' + Math.random())
},1000) // chạy liên tục 1 đoạn code sau