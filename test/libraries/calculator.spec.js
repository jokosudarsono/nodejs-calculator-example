const assert = require('assert')
const Calculator = require('../../libraries/Calculator')
const Operation = require('../../utils/Operation')

const calculator = new Calculator()

describe('Calculator library', function () {
  it('should return sub of X and Y', function () {
    let sum = calculator.compute(Operation.sum, 1, 2)
    assert.equal(sum, 3)
  })

  it('should return multiply of X and Y', function () {
    let mul = calculator.compute(Operation.multiply, 1, 2)
    assert.equal(mul, 2)
  })

  it('should return first n number of prime', function () {
    let prime = calculator.compute(Operation.prime, 4)
    assert.deepEqual(prime, [2, 3, 5, 7])
  })

  it('should return first n number of fibonacci', function () {
    let fibonacci = calculator.compute(Operation.fibonacci, 4)
    assert.deepEqual(fibonacci, [0, 1, 1, 2])
  })
})