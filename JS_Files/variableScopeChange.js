var foo = 123;

if (true) {
    (function () {
        var foo = 456;
    })();
}
console.log(foo);

// Can call outer Var's from an inner function
function outerFunction(input) {
    var varInOuterFunction = input;

    function bar() {
        console.log(varInOuterFunction);
    }
    bar();
}
var innerFunction = outerFunction('hello world!');
// Should I be able to call this?
//innerFunction();
