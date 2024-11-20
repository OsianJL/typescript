//? type e interface

//* interface (solo funciona para objetos y clases)

interface Tarea {
id: number; 
task: string; 
isCompleted: boolean
}

const toDo: Tarea = {
    id: 1,
    task: 'estudiar',
    isCompleted: true
}

//toDo.id = 'hola'  /// typescript muestra el error y no lo permite. js si que lo permite


//* Parametros opcionales ---> ?

interface User {
    id: number;
    username: string; 
    email: string;
    isActive?: boolean // nos aseguramos de que si no llega este dato no haya problema
}

const user1: User = {
    id: 2,
    username: 'Ivan',
    email: 'ivan@gmail.com' 
}

//* podemos extender interfaces

interface Admin extends User  {
    isAdmin: boolean
}


const admin1: Admin = {
    id: 3,
    username: 'Osian',
    email: 'osian@gmail.com',
    isAdmin: true
}


//* ahora podré decirle a un array que todos los elementos que guarda son de tipo User

const users1: Array<User> = []
const users2: User[] = []

const newUser = {
    id: 4, 
    name: 'pedro', // puedo incluir una propiedad nueva, pero no podría si newUser fuera : User.
    username: 'osi',
    email: 'osi@gmail.com'
}

users1.push(newUser)

//* cuando uso cualquier metodo de js, me ayuda con el tipado de cada cosa

const arrayFiltrado = users1.filter((user) => {user.username.includes('i')})


//*================================================
//* type--- permite generar nuevos tipos de datos simples. no hace falta que sean objetos

type Gender = 'male' | 'female' | 'non-binary'


interface Perro {
    name: string;
    raza: string; 
    gender: 'male' | 'female';
}
interface Gato {
    name: string;
    raza: string; 
    gender: Gender
}


const perro1: Perro = {
    name: 'toby',
    raza: 'caniche',
    gender: 'male'
}
//* tambien puedes crear tipos de objeto usando type

type Pajaro = {
    name: string;
    raza: string; 
    gender: Gender
}

const pajaro1: Pajaro = {
    name: 'toby',
    raza: 'caniche',
    gender: 'male'
}

//* tambien podemos extender types, usamos ----> 

type Pescado = Pajaro & {
    itSwims: boolean
}

const fish1: Pescado = {
    name: 'toby',
    raza: 'caniche',
    gender: 'male',
    itSwims: true
}


//*================================================
//*================================================
//* Clases

interface ClassCoche {
    marca: string; 
    modelo: string; 
    puertas: number; 
    info: () => void; // una funcion queno recibe parametros y no retorna nada
    getMarca: () => string;
    setMarca: (nuevaMarca: string) => void 

}

class Coche implements ClassCoche {
    //! es obligatorio definir el tipo de cada propiedad antes del constructor
    marca: string; 
    modelo: string; 
    puertas: number; 
    constructor(marca: string, modelo: string, puertas: number) {
        this.marca = marca
        this.modelo = modelo 
        this.puertas = puertas
    }

    info () {
        console.log(`es un coche ${this.marca} ${this.modelo} y tiene ${this.puertas} puertas`);
        
    }

    getMarca () {
        return this.marca
    }

    setMarca (nuevaMarca: string)  {
        this.marca = nuevaMarca; 
    }

}

const c1 = new Coche('opel', 'corsa', 3)