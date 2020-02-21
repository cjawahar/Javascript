// Basic model of a closure with multiple scopes
// let a = 'global';
//   function outer() {
//     let b = 'outer';
//     function inner() {
//       let c = 'inner'
//       console.log(c);   // prints 'inner'
//       console.log(b);   // prints 'outer'
//       console.log(a);   // prints 'global'
//     }
//     console.log(a);     // prints 'global'
//     console.log(b);     // prints 'outer'
//     inner();
//   }
// outer();
// console.log(a);         // prints 'global'

function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
      };
}

let peter = person();
peter(); // prints 'Peter'