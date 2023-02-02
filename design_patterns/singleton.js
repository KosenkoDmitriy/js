// singleton
// practical usage: shopping cart, player instance, etc.
// declare as literal object or constructor
// methods: 1) global variable 2) singleton inside object

const isEqual = (instance, instance2) => {
// function isEqual(instance, instance2) {
    return instance === instance2
}

export { isEqual }
// module.exports = isEqual;