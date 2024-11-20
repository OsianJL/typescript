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
    name: 'pedro',
    username: 'osi',
    email: 'osi@gmail.com'
}

users1.push(newUser as User)

//* cuando uso cualquier metodo de js, me ayuda con el tipado de cada cosa

const arrayFiltrado = users1.filter((user) => {user.username.includes('i')})