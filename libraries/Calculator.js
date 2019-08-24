const CalculatorCommand = require('../commands/CalculatorCommand')

/**
 *
 * @class Calculator
 */
class Calculator {
  /**
   *
   * @param {function} operation
   * @param {integer} firstValue
   * @param {integer} [secondValue=0]
   * @memberof Calculator
   */
  compute(operation, firstValue, secondValue = 0) {
    let command = new CalculatorCommand(operation, firstValue, secondValue);
    return command.Execute();
  }

  /** Other function here */
}

module.exports = Calculator