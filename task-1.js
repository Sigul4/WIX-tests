/**
Create simple arithmetic operations as chainable methods on Number.
You should be able to create chains of unlimited length like this:

(2).add(5).multiply(3)
The above expression evaluates to be 21.

You need to implement the following methods:

add
subtract
multiply
divide
*/

module.exports = function createChainableNumber() {
    Number.prototype.add = function(e){
        return(Number(this)+Number(e))
    }
    Number.prototype.subtract = function(e){
        return(Number(this)-Number(e))
    }
    Number.prototype.multiply = function(e){
        return(Number(this)*Number(e))
    }
    Number.prototype.divide = function(e){
        return(Number(this)/Number(e))
    }
}
