class Producto{
    constructor(pCodigo, pNombre, pPrecio){
   this.codigo = pCodigo;
   this.nombre = pNombre;
   this.precio = pPrecio;
    }
    imprimeDatos(){
        document.write(`
        <ul>
        <li>Codigo: ${this.codigo} </li>
        <li>Nombre: ${this.nombre} </li>
        <li>Precio: ${this.precio} </li>
         </ul>`)
        }
    }

    let producto1 = new Producto(21, "microondas", 19500)
    let producto2 = new Producto(22, "licuadora", 15000)
    let producto3 = new Producto(23, "cafetera", 35000)
    
    let listaDeProductos = [producto1, producto2, producto3];

   producto1.imprimeDatos();
   producto2.imprimeDatos();
   producto3.imprimeDatos();
    




