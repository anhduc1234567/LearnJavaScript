// chuyển đổi đối tượng sang kiểu nguyên thủy
/*
obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
  };
  */
let user = {
    name: "Đức Anh",
    age: 20,
    [Symbol.toPrimitive] (hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `name : "${this.name}"` : this.age;
    }
};
alert(user);
alert(+user);
alert(user+500);
/////////////////////////////////////
//sử dụng toString và valueOf
let user1 = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user1); // toString -> {name: "John"}
  alert(+user1); // valueOf -> 1000
  alert(user1 + 500); // valueOf -> 1500