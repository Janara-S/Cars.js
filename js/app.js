class Restauran {
    constructor(name, cusineType) {
        this.name = name;
        this.cusineType = cusineType;
        this.client = 0
    }

    showInfo() {
        return `${this.name} is a restauran of ${this.cusineType} meal.`;
    }

    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();
        if (currentDay === 6 || currentDay === 0) {
            return `${this.name}  is Closed!!!`
        } else {
            if (currentHour > 9 && currentHour < 22) {
                return `${this.name} is Open!`
            } else {
                return `${this.name} is Closed!`
            }
        }
    }

    serv() {
        this.client++;
    }
    setServ(n) {
        this.client += n;
    }
    totalServe() {
        return `Посетили ресторан ${this.client} клиентов`;
    }
}

const plov = new Restauran('plov', 'kyrgyz');
const almaz = new Restauran('Almaz', 'kyrgyz');

console.log(plov.showInfo())
console.log(almaz.showInfo())
console.log(almaz.isOpen())
almaz.serv()
almaz.serv()
almaz.serv()
almaz.setServ(20)
almaz.setServ(8)
almaz.setServ(11)
console.log(almaz.totalServe())