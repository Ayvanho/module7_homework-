class ElectricDevice {
  constructor(power) {
    this.power = power;
    this.isTurnedOn = false;
  }

  turnOn() {
    this.isTurnedOn = true;
  }

  turnOff() {
    this.isTurnedOn = false;
  }
}

class Lamp extends ElectricDevice {
  constructor(power, bulbType) {
    super(power);
    this.bulbType = bulbType;
  }
}

class Computer extends ElectricDevice {
  constructor(power, brand, model) {
    super(power);
    this.brand = brand;
    this.model = model;
  }
}

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

console.log(`Total power consumption: ${calculateTotalPower([tableLamp, desktopComputer])} watts`); // Total power consumption: 540 watts 
// (40 from the lamp and 500 from the computer, both turned on)