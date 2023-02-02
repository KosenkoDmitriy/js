/*
фабричный метод
основная цель - создание класса 
создавать объекты на основании каких-либо входных данных
исходный класс называется супер класс
создавать множество однотипных объектов (с одной структурой, но с разными данными, причем может содержать как свойства, так и методы)
*/

class Audi {
    static createWithColor(color) {
        return new Audi(undefined, undefined, color)
    }

    constructor(model, price, color) {
        this.model = model
        this.price = price
        this.color = color
    }

    getColor() {
        return this.color
    }

    getModel() {
        return this.model
    }

    getPrice() {
        return this.price
    }
}

class AudiFactory {
    create(type) {
        if (type === 'A4') return new Audi(type, 4000000, 'silver')
        if (type === 'A6') return new Audi(type, 5000000, 'gold')
    }
}

export { Audi, AudiFactory }