
function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// function fizzBuzz() {
//     var contador = 1;
//     var miArreglo = [];
//     var resultado = "";

//     while (contador <= 100) {
//         var dividedPer3 = (contador % 3 === 0);
//         var dividedPer5 = (contador % 5 === 0);

//         if (dividedPer3 && dividedPer5) {
//             resultado = "FizzBuzz";
//         } else if (dividedPer3) {
//             resultado = "Fizz";
//         } else if (dividedPer5) {
//             resultado = "Buzz";
//         } else {
//             resultado = contador;
//         }

//         miArreglo.push(resultado);
//         contador++;

//     }

//     console.log(miArreglo)
// }

// fizzBuzz();


/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagramaS(world1, world2) {

    var lowerWorldOne = world1.toLowerCase();
    var lowerWorldTwo = world2.toLowerCase();

    var arrayLetras1 = lowerWorldOne.split('').sort().join('');
    var arrayLetras2 = lowerWorldTwo.split('').sort().join('');

    if (arrayLetras1 === arrayLetras2) {
        console.log("si")
        return true;
    } else {
        console.log("no")
        return false;
    }
}

anagramaS("roma", "amor"); // Salida: "Sí, son anagramas."
anagramaS("hola", "adios"); // Salida: "No, no son anagramas."
anagramaS("Cine", "ncie"); // Salida: "Sí, son anagramas."
anagramaS("Anita", "tina"); // Salida: "no, son anagramas."

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibboFunction(n) {

    var output = [];
    if (n === 0) return output;
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    output = [0, 1]

    for (var i = 2; i < n; i++) {

        output.push(output[i - 1] + output[i - 2]);

    }
    return console.log(output);
}

const fibonacci50 = fibboFunction(50);
console.log(fibonacci50);


/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

// function primoONo(n) {

//     if (n <= 1) {
//         console.log(n + " no es primo");
//         return

//     }


//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) {
//             console.log(n + " no es primo");
//             return;
//         }
//     }
//     console.log(n + " es primo");
//     return;
// }

// primoONo(91);

// for (var i = 1; i <= 100; i++) {
//     if (primoONo(i)) {
//         console.log(i + " es primo");
//     }
// }

/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

// Cuadrado es L elevado al Cuadrado
// Triuangulo es base x altura / 2
// Rectangulo es b x h

function calcularArea(shape, base, height) {

    //Primero creo que haria un if
    console.log("Please enter a shape and the length")
    if (shape === "square" && base === 0 && height != 0) {
        var result = (Math.pow(height, 2));
        return console.log("Ur square area is: " + result);

    } else if (shape === "triangle" && base != 0 && height != 0) {
        var result = (base * height / 2);
        return console.log("Ur triangle area is: " + result);

    } else if (shape === "rectangle" && base != 0 && height != 0) {
        var result = (base * height);
        return console.log("Ur rectangle area is: " + result);

    } else {

        return console.log("check you enter a square, triangle, or rectangle")

    }
}

// calcularArea("triangle", 2, 5);

// Tambien se podria usar un switch case

function calcularAreaWithSwitchCase(shape, dimension1, dimension2 = dimension1) {

    switch (shape.toLowerCase()) {
        case "square":
            if (!dimension1) return "Error enter a dimension of a square";
            var squareArea = Math.pow(dimension1, 2);
            var result = console.log("The area of the square is: " + squareArea);
            return result;

        case "triangle":
            if (!dimension1 || !dimension2) return "Error enter the base and the heigth in this order"
            var triangleArea = (dimension1 * dimension2 / 2);
            console.log(`Triangle area: ${triangleArea}`);
            return triangleArea;

        case "rectangle":
            if (!dimension1 || !dimension2) return "Error enter the base and the heigth in this order"
            var rectangleArea = (dimension1 * dimension2);
            var result = console.log("The area of the rectangle is: " + rectangleArea);
            return result;

        default:
            console.log("Please enter: square, triangle, or rectangle");
            return null;
    }
}

calcularAreaWithSwitchCase("square", 5);