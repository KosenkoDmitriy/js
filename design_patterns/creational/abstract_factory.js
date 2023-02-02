/*
Абстрактная фабрика (абстракция для фабричного метода и фабрики)
- это паттерн, который создает интерфейс, группирующий другие фабрики, которые логически связаны друг с другом
*/

function audiAbstractFactory(type) {
    return (type === 'sport') ? sportCarFactory : familyCarFactory
}

function sportCarFactory() {
    return new SportCar()
}

function familyCarFactory() {
    return new FamilyCar()
}

class SportCar {
    getDetails() {
        return 'sport car'
    }
}

class FamilyCar {
    getDetails() {
        return 'family car'
    }
}

export { audiAbstractFactory }