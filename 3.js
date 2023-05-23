function createEmptyObject() {
return Object.create(null);
}

// Пример использования:
const myObject = createEmptyObject();
console.log(myObject); // выводит {} - пустой объект без прототипа.