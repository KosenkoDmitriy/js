
class Car {
}

class CarBuilder {
    constructor() {
        this.car = new Car()
    }

    addAutopilot(isAutopilot = false) {
        this.car.isAutopilot = isAutopilot
        return this
    }

    addParktronic(isParktronic = false) {
        this.car.isParktronic = isParktronic
        return this
    }
    
    addSignaling(isSignaling = false) {
        this.car.isSignaling = isSignaling
        return this
    }

    updateEngine(engine = 'default engine') {
        this.car.engine = engine
        return this
    }

    build() {
        return this.car
    }
}

export { CarBuilder }