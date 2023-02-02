import { Audi } from './factory_method'

describe('Factory method', () => {
    it('should create audi with different colors', () => {
        const car1 = Audi.createWithColor('black')
        const car2 = Audi.createWithColor('white')
        expect(car1.getColor()).toBe('black')
        expect(car2.getColor()).toBe('white')
    })
    
    it('should create car with different models and prices', () => {
        const car1 = new Audi('A4', 5000000, 'red')
        expect(car1.getModel()).toBe('A4')
        expect(car1.getPrice()).toBe(5000000)
        expect(car1.getColor()).toBe('red')
    })
})