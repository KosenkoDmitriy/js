import { audiAbstractFactory } from "./abstract_factory";

describe('Audi Abstract Factory', () => {
    it('should create a sport car', () => {
        const produce = audiAbstractFactory('sport') // sport car factory
        const sportCar = produce()
        expect(sportCar.getDetails()).toContain('sport car')
    })
    it('should create a family car', () => {
        const produce = audiAbstractFactory('family')
        const familyCar = produce()
        expect(familyCar.getDetails()).toContain('family car')
    })
})