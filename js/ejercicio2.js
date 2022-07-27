let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(montoIngresar){

       this.saldo += montoIngresar
    },
    extraer(montoExtraer){
      
        if(this.saldo >= montoExtraer){
            this.saldo -= montoExtraer;
        } else{
            alert("Fondos insuficientes");
        }
    },
    informar(){
        document.write(`<p>La cuenta del usuario: ${this.titular} contiene un saldo de: ${this.saldo}</p>`)
    },
}

cuenta.informar();
let deposito = parseFloat(prompt("Ingrese un deposito"));
cuenta.ingresar(deposito);
cuenta.informar();

let retiro = parseFloat(prompt("Ingrese un monto a retirar"));
cuenta.extraer(retiro);
cuenta.informar();