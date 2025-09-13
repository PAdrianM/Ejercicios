
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

/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

/***
 * El aspect ratio se expresa como dos numeros separados ejemplo 16:9
 * 
 * Se calcula dividiendo la anchura por la altura.
 * Se representa con "X:Y" donde X es la anchura y Y es la altura.
 * 
 * Se puede calcular dividiendo ejemplo:
 * 1920 / 1080 da como resultado  = 1.77 lo que indica que tiene una relacion de aspecto 
 * de 16:9 ya que 16 / 9 = 1.77
 * 
 * CREAR UNA FUNCION Que encuentre el MCD (Maximo Comun divisor)
 */

function calcularMCD(a, b){

    a = Math.abs(a);
    b = Math.abs(b);

    while (b) {

        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function obtenerDimensiones(url){

    if (typeof url !== 'string') {
        return Promise.reject(new Error("La URL debe ser una cadena de texto"));
    }
    
    if (!url || url.trim() === '') {
        return Promise.reject(new Error("La URL no puede estar vacía"));
    }

    return new Promise((resolve, reject) => {
        const img = new Image(); //Se crea el objeto Image

        img.onload = () => {
            //Se carga la imagen, ahora si se obtiene las dimensiones

            const dimensiones = {
                alto: img.naturalHeight, //Obtener el alto natural
                ancho: img.naturalWidth //Obtener el ancho natural
            };
            resolve(dimensiones); //Se resuelve la promesa con las dimensiones
        };

        img.onerror = (error) => {

            reject(new Error(`Error al cargar la imagen: ${url} . ${error.message}` ));
        };

        img.src = url; //Asignar la url de la imagen para iniciar la carga

    });

}

const urlImage = "https://i.pinimg.com/1200x/1a/9d/b6/1a9db68119cae4c578d7579ea2480687.jpg";
var altura;
var anchura;

obtenerDimensiones(urlImage)
    .then(dimensiones => {
        altura = dimensiones.alto;
        anchura = dimensiones.ancho;
        console.log(`Alto: ${altura}px, Ancho: ${anchura}px`);

        const mcd = calcularMCD(altura, anchura);
        console.log(`MCD: ${mcd}`);

        // También puedes calcular el aspect ratio aquí:
        const aspectRatio = `${anchura/mcd}:${altura/mcd}`;
        console.log(`Aspect Ratio: ${aspectRatio}`);
        
    })
    .catch(error => {
        console.error(error);
    });
