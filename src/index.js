module.exports = function zeros(expression) {

  function countDivisors(number, divisor) {
    var count = 0;
    while (number % divisor === 0) {
      number /= divisor;
      count++;
    }

    return count;
  }

  function countTwoFiveDivisors(number) {
    return {
      2: countDivisors(number, 2),
      5: countDivisors(number, 5)
    };
  }

  function sumTwosFives(divisors1, divisors2) {
    return {
      2: divisors1[2] + divisors2[2],
      5: divisors1[5] + divisors2[5]
    }
  }

  function factorTwosFivesGeneric(number, stride) {
    if (typeof stride !== 'number') throw TypeError("stride should be a number");

    if (stride <= 0) throw RangeError("stride should be more than zero");

    var twosFives = { 2: 0, 5: 0 };
    for (; number > 0; number -= stride) {
      twosFives = sumTwosFives(twosFives, countTwoFiveDivisors(number))
    }

    return twosFives;
  }

  var numsArray = expression.split('*');

  function countZeros(numsArray) {
    var twosFives = {2: 0, 5: 0};
    for (i = 0; i < numsArray.length; i++) {
      if (numsArray[i][numsArray[i].length - 2] === '!') {
        var dFacNum = (numsArray[i].slice(0, numsArray[i].length - 2));
        twosFives = sumTwosFives(twosFives, factorTwosFivesGeneric(dFacNum, 2));
      } else {
        var dFacNum = (numsArray[i].slice(0, numsArray[i].length - 1));
        twosFives = sumTwosFives(twosFives, factorTwosFivesGeneric(dFacNum, 1));
      }
    }

    return Math.min(twosFives[2], twosFives[5]);
  }

  return countZeros(numsArray);
}
