/**
 Given an array of integers, find an index N where the sum of the integers to the left of N is equal to
 the sum of the integers to the right of N.
 If there is no such index, return -1.

 Example:
 for arr [1,2,0,3,0,3] N === 3, because 1 + 2 + 0 === 0 + 3
 */

module.exports = function findEqualPartsIndex(arr) {
    
    let finalIndex  = 0
    let pastLength      = 0
    let futureLength    = arr.length

    for(let elem in arr){
        let pastLengthSum   = 0
        let futureLengthSum = 0
        
        for(let elemOfPastLength of arr.slice(0,pastLength)){
            pastLengthSum += elemOfPastLength
        }
        for(let elemOfFutureLength of arr.slice(pastLength+1,arr.length)){
            futureLengthSum += elemOfFutureLength
        }
        pastLengthSum === futureLengthSum ? finalIndex = elem : pastLength++, futureLength--
        if(pastLengthSum === futureLengthSum) break 
    }
    return Number(finalIndex) ?Number(finalIndex) : -1
}

