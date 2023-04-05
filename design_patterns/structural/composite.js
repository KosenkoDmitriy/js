/* 
Компоновщик - это структурный паттерн проектирования, который
группирует множество объектов в древовидную структуру 
и позволяет работать как с одним объектом
листья ветки
единый интерфейс вызова
*/

class Item {
    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setPrice(price) {
        this.price = price
    }
    getPrice() {
        return this.price || 0
    }
}

class Body extends Item {
    constructor() {
        super()
        this.setName('Body')
        this.setPrice(1000000)
    }
}

class Parts extends Item {
    constructor() {
        super()
        this.setName('Parts')
        this.setPrice(1000000)
    }
}

class Composite extends Item {
    constructor() {
        super()
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    getPrice() {
        return this.items.map(item => item.getPrice())
            .reduce((prev, cur) => prev + cur)
    }
}

export { Item, Composite }