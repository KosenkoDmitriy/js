// singleton
// practical usage: website map,shopping cart, player instance, etc.
// declare as literal object or constructor
// approaches: 1) global variable 2) singleton inside object

const isEqual = (instance, instance2) => {
// function isEqual(instance, instance2) {
    return instance === instance2
}

// first approach
let instance
class CounterWithGlobalVariable { 
    constructor() {
        if (!instance) instance = this
        instance.count = 0
        return instance
    }

    increaseCount() {
        instance.count++
    }

    getCount() {
        return instance.count
    }
}

// second approach without global variable (as alternative of recursive anonymous function)
class Counter { 
    constructor() {
        if (typeof(Counter.instance) === 'object') return Counter.instance
        this.count = 0
        Counter.instance = this
        return this
    }

    increaseCount() {
        this.count++
    }

    getCount() {
        return this.count
    }
}

export { isEqual, CounterWithGlobalVariable, Counter }
// module.exports = isEqual