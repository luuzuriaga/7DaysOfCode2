7DaysOfCode Dia 2

# Preguntas interactivas en JavaScript

Este proyecto solicita información al usuario a través de `prompt()` y muestra mensajes con `alert()`.

## Código

```javascript
// Solicitar información al usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar mensaje de bienvenida
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Preguntar si le gusta estudiar el lenguaje
const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con 1 para SÍ o 2 para NO.`);

// Evaluar la respuesta
if (respuesta == "1") {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == "2") {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
  alert("Por favor, responde con 1 o 2.");
}
```

## Explicación
1. Se solicita el nombre, la edad y el lenguaje de programación que estudia el usuario.
2. Se muestra un mensaje de bienvenida con los datos ingresados.
3. Se pregunta si le gusta el lenguaje y se muestra un mensaje según la respuesta.

## Uso
Ejecuta el código en la consola del navegador o en un entorno con `prompt()` y `alert()` habilitados.
