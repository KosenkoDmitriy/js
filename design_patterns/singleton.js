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
        instance.count += 1
    }

    getCount() {
        return instance.count
    }
}

export { isEqual, CounterWithGlobalVariable}
// module.exports = isEqual