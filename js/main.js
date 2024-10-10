// Considerando que un rectángulo varía de un cuadrado sólo
// porque la altura no es igual a la base, diseñe la clase
// Cl_rectangulo que herede de Cl_cuadrado, y luego haga un
// programa que determine el área y el perímetro de un rectángulo
// (área= base * altura, perímetro= 2*base + 2*altura). 

import Cl_rectangulo from "./Cl_rectangulo.js";

let rectangulo1 = new Cl_rectangulo(4, 2);
let rectangulo2 = new Cl_rectangulo(3, 5);

let salida = document.getElementById("Salida");
salida.innerHTML = `
    <span>Base del rectangulo: ${rectangulo1.base}</span><br>
    <span>Altura: ${rectangulo1.altura}</span><br>
    <span>Area resultante: ${rectangulo1.area()}</span><br>
    <span>Perimetro: ${rectangulo1.perimetro()}</span><br>
    <br>
    <span>Base del rectangulo: ${rectangulo2.base}</span><br>
    <span>Altura: ${rectangulo2.altura}</span><br>
    <span>Area resultante: ${rectangulo2.area()}</span><br>
    <span>Perimetro: ${rectangulo2.perimetro()}</span><br>
`;