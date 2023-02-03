/*
Facade
Фасад - скрыть сложную логику за простым фассадом (интерфейсом)
*/

class Conveyor {
    assembleCarcase() {
        return 'carcase ready '
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
        return this
    }

    getSteps() {
        return this.steps
    }
}

export { Conveyor, ConveyorFacade }

