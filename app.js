const Calculator = require('./libraries/Calculator')
const Operation = require('./utils/Operation')

const calculator = new Calculator()

console.log('sum >>> ', calculator.compute(Operation.prime, 4))