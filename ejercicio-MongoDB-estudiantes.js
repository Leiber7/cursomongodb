var lista = [
    {
      id: 1,
      nombre: 'Camila Lopez',
      detalles: {
        descripcion: 'matricula normal',
        contacto: {
          email: 'clopez@mail.com',
		  telefono: 83242834
        },
		valorMatricula: 200000
      },
    },
    {
      id: 2,
      nombre: 'Pedro Perez',
      detalles: {
        descripcion: 'beca',
        contacto: {
          email: 'pperez@mail.com',
		  telefono: 83242834
        },
		valorMatricula: 0
      },
    },
    {
      id: 3,
      nombre: 'Juan Yarce',
      detalles: {
        descripcion: 'matricula normal',
        contacto: {
          value: 'jyarce@mail.com',
		  telefono: 1122334455
        },
		valorMatricula: 400000
      },
    },
	{
      id: 4,
      nombre: 'Alberto Benitez',
      detalles: {
        descripcion: 'matricula condicional',
        contacto: {
          value: 'abenitez@mail.com',
		  telefono: 234534566
        },
	    valorMatricula: 600000
      },
    },
  ];
  
   //suma de Valor Matricula
 var valorMatriculas = lista.map((estudiante) => estudiante.detalles.valorMatricula);
 var suma = valorMatriculas.reduce((uno, dos) => {
  return uno + dos;
});
   // fin valor matricula
  
  
  //datos de contacto
  var contactos = lista.map((estudiante) => estudiante.detalles.contacto);
  //fin de contacto
  
  
  //Nombre con mayor matricula
  var ValoresMatricula = lista.map((estudiante) => estudiante.detalles.valorMatricula);
  
  ValoresMatricula.reverse()
  
  var nombre = lista.find((estudiante) => estudiante.detalles.valorMatricula == ValoresMatricula[0]).nombre;
  
  //fin matricula
  
  
  //correo estudiante matricula condicional
  var matriculacondicional = lista.find((estudiante) => estudiante.detalles.descripcion == 'matricula condicional').detalles.contacto.value;
  // fin matricula condicional
  
  
   console.log (suma);
   console.log (contactos);
   console.log(nombre);
   console.log(matriculacondicional);
