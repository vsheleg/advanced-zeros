module.exports = function getZerosCount(number, base) {
  let baseDecomposition = primeDecomposition(base)

  let numDecomposition = {}

  for(let key in baseDecomposition) {
    numDecomposition[key] = 0;
    let n = number;
    let keyPower = key;
    while(Math.floor(n / keyPower) > 0) {
      numDecomposition[key] += Math.floor(n / keyPower);
      keyPower *= key;
    }
  }

  let normalizedDivisorsFrequencies = Object.entries(numDecomposition).map(([k, v]) => v / baseDecomposition[k])

  return Math.floor(Math.min(...normalizedDivisorsFrequencies))
}


function primeDecomposition(number) {
  let decomposition = {}

  for(var i = 2; i <= number; ++i) {
    if(number % i == 0) {
      decomposition[i] = 0
    } 

    while(number % i == 0) {
      decomposition[i] += 1
      number /= i
    }
  }

  return decomposition
}