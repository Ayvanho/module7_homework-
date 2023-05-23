function printOwnProps(obj) {
for (let prop in obj) {
if (obj.hasOwnProperty(prop)) {
console.log(prop + ": " + obj[prop]);
}
}
}

// Пример использования:
let car = {
brand: "Ford",
model: "Mustang",
year: 1969
};

printOwnProps(car);
// Результат:
// brand: Ford
// model: Mustang
// year: 1969

