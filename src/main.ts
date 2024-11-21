//* Cazamos en ts igual que con js

const foto1: HTMLImageElement = document.querySelector(".foto-1")!;
console.log(foto1); // puede ser Element o null y eso dara problemas con el addeventlistener

const btn1 = document.querySelector(".btn-1");
console.log(btn1);

//* btn1 va a dar la posibilidad de ser nulo abajo, asi que usamos el ? para que no crashee

btn1?.addEventListener("click", () => {});

//* otra opcion es con un if

if (btn1 !== null) {
  btn1.addEventListener("click", () => {});
}

//* tb podemos usar el simbolo ! AL CAZARLO para deccirle que sabemos que no es null

const foto2 = document.querySelector(".foto-2")!;
console.log(foto2);

foto2.addEventListener("click", () => {});

//*==================================================
//*==================================================

//* que pasa con el objeto 'event'

foto1?.addEventListener("click", (event) => {
  console.log(event);
});

//! siempre hay que tipar el objeto event. como mínimo usa el objeto Event
function handleFotoClick(event: MouseEvent) {
  console.log("click en la foto", event);
}

foto1?.addEventListener("click", handleFotoClick);

// ejemplo formulario
const form = document.querySelector<HTMLFormElement>(".main-form");

function handleSubmit(event: SubmitEvent) {
  //submitEvent es mas correcto, pero deberas tipar form con HTMLFormElement
  event.preventDefault();
}

form?.addEventListener("submit", handleSubmit);

//*==================================================
//*==================================================

//* Si tienes que utilizar un metodo especial de algun elemento del DOM(focus(), reset(), play(), pause())
//* tienes que asegurarte de que el elemento es de tipo correcto

const input = document.querySelector('[name="nombre"]');
console.log(input);


if (form) {
  form.onsubmit = () => {};
}
