import Cl_cuadrado from "./Cl_cuadrado.js";

export default class Cl_rectangulo extends Cl_cuadrado{
    constructor(base, altura) {
        super(base)
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

    perimetro() {
        return (this.base * 2) + (this.altura * 2);
    }
   
}