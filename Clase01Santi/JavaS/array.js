// Los arrays / matriz / arreglo

//? son literalmente un listado de elementos
//? es una variable ITERABLE --> que se recorre

//* un nombre "Marcela" -> puedo mirar letra por letra -> un string SI es un tipo de dato iterable

// * un número 2349 -> js no me permite mirar cada número de uno en uno -> un número NO es un tipo de dato iterable

//? LA CONDICIÓN PARA QUE UN ELEMENTO SEA ITERABLE ES QUE TENGA POSICIONES Y PUEDA ACCEDER A CADA UNA DE ELLAS;

const comidas = ["pizza", "donuts", "hamborguesa"]

console.log(comidas[0]);

// que es un método de arrays?

//un método es una funcionalidad que podría hacer perfectamente en nativo pero que ha creado otra persona para ahorrar tiempo de programación

for (let i = 0; i < comidas.length; i++) {

  console.log(comidas[i]);

  if (comidas[i] === "pizza") {
    console.log("la posición de mi elemento es: " + i);
  }
}


