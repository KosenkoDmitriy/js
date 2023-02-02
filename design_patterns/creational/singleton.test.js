// const isEqual = require('./singleton')
import { isEqual, CounterWithGlobalVariable, Counter } from './singleton'

describe('Singleton', () => {
    it('two consts compare', () => {
        const instance = { name: "singleton" }
        const instance2 = { name: "singleton" }
        expect(isEqual(instance, instance2)).toBe(false)
    })

    it('with global variable (two different counters should refer to a global variable and to increase a count on 2)', () => {
        const counter1 = new CounterWithGlobalVariable();
        const counter2 = new CounterWithGlobalVariable();
        counter1.increaseCount();
        counter2.increaseCount();
        expect(counter1.getCount()).toBe(2)
        expect(counter2.getCount()).toBe(2)
    })

    it('two different counters should refer to a global variable and to increase a count on 2', () => {
        const counter1 = new Counter();
        const counter2 = new Counter();
        counter1.increaseCount();
        counter2.increaseCount();
        expect(counter1.getCount()).toBe(2)
        expect(counter2.getCount()).toBe(2)
    })
})
