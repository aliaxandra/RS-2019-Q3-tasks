module.exports = function multiply(first, second) {
  
  var result;
  
  first = BigInt(first);
  second = BigInt(second);
  
  result = first * second;
  result = result.toString();

  return result;
  
}
