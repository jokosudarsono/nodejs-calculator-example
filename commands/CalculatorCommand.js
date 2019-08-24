/**
 * Command Class
 *
 * @class CalculatorCommand
 */
class CalculatorCommand {
  /**
   *Creates an instance of CalculatorCommand.
   * @param {function} operation
   * @param {integer} firstValue
   * @param {integer} [secondValue=0]
   * @memberof CalculatorCommand
   */
  constructor(operation, firstValue, secondValue = 0) {
    this._operation = operation
    this._firstValue = firstValue
    this._secondValue = secondValue
  }

  /**
   * @returns
   * @memberof CalculatorCommand
   */
  Execute() {
    if (this._secondValue > 0) {
      return this._operation(this._firstValue, this._secondValue)
    }

    return this._operation(this._firstValue)
  }

  /** Other function here */
}

module.exports = CalculatorCommand