let animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
rabbit.walk();
longEar.walk();
console.log(longEar.jumps);