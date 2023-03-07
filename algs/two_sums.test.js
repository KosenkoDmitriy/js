import { twoSum } from './two_sums'

describe('should return indexes of two sum values', () => {
    describe('success', () => {
        it('first and second indexes', () => {
            expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
            // expect(twoSum([7,2,11,15], 9)).toEqual([0,1])
        })

        it('before last and last indexes', () => {
            expect(twoSum([3,2,4], 6)).toEqual([1,2])
            // expect(twoSum([3,4,2], 6)).toEqual([1,2])
        })

        it('two items in the array', () => {
            expect(twoSum([3,3], 6)).toEqual([0,1])
        })

        it('first and last indexes', () => {
            expect(twoSum([2,3,4], 6)).toEqual([0,2])
            // expect(twoSum([4,3,2], 6)).toEqual([0,2])
        })
    })
    describe('fail', () => {
        it('should return an empty dict [] (when two sum did not found)', () => {
            expect(twoSum([2,3,5], 6)).toEqual([])
            // expect(twoSum([5,3,2], 6)).toEqual([])
        })
    })
})