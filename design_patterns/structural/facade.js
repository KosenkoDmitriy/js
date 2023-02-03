/*
Facade
Фасад - скрыть сложную логику за простым фассадом (интерфейсом)
*/

class Conveyor {
}

class ConveyorFacade {
    constructor(car) {
        this.car = car
        this.isReady = true
    }

    assembleCar() {
        // this.car.assembleCarcas()
        return this
    }
}

export { Conveyor, ConveyorFacade }

