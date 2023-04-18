/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número*/

//1

function numeroParImpar(numero) {
    if(numero % 2 == 0){
        return console.log( `El numero ${numero}  Ingresado es Par`);
    }    
    else{
        return console.log( `El numero ${numero} es Impar`);
    }

    }

    numeroParImpar(55);



//2

function numeroMayorMenor (num1, num2){
    if(num1 > num2){
        return console.log(`El numero ${num1} es mayor que ${num2}`);
    } 
    else if(num1 < num2){
        return console.log(`El numero ${num2} es mayor que ${num1}`);
    } 
    else(num1 === num2); {
        return console.log(`Los numeros ingresados son iguales`);

    }   

}

numeroMayorMenor(3,3)

//3

function numeroMultiplo(numero) {
    if(numero % 5 == 0){
        return console.log( `El numero ${numero}  Ingresado es Multiplo de 5`);
    }    
    else{
        return console.log( `El numero ${numero} Ingresado no es Multiplo de 5`);
    }

    }

    numeroMultiplo(52);



//4

function numeroCorrelativo(num){  
    
    let arrayNumero = [];
    for( let i = 0; i <= num; i++){
        arrayNumero.push(i);
    }   


    console.log(arrayNumero);
}

numeroCorrelativo(10);

//5

function imprimirPalabra(palabra, numero){
        for (let i = 1; i <= numero; i++){
            console.log(`${palabra}`);
    }
    
}

imprimirPalabra("ariel", 5);

//6

function imprimirArray([num1,num2, num3]){
    console.log(`Los valores de array son: ${[num1,num2, num3]}`);
}

imprimirArray([1,2,3]);

7//

function imprimirMenosCinco(array){
    for (let i= 0; i < array.length; i++){
        if (i === 4){
            continue;       
        }   
        console.log(array [i]);    

    }
}

imprimirMenosCinco([1,2,3,4,5,6,7,8,9,10]);


8//

function multiplicarArray(array, numero){
    for( let i = 0; i < array.length; i++){
        console.log(array[i] * numero);
    }
    

}

multiplicarArray([2,4,5], 2);