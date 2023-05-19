
// Resolver los siguientes ejercicios:
// 1. Dados un array de 10 números, informar cuantos de ellos son positivos. (podemos utilizar de metodo filter() )
// 2. Encontrar la mayor temperaruta de este arreglo: const temperaturas = [25, 30, 28, 32, 29, 27];
// 3. Se pide ingresar una cantidad de personas. Por cada persona ingresar el año de nacimiento e informar el promedio de edad de aquellos que son millenials.
// 4. Algoritmo que lea los nombres y las edades de 2 alumnos, y que los datos se almacenen en dos arrays. En base a esos datos cargados, determinar el nombre de la alumna con la mayor edad del array.
// 5. Sumar dos arreglos con longitud diferente 
// arreglo1[4 , 5, 1 ,3 ] y arreglo[1, 2, 6]
// (En este ejercicio podemos utilizar el método fill(0))

function punto1() {

    let arrayNumeros = [6, -3, 5, 10, -9, 0, 1, 8, -7, 1];
    let positivos = arrayNumeros.filter((numero) => numero > 0);

    alert("Hay " + positivos.length + " numeros positivos en la lista " +
        "y son: " + positivos.join(", "));

}

function punto2() {

    const temperaturas = [25, 30, 28, 32, 29, 27];
    let mayorTemperatura = temperaturas[0];

    for (let i = 1; i < temperaturas.length; i++) {
        if (temperaturas[i] > mayorTemperatura) {
            mayorTemperatura = temperaturas[i];
        }
    }

    alert(mayorTemperatura + "es la mayor temperatura");

}

function punto3() {

    let numPersonas = parseInt(prompt("Ingrese la cantidad de personas: "));
    let sumaEdades = 0;
    let cantMillennials = 0;

    for (let i = 1; i <= numPersonas; i++) {
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i}: `));

        if (edad >= 30 && edad <= 42) {
            cantMillennials++;
            sumaEdades += edad;
        }else{
            alert("no es milenials")
        }
    }

    let promedioEdad = (sumaEdades / cantMillennials)

    alert(`El promedio de edad de los millennials es de ${promedioEdad} años.`);

}

function punto4() {

    let nombres = [];
    let edades = [];

    for (let i = 1; i <= 2; i++) {
        let nombre = prompt(`Ingrese el nombre del alumno ${i}: `);
        let edad = parseInt(prompt(`Ingrese la edad de ${nombre}: `));

        nombres.push(nombre);
        edades.push(edad);
    }

    let MaxEdad = edades.indexOf(Math.max(...edades));//retorna el valor máximo dentro del array por su indice
    let nombreAlumnaMayor = nombres[MaxEdad];

    alert("El alumno con la mayor edad es." + nombreAlumnaMayor);

}

function punto5() {

    let arreglo1 = [4, 5, 1, 3];
    let arreglo2 = [1, 2, 6];
    let resultado = [];

    let igualLongitud = (arreglo1.length, arreglo2.length);//Obtener la longitud de los dos arreglos

    //Rellenar los arreglos con 0 para igualar su longitud
    arreglo1.fill(0, arreglo1.length);
    arreglo2.fill(0, arreglo2.length);

    //Sumar los elementos correspondientes de ambos arreglos
    for (let i = 0; i < igualLongitud; i++) {
        resultado[i] = arreglo1[i] + arreglo2[i];
    }

    alert(resultado);

}