
//  Toma dos números de los usuarios. Calcula el resultado de la potencia del segundo número con respecto al primero

// Solicitar datos al usuario
const base = parseFloat(prompt("Ingresa el primer número (base):"));
const exponente = parseFloat(prompt("Ingresa el segundo número (exponente):"));

// 2. Validación de los valores ingresados

if (!isNaN(base) && !isNaN(exponente)) {

    const resultado = Math.pow(base, exponente);
    alert(`El resultado de ${base}^${exponente} es: ${resultado}`);

} else {

    alert("Por favor, ingresa números válidos.");
}

// ---------------------
// const base = parseFloat(prompt("Ingresa el primer número (base):"));
// const exponente = parseFloat(prompt("Ingresa el segundo número (exponente):"));

// const resultado = base ** exponente;

// alert(`El resultado de ${base}^${exponente} es: ${resultado}`);