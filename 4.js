function ElectricDevice(power) {
this.power = power;
this.isTurnedOn = false;
}

ElectricDevice.prototype.turnOn = function () {
this.isTurnedOn = true;
};

ElectricDevice.prototype.turnOff = function () {
this.isTurnedOn = false;
};

function Lamp(power, bulbType) {
ElectricDevice.call(this, power);
this.bulbType = bulbType;
}

Lamp.prototype = Object.create(ElectricDevice.prototype);
Lamp.prototype.constructor = Lamp;

function Computer(power, brand, model) {
ElectricDevice.call(this, power);
this.brand = brand;
this.model = model;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

const tableLamp = new Lamp(40, 'LED');
const desktopComputer = new Computer(500, 'Asus', 'ROG');
tableLamp.turnOn();
desktopComputer.turnOn();

function calculateTotalPower(devices) {
let totalPower = 0;
devices.forEach((device) => {
if (device.isTurnedOn) {
totalPower += device.power;
}
});
return totalPower;
}

console.log(Total power consumption: ${calculateTotalPower([tableLamp, desktopComputer])} watts); // Total power consumption: 540 watts
// (40 from the lamp and 500 from the computer, both turned on)

