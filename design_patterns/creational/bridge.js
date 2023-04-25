/* Bridge - creational pattern
порождающий паттерн, который разделяет один или несколько классов
на несколько отдельных иерархий 
(абстракция и реализация)
и позволяет изменять их независимо друг от друга
*/
class Color {
    constructor(color) {
        this.color = color 
    }
    get () {
        return this.color
    }
}

class RedColor extends Color {
    constructor(color='red') {
        super(color)
    }
}

class Model {
    constructor(color) {
        this.color = color
    }
}

class Audi extends Model {
    constructor(color) {
        super(color)
        this.model = 'audi'
    }
    paint() {
        return `color: ${this.color.get()} model: ${this.model}`
    }
}
export { RedColor, Audi }