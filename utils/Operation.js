const isPrime = function(max) {
  var totalCount = 0

  for (let i = 1;  i <= max;  i++) {
    if (max % i === 0) totalCount++
  }

  if (totalCount <= 2) return true

  return false
}

const sum = function(firstValue, secondValue) {
  return firstValue + secondValue
}

const multiply = function(firstValue, secondValue) {
  return firstValue * secondValue
}

const prime = function(params) {
  let prime = []
  let n = 2

  while (prime.length < params) {
    if (isPrime(n)) prime.push(n)
    n++
  }

  return prime
}

const fibonacci = function(params, totalCount = 0) {
  if (totalCount === 0) params -= 1
  totalCount++

  if (params <= 1) {
    return [0, 1];
  } else {
    var results = fibonacci(params - 1, totalCount);
    results.push(results[results.length - 1] + results[results.length - 2]);
    return results;
  }
}

module.exports = {
  sum,
  multiply,
  prime,
  fibonacci,
}