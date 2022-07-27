let auto = {  
    Marca: "Nissan", 
    Modelo: "370z",
    color: ["negro mate", "negro brillante",],
   autonomia: "12Km/l",
   apagado: ()=>{document.write("<p> El motor esta apagado...</p>")},
   encendido: ()=>{document.write("<p> El motor esta encendido...</p>")},
   }

   document.write(`<p>${auto.Marca}</p>`)
   document.write(`<p>${auto.Modelo}</p>`)
   document.write(`<p>${auto.autonomia}</p>`)
   document.write(`<p>${auto.color}</p>`)
   
   document.write(`<p>${auto.apagado}</p>`)
