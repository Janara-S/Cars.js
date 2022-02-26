class Cars {
    constructor(marka, yaer, dvigotel, color) {
        this.marka = marka;
        this.yaer = yaer;
        this.dvigotel = dvigotel;
        this.color = color;
    }

    showCars() {
        return `
            Марка: ${this.marka}
            Год выпуска: ${this.yaer}
            Объем двигателя: ${this.dvigotel}
            Цвет машины: ${this.color}
        `
    }
}


class ElectroCars extends Cars {
    constructor(marka, yaer, acumulator, color) {
        super(marka, yaer);
        this.acumulator = acumulator;
        this.color = color;
    }

    promote() {
        return ` Электромобиль — это машины будушего...`
    }
    showCars() {
        return `
            Марка: ${this.marka}
            Год выпуска: ${this.yaer}
            Цвет машины: ${this.color}
            Объем акумулятора: ${this.acumulator}
        ${this.promote()}
        `
    }
}

const bmv = new Car('BMV', '2020', "400 ls", "red");
const spaceX = new ElectroCar('spaceX', '2022', "8000 ", "white");

console.log(bmv.showCar())
console.log(spaceX.showCar())