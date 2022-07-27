class Rectangulo{
    constructor(altura, ancho){
        this.alto = altura;
        this.ancho = ancho;
    }

        calcularArea(){
            return this.ancho * this.alto;

        }
        calcularPerimetro(){
            return 2 * (this.ancho + this.alto);

        }
}
let rectangulo = new Rectangulo(10, 40)
console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());
