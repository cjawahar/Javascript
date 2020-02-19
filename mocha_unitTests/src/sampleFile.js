let user = {
    name: "John",
    age: 30,
    "likes birds": true,  // multiword property name must be quoted
    "likes dogs": "Buster"
  };

console.log(user["likes birds"]);
console.log(user["likes dogs"]);
console.log(JSON.stringify(user));
delete user.age;
console.log(JSON.stringify(user));

user.age = 30;

for (key in user) {
    console.log(key);
    console.log(user[key]);
}
// Another way to copy without for loop
// Use lodash _.cloneDeep(obj) for objects within another object
let clone = Object.assign({}, user);