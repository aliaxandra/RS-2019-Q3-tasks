module.exports = function check(str, bracketsConfig) {

  var array = [];
  var subStr;
  var match;
  var newBracketConfig = [];
  var i;

  if(str === ''){
    return true;
  }

  for (i = 0; i < bracketsConfig.length; i++){
    newBracketConfig.push(bracketsConfig[i].join(''));
  }

  for(i = 0; i < str.length; i++){
    if(array.length === 0){
      array.push(str[i]);
    } else {
      subStr = array[array.length - 1] + str[i];
      match = newBracketConfig.indexOf(subStr) > -1;
      if (match === true){
        array.pop();
      } else {
        array.push(str[i]);
      }
    }
  }

  if(array.length === 0){
    return true;
  } else {
    return false;
  }

}