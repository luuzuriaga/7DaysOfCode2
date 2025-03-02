// Solicitar información al usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar mensaje de bienvenida
alert(
  `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`
);

// Ejercicio opcional: Preguntar si le gusta estudiar el lenguaje
const respuesta = prompt(
  `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`
);

// Evaluar la respuesta y mostrar un mensaje adecuado
if (respuesta == "1") {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == "2") {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
  alert("Por favor, responde con 1 o 2.");
}
