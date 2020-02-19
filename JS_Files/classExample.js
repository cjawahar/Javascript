function someClass() {
    //Properties go here
    this.someProperty = 'some initial value';
}
//Member functions go here -- prototype functions won't take additional memory.
someClass.prototype.changeProperty = function () {
    // Do something here
    this.someProperty = 'modified value';
}

//Creation
var instance = new someClass();

//Usage
console.log(instance.someProperty);
instance.changeProperty();
console.log(instance.someProperty);