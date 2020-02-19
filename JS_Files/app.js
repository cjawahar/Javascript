var foo1 = function namedFunction() {
    console.log('foo1');
}
foo1();

var foo2 = function () {
    console.log('foo2');
}
foo2();


function foo() { };
foo.prototype.bar = 123;

var bas = new foo();
var qux = new foo();
// Modifying prototype will change val across all instances of function.
foo.prototype.bar = 456;
console.log(bas.bar);
console.log(qux.bar);