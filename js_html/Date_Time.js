let user = {
    name: 'John',
    age: 30
  };

const count = obj => Object.keys(obj).length;
  
console.log( count(user) ); // 2


let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(today);
console.log(date);
console.log(time);
