// Tipado básico

// Podemos tipar nuestras variables si nos da la gana usando dos puntos :
let edad: number = 37;
let nombre: string = 'Iván';
let estaCasado: boolean = true;
let valorNulo: null = null;
let valorNoDefinido: undefined = undefined;

// No obstante, TypeScript YA ES SUFICIENTEMENTE INTELIGENTE PARA "INFERIR" EL TIPADO
// A UNA VARIABLE QUE ESTÁS CREANDO DE MANERA LITERAL
let apellido = 'Luengo';

// TypeScript te va a dar error si intentas cambiarle el tipo de valor a una variable durante la ejecución
nombre = 50; 
edad = 'hola'; 


//* =========================================
//* Arrays: 
//* Hay dos maneras de tipar un array, pero las dos son igual de validad: 

const frutas1: string[] = ['manzana', 'fresa', 'platano']
const frutas2: Array<string> = ['manzana', 'fresa', 'platano']

const nums2: number[] = [2, 4, 5, 6]
const nums1: Array<number> = [2, 4, 5, 6]


//! any --> es un tipo que solo existe en ts y significa que puede tener cualquier tipo de dato
//* hay que evitarlos a TODA COSTA

let valor: any = 37
valor = 'hola' // no se queja porque has puesto any arriba, pero solo en casos extremos debes usarlo




//* =========================================
//* Funciones: 


function sumar (num1: number, num2: number):number {
    return num1 + num2
}

sumar(5, 6)

//* Parametros opcionales?

function saludar (nombre: string, apellido: string = '') {
    console.log(`Hola ${nombre}` + apellido? `${apellido}`: '');
}

console.log(saludar('osian'));
