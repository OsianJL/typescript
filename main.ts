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

const frutas: string[] = ['manzana', 'fresa', 'platano']
const nums1: Array<number> = [2, 4, 5, 6]
const nums2: number[] = [2, 4, 5, 6]
