import { AudiCar } from './prototype'

describe('Prototype ', () => {
    it('should create the car clone and change color', () => {
        const prototypeCar = new AudiCar('A6', 5000000, 'white', 'automatic')
        const customCar1 = prototypeCar.clone()
        customCar1.color = 'black'
        expect(customCar1.color).toBe('black')
    })
})