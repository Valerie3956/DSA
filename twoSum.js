/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let solution = []
    
    while (solution.length === 0){
    
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target && i !== j){
                solution.push(i, j)
            }
        }
    }
    
    }
    return solution.slice(0, 2)
}

    //took 11 minutes 12 sec, blocker when I couldn't remember the slice method. Had to google it