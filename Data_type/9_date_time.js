// khởi tạo Date trả về ngyaj hiện tại\
let now = new Date();
console.log(now)
// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
// 1 số nguyên biểu diễn khoảng cách = miliseconds = 1s *1000
//bắt đầu từ 1970
console.log( Jan01_1970 );
let jan02_1970 = new Date(24 * 60 * 60 * 1000)
console.log(jan02_1970)
// chuyển ngược lại thành timestamp
console.log(jan02_1970.getTime())
// tạo date từ string
let date = new Date("2017-10-26");
console.log(date);
// tạo từ tham số
//new Date(year, month, date, hours, minutes, seconds, ms)
let date12 =new Date(2024,0,12,8,26,0,0);
console.log(date12)
/////////// truy
// truy cập từng thnahf phần
console.log(date12.getFullYear())// năm
console.log(date12.getMonth()) // tháng 0 là tháng 1
console.log(date12.getDay()) // trả về ngày trong tuần 
console.log(date12.getDate())
// 0(sunday) -> 6(saturday)

// thêm UTC vào sau get để trả về thời gian theo múi giờ +0;
console.log(date12.getHours())
console.log(date12.getUTCHours())
console.log(date12.getTime()) // trả về timestamp
//
//getTimezoneOffset()
//Returns the difference between UTC and the local time zone, in minutes:
/*
The following methods allow to set date/time components:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/
date12.setHours(21);
console.log(date12)
///////////////////////////////////
// khi 2 đối tượng date trừ cho nhau  = timestamp trừ đi nhau
//

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i *i;
}

let end = new Date(); // end measuring time

console.log( `The loop took ${end - start} ms` );
// ví dụ đo thời gian chạy 2 hàm 
function diffSubtract(d1,d2) {
    return d1 - d2;
}
function diffGetTime(d1,d2) {
    return d1.getTime() - d2.getTime();
}
function bench(f) {// hàm đo thời gian chạy của 1 hàm
    let start = Date.now();
    for(let i = 0; i < 100000; i++) {
        f(date12,jan02_1970);
    }
    return Date.now() - start;
}
console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');
/////////////////////////////////
// Date.parse(str)
// format YYYY-MM-DDTHH:mm:ss.sssZ
// 1 chữ Z là UTC+0
let ms = Date.parse('2024-01-12T22:10:00.00')
console.log(ms)

console.log(new Date(ms))

function getSecondsToTomorrow() {
    let date = new Date;
    let tomorrow = new Date(date.getFullYear(),date.getMonth(),
                        date.getDate() + 1,0,0,0,0);
    return (tomorrow - date)/1000
}
console.log(getSecondsToTomorrow())
////////
function formatDate(date) {
    let now = new Date();
    let dif = now - date;
    if (Math.round(dif / 1000) < 1) {
        return "right now"
    }
    else if (Math.round(dif/1000) < 60) {
        return `${Math.round(dif / 1000)} sec.ago`;
    }
    else if ((Math.round((dif/1000)/3600)) < 1) {
        return `${Math.round((dif / 1000)/60)} min.ago`;
    }
    else {
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
}
console.log( formatDate(new Date(new Date - 1)))
console.log( formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log( formatDate(new Date(new Date - 86400 * 1000)) )