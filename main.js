"use strict";
//? type e interface
const toDo = {
    id: 1,
    task: 'estudiar',
    isCompleted: true
};
const user1 = {
    id: 2,
    username: 'Ivan',
    email: 'ivan@gmail.com'
};
const admin1 = {
    id: 3,
    username: 'Osian',
    email: 'osian@gmail.com',
    isAdmin: true
};
//* ahora podré decirle a un array que todos los elementos que guarda son de tipo User
const users1 = [];
const users2 = [];
const newUser = {
    id: 4,
    name: 'pedro', // puedo incluir una propiedad nueva, pero no podría si newUser fuera : User.
    username: 'osi',
    email: 'osi@gmail.com'
};
users1.push(newUser);
//* cuando uso cualquier metodo de js, me ayuda con el tipado de cada cosa
const arrayFiltrado = users1.filter((user) => { user.username.includes('i'); });
const perro1 = {
    name: 'toby',
    raza: 'caniche',
    gender: 'male'
};
const pajaro1 = {
    name: 'toby',
    raza: 'caniche',
    gender: 'male'
};
const fish1 = {
    name: 'toby',
    raza: 'caniche',
    gender: 'male',
    itSwims: true
};
class Coche {
    constructor(marca, modelo, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
    }
    info() {
        console.log(`es un coche ${this.marca} ${this.modelo} y tiene ${this.puertas} puertas`);
    }
    getMarca() {
        return this.marca;
    }
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
}
const c1 = new Coche('opel', 'corsa', 3);
