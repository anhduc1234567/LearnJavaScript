let id = Symbol("iddd")

let user = {
    name: "jone",
    //[id]:123
};
user[id] = 1

for(key in user) {
    console.log(key)
}
alert(user[id])
alert(id.toString())
alert(id.description)
// id có thể sử dụng như key
let copyid = Symbol.for("id")
let copyid2 = Symbol.for("id")
// tạo key cho sumbol, các symbol có cùng key sẽ giống nhau
alert(copyid==copyid2) // true
alert(copyid==id) // false
alert(Symbol.keyFor(copyid))

