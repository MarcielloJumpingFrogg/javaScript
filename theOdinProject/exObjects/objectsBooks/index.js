function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let car = new Car('Honda');
console.log(car.getBrand());

var bmw = new Car('BMW');
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined