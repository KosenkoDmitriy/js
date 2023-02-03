/*
Facade
Фасад - скрыть сложную логику за простым фассадом (интерфейсом)
*/

class Conveyor {
    assembleCarcase() {
        return 'carcase is ready '
    }

    addWheels() {
        return 'wheels are ready'
    }
    
    addElectricalWire() {
        return 'electrical wiring is ready'
    }

    installAutoParts() {
        return 'auto parts are ready'
    }

    changeColor(color) {
        return `Color changed to ${color}`
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car
        this.isReady = false
    }

    assembleCar() {
        this.steps += this.car.assembleCarcase()
        this.steps += this.car.addElectricalWire()
        this.steps += this.car.installAutoParts()
        this.steps += this.car.addWheels()
        this.steps += this.car.changeColor()
        this.isReady = true
        return this
    }

    getSteps() {
        return this.steps
    }
}

export { Conveyor, ConveyorFacade }

