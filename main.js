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
    name: 'pedro',
    username: 'osi',
    email: 'osi@gmail.com'
};
users1.push(newUser);
//* cuando uso cualquier metodo de js, me ayuda con el tipado de cada cosa
const arrayFiltrado = users1.filter((user) => { user.username.includes('i'); });
