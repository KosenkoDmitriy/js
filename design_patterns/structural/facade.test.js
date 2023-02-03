import {ConveyorFacade, Conveyor } from './facade'

describe('Facade', () => {
    it('Conveyor should assemble car', () => {
        const conveyor = new ConveyorFacade(new Conveyor())
        const car = conveyor.assembleCar()
        expect(car.getSteps()).toContain('carcase ready')
        expect(car.isReady).toBe(true)
    })
})