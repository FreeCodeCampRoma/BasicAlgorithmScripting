// Con la some vogliamo tornare il negato perchè la some ritorna true se un elemento non è presente. Per cui la logica della funzione mutation è di tornare true se tutte le occorrenze delle lettere sono presenti. Per questo motivo cambierò il true di some in false, se ho caratteri non presenti!
module.exports = function mutation(arr){
  return !arr[1].split('').some(function(carattere){
  	return arr[0].indexOf(carattere) == -1;
  });
}