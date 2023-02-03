/*
Decorator - it's a structural design pattern that can extend functionality (will add new properties and methods or will override them) of the already existed object (class instance).

Example: Notifier -> SMS Notifier/Push Notifier/Telegram Notifier

Декоратор - это паттерн проектирования, который позволяет добавлять объектам новые свойства и методы
оборачивать объект в класс декоратора для расширения возможностей объекта

Применение: создание большое количество подклассов
Платформа для создания марок автомобилей со своей комплектацией
Добавление сигнализации к любому автомобилю

Итог: обернуть класс и расширить его функциональность, не прибегая к множественному наследованию
*/

class Car {
    constructor() {
        this.model = 'Car Model'
        this.price = 15000
    }

    getDetails() {
        return `price: ${this.price} model: ${this.model}`
    }
}

class HyundaiSolaris extends Car {
    constructor() {
        super();
        this.model = 'Hyundai Solaris'
        this.price = 20000
    }
}

class KiaRio extends Car {
    constructor() {
        super();
        this.model = 'Kia Rio'
        this.price = 21000
    }
}

class SignalingDecorator {
    constructor(car) {
        this.car = car
        this.car.signaling = true
        this.car.price += 1000
    }

    isSignaling() {
        return this.car.signaling
    }

    getDetails() {
        return `${ this.car.getDetails() } with signaling`
    }
}

export { Car, SignalingDecorator }