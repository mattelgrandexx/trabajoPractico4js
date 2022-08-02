class Libro{
    constructor(pISBN, pTitulo, pAutor, pNumeroPaginas){
    this.ISBN = pISBN;
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.numeroPaginas = pNumeroPaginas;
    }

get mostrarISBN(){
    return this.ISBN;
}
set modificarISBN(nuevoISNB){
this.ISBN = nuevoISNB;
}

get mostrarTitulo(){
    return this.titulo;
}
set modificarTitulo(nuevoTitulo){
this.titulo = nuevoTitulo;
}

get mostrarAutor(){
    return this.autor;
}
set modificarAutor(nuevoAutor){
this.autor = nuevoAutor;
}

get mostrarNumeroPaginas(){
    return this.numeroPaginas;
}
set modificarNumeroPaginas(nuevoNumeroPaginas){
this.numeroPaginas = nuevoNumeroPaginas;
}

mostrarLibro() {
    document.write(`<p>El libro: ${this.titulo} con ISBN: ${this.ISBN} creado por el autor ${this.autor} tiene la cantidad de paginas: ${this.numeroPaginas}</p>`);
  }

}


let libro1 = new Libro(
    "0-7645-2641-3",
    "La casa de papel",
    "Juan Perez",
    500);

let libro2 = new Libro(
    "0-4157-2584-7",
    "Pulp Fiction",
    "Miguel Romero",
    900);    

    console.log(libro1);
    console.log(libro2);

libro1.mostrarLibro();
libro2.mostrarLibro();



