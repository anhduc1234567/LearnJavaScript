// đối tượng có thể lặp
let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]: function() {
      this.current = this.from;
      return this;
    },
  
    next : function() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  //for (let num of range) {
    //alert(num); // 1, then 2, 3, 4, 5
  //}
  let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}
let string = "Nguyen duc anh";
let i = string[Symbol.iterator]();
while(true) {
    let re = i.next();
    if (re.done) {
        console.log(re.value);
        break;
    }
    else {
        console.log(re.value);
    }
}
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // World (method works)
  let nums = Array.from(string);