// một đối tượng không bị xóa nếu như nó nằm trong mảng hoặc
//map
let join = {name:'join'};
let map = new Map();
map.set(join,'value');
join = null;
for (k of map.keys()) {
    console.log(k)
}
console.log(map.get(join))//undefined vì join lúc này = null và đối tượng 
// {name:'join} mới là khóa
// weakMap 
// Khóa PHẢI là đối tượng
let weakMap = new WeakMap();

let obj = {};


weakMap.set(obj, "ok"); // works fine (object key)
console.log(weakMap.get(obj))
// can't use a string as the key
//weakMap.set("test", "Whoops"); // Error, because "test" is not an object
/*WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
nếu đối tượng biến mất -> value đi kèm cũng sẽ mất
*/
/////////////////////////////////////////
let visitedSet = new WeakSet();
// weakset chỉ lưu đối tượng
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
//alert(visitedSet.has(john)); // true

// check if Mary visited?
//alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
 let set = new Array();
 set.push(john);
 set.push(pete);
 set.push(mary);
 for ( k of set){
    console.log(k)
 }
 console.log(set[0])