// leetcode /problems/two-sum/
const twoSum = function(nums, target) {
    // Runtime 54 ms Memory 43.2 MB
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let targetNum = target - nums[i];
        let searchNum = map.get(targetNum);
        if( searchNum !== undefined){
            return [searchNum,i];
        }
        map.set(nums[i], i);
    }
    return []

    // Runtime 192 ms Memory 42.3 MB
    for (let i = 0; i < nums.length; i++) {
        const searchNumber = target - nums[i];
        const indexSearch = nums.indexOf(searchNumber);
        if(indexSearch >= 0 && i !== indexSearch) {
            return (i < indexSearch) ? [i, indexSearch] : [indexSearch, i]
        }
    }
    return []

    // Runtime: 86 ms (after submit solution - 279 ms ? ) Memory 42.6 MB
    // let indexesOfTwoSum = new Array()
    // let isBreak = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (((nums[i] + nums[j]) === target) && (j !== i)) {
                // console.log(nums, target, 'ok1')
                return [i, j]
                // return (j < i) ? [j, i] : [i, j]
                // indexesOfTwoSum = (j < i) ? [j, i] : [i, j]
                // isBreak = true
            }
            console.log(nums, target, i,j)
            // if (isBreak) break
        }
        // if (isBreak) break
    }
    return []
    // return indexesOfTwoSum
    
    /*
    Test Suites: 1 passed, 1 total
    Tests:       5 passed, 5 total
    Snapshots:   0 total
    Time:        19.426 s
    Ran all test suites matching /algs\//i.
    Done in 37.60s.
    */

    let indexesOfTwoSum = new Array()
    let isBreak = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (((nums[i] + nums[j]) === target) && (j !== i)) {
                indexesOfTwoSum = (j < i) ? [j, i] : [i, j]
                isBreak = true
            }
            if (isBreak) break
        }
        if (isBreak) break
    }
    return indexesOfTwoSum

    // runtime: 93 ms
    // let index = 0
    // let indexesOfTwoSum = []
    // while(index < nums.length) {
    //     if (index > 0) {
    //         let current_value = nums[index]
    //         let prev_value = nums[index-1]
    //         if ((current_value + prev_value) === target) {
    //             indexesOfTwoSum = [index-1, index] 
    //             break
    //         }
    //     }
    //     index++
    // }
    // return indexesOfTwoSum


    // return nums.find((value, index) = {
    //     if (index > 0) {
    //         let prev_value = nums[index-1]
    //         prev_value = nums[index]
    //         if (current_value + prev_value === target) {
    //             return [index-1, index]
    //             break;
    //         }
    //     }
    // })


    // return nums.reduce((prev, current) => {
    //     if ((prev + current) === target) {
    //         const prev_index = Object.keys(nums).find(key => nums[key] === prev)
    //         const cur_index = Object.keys(nums).find(key => nums[key] === current)
    //         console.log([Number(prev_index), Number(cur_index)], [Number(prev_index), Number(cur_index)], prev, current, target, [prev_index, cur_index])
    //         // return [prev_index, cur_index]
    //         return [Number(prev_index), Number(cur_index)]
    //     } else {
    //         return Array.isArray(prev) ? prev : []
    //     }
    // })

    // for (let prev_value in nums)
    //     for(let cur_value in nums) {
    //         if (prev_value + cur_value === target)
    //         return [prev_index, cur_index]
    //     }

    // nums.forEach((prev_value, prev_index) => {
    //     nums.forEach((cur_value, cur_index) => {
    //         if (prev_value + cur_value === target) {
    //             return [prev_index, cur_index]
    //         }
    //     })
    // });
    
};

export { twoSum }