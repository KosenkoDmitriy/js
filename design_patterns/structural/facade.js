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
}

class ConveyorFacade {
    constructor(car) {
        this.car = car
        this.isReady = true
        this.steps = []
    }

    assembleCar() {
        this.steps += this.car.assembleCarcase()
        this.steps += this.car.addElectricalWire()
        this.steps += this.car.installAutoParts()
        this.steps += this.car.addWheels()
        return this
    }

    getSteps() {
        return this.steps
    }
}

export { Conveyor, ConveyorFacade }

