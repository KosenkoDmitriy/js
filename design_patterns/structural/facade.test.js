import {ConveyorFacade, Conveyor } from './facade'

describe('Facade', () => {
    it('Conveyor should assemble car', () => {
        const conveyor = new ConveyorFacade(new Conveyor())
        const car = conveyor.assembleCar()
        expect(car.getSteps()).toContain('carcase is ready')
        expect(car.getSteps()).toContain('auto parts are ready')
        expect(car.getSteps()).toContain('electrical wiring is ready')
        expect(car.getSteps()).toContain('wheels are ready')
        expect(car.changeEngine('v8')).toContain('v8')
        expect(car.isReady).toBe(true)
    })
})