// Esportiamo tramite module.export la nostra funzione mutation, utilizzando la sintassi CommonJS per l'esportazione dei moduli.

module.exports = function mutation(arr){
  return arr[1].split('').filter(function(carattere){
  	if(arr[0].indexOf(carattere) !== -1) return carattere;
  }).length === arr[1].split('').length;
}
