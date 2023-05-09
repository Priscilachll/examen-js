/* Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga una
función para “humanizar” dicha fecha.
humanizeDate() => “Domingo, 18 de diciembre de 2022”
*/

function humanizeDate() {
const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
];

const date = new Date("2022-12-18");

const dayOfWeek = daysOfWeek[date.getDay()];
const dayOfMonth = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}. Argentina campeón del mundo!!`;
}

console.log (humanizeDate ()) 