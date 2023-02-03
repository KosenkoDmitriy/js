/*
Prototype
порождающий паттерн, который
позволяет копировать объекты, не вдаваясь в подробности их реализации
базовая реализация класса, 
используя упрощенный интерфейс мы создаем клоны обектов для дальнейшего  
изменения их структуры и адаптации под выполнение определенных задач
Итог
паттерн, который позволяет создавать копию объекта с минимальными затратами памяти (на основании уже существующей структуры) 
и изменять свойства каждого экземпляра класса под определенные нужды, 
не изменяя базовой структуры
*/

import { Audi } from "./factory_method"

class AudiCar {
    constructor(model, price, color, transmission) {
        this.model = model
        this.price = price
        this.color = color
        this.transmission = transmission
    }
    clone() {
        return new AudiCar(this.model, this.price, this.color, this.transmission)
    }
}
export { AudiCar }