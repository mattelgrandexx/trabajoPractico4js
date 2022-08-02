class Persona{
    constructor(pNombre, pEdad, pDni, pSexo, pPeso, pAltura, pFechaNacimiento){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.dni = pDni;
        this.sexo = pSexo;
        this.peso = pPeso;
        this.altura = pAltura;
        this.FechaNacimiento = pFechaNacimiento;
    }
    mostrarGeneracion(){
        if(this.edad > 1993){
            document.write(`<ul>
            <li>Z</li>
            <li>Irreverencia</li>
        </ul>`)
        }else(this.edad < 2011){
            document.write(`<ul>
            <li>Z</li>
            <li>Irreverencia</li>
        </ul>`)}

    }
    esMayorDeEdad(){

    }
    mostrarDatos(){

    }
    generaDni(){

    }
}

let persona1 = new Persona("Matias Cardoso", 28, 38174717, "H", "98Kg", "1.75m", "08/07/1994");

document.write(`<table>
<thead>
    <tr>
        <th>Generacion</th>
        <th>Rasgo Caracteristico</th>
    </tr>
</thead>
<tbody>`);