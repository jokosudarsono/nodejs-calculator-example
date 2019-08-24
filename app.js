const Calculator = require('./libraries/Calculator')
const Operation = require('./utils/Operation')

const calculator = new Calculator()

console.log('sum >>> ', calculator.compute(Operation.sum, 1, 2))
console.log('multiply >>> ', calculator.compute(Operation.multiply, 1, 2))
console.log('prime >>> ', calculator.compute(Operation.prime, 4))
console.log('fibonacci >>> ', calculator.compute(Operation.fibonacci, 4))