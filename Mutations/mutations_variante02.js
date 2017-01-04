module.exports = function mutation(arr){
  return arr[1].split('').every(function(carattere){
  	return arr[0].indexOf(carattere) !== -1;
  });
}