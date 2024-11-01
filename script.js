// Obtener el monto total de la cuenta /
// Obtener el porcentaje de propina deseado/
// Calcular la propina (monto total * porcentaje de propina)
// Calcular el total a pagar (monto total + propina)
// Mostrar el total a pagar al usuario /
// NOTA: Podes añadir una interfaz simple para que el usuario pueda ingresar el monto y ver el resultado.

const totalCuenta = document.getElementById("monto");
const porcentajeInput = document.getElementById("porcentaje-input");
const button = document.getElementById("botonAplicar");
const totalFinal = document.getElementById("totalApagar");

totalCuenta.addEventListener("change", calcularPorcentaje);
porcentajeInput.addEventListener("change", calcularPorcentaje);

function calcularPorcentaje(){
    const valorCuenta = parseFloat(totalCuenta.value);
    const valorPorcentaje = parseFloat(porcentajeInput.value);    
    console.log(valorCuenta);
    console.log(valorPorcentaje);

    calculaPropina(valorCuenta, valorPorcentaje);
}

function calculaPropina(cuenta, porcentaje){
    var propina = (cuenta * porcentaje)/100;
    var totalApagar = cuenta + propina;

    console.log(propina);
    console.log(totalApagar);

    totalFinal.textContent =  `Total a apagar: $${totalApagar.toFixed(2)}`
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    calcularPorcentaje();
});


/*
const button = document.getElementById("botonAplicar");

button.addEventListener('click', (Event) =>{
    var montoCuenta = document.getElementById("monto");
    var porcentajePropina = document.getElementById("porcentaje-input");
    console.log(montoCuenta);
    console.log(porcentajePropina);
});
*/

/*
function obtenerDatosCuenta() {
    var montoCuenta = document.getElementById("monto");
    var porcentajePropina = document.getElementById("porcentaje-input");
    console.log(montoCuenta);
    console.log(porcentajePropina);
}

*/