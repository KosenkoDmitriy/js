import * as decorator from './decorator'

describe('decorator', () => {
    it('add signaling to each car', () => {
        let car = new decorator.Car()
        let car2 = new decorator.Car()
        car = new decorator.SignalingDecorator(car)
        car2 = new decorator.SignalingDecorator(car2)
        
        expect(car.getDetails()).toContain('signaling')
        expect(car2.getDetails()).toContain('signaling')

        expect(car.car.signaling).toBeTruthy()
        expect(car.isSignaling).toBeTruthy()
        
        expect(car2.car.signaling).toBeTruthy()
        expect(car2.isSignaling).toBeTruthy()
    })
})