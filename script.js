var peceras = [2,5,7,9,12,56,79,45,86,98,100];

  function countAllSpeces(peceras) {

  var totalpeces = peceras.reduce(

  function (accumulator, peces) {

  return accumulator + peces;
    
  }

  );
    
  return totalpeces;
    
}

// const peceras = [10, 3, 2, 1, 6, 1, 9, 2]

// countAllpeces(peceras)

// ejecución( E )
var resultado = countAllpeces(peceras)
// salida ( O )
document.write(resultado);
