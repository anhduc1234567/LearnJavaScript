/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
// map chấp nhận bất kỳ kiểu dữ liệu nào làm key
*/
let map = new Map();
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');
console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));
// lấy key:
for (let keys of map.keys()) {
    console.log(keys);
}
// lấy values
for(let value of map.values()) {
    console.log(value);
}
// lấy cả cặp key- value 
for (let entry of map.entries()) {
    console.log(entry)
}
// tạo map từ đối tượng
let user = {
    name: "Đức Anh",
    age: 20
}
let map_user = new Map(Object.entries(user));
for(let e of map_user) {
    console.log(e)
}
// ngược lại tạo đối tượng từ Map:
let obj = Object.fromEntries(map.entries());
console.log(obj)
///////////////////////////////////////////////////////
/*
new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

*/
let color = new Set();
color.add('yellow');
color.add('green');
color.add('red')
color.add("yellow");
for(i of color){
    console.log(i)
}

function aclean(arr) {
    let map = new Map() ;
    for (let word of arr) {
        let key = word.toLowerCase().split('').sort().join('');
        map.set(key,word);
    }
    return Array.from(map.values());
}
console.log(aclean( ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))
