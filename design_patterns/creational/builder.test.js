/*
Builder (structural pattern) - it is a design pattern that can create a complex object step by step without complex constructor with many arguments.
Cтроитель (структурный паттерн) - это паттерн, который может создавать сложные объекты, инициализацию которых проблематично уместить в конструкторе 
Имеет дополниельный слой абстракций - директор, который управляет несколькими строителями
*/

import { CarBuilder } from './builder'

describe('builder (car should be customizable/configurable)', () => {
    it('add autopilot, parktronic, signaling; update engine', () => {
        const car = new CarBuilder()
            .addAutopilot(true)
            .addParktronic(true)
            .addSignaling(true)
            .updateEngine('new engine')
            .build()
        expect(car.isParktronic).toBe(true)
        expect(car.isAutopilot).toBe(true)
        expect(car.isSignaling).toBe(true)
        expect(car.engine).toBe('new engine')
    })
})
