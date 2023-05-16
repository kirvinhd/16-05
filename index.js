
let datos = []

function guardar() {
    
    IMC  = new Object()
    
    IMC.nombre = document.getElementById('nombre').value
    IMC.edad = document.getElementById('edad').value
    IMC.peso = document.getElementById('peso').value
    IMC.altura = document.getElementById('altura').value
    if (document.getElementById('femenino').checked)
        IMC.sexo = 'Femenino'
    else if (document.getElementById('masculino').checked)
        IMC.sexo = 'Masculino'
        datos.push(IMC)
    mostrartabla()
}
function mostrartabla() {
    let tabla = ''
    if (datos.length > 0) {
        datos.forEach(e => {
            tabla += `
                  <tr>
                      <td>${e.nombre}</td>
                      <td>${e.edad}</td>
                      <td>${e.peso}</td>
                      <td>${e.altura}</td>
                      <td>${e.sexo}</td>
                      <td>${e.IMC}</td>
                  </tr>
              `
        })
    }
    document.getElementById('tablaNueva').innerHTML = tabla
}
function validar() {
    const nombre = validarFoco('nombre')
    const edad = validarFoco('edad')
    const peso = validarFoco('peso')
    const altura = validarFoco('altura')
    const sexo = document.querySelector('input[name="sexo"]:checked')
    if (!sexo)
        document.getElementById('esexo').innerHTML =
            '<span class="badge bg-danger">Debe seleccionar el campo </span>'
    if (nombre && edad && peso && altura && sexo) {
        guardar()
        limpiar()
    }
}

function validarFoco(input) {
    const valor = document.getElementById(input).value.trim()
    if (valor == '') {
        document.getElementById('e' + input).innerHTML =
            '<span class="badge bg-danger">Debe ingresar el campo </span>'
        return false
    }
    else {
        document.getElementById('e' + input).innerHTML = ''
    }

}

function CalcularIMC(altura, peso) 
    {
    
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    
    indice = (peso / Math.pow(altura, 2));
    resultado = "";
 
    if (indice < 18.5){
        resultado = "Peso inferior al normal.";

    if(indice >= 18.5 && indice < 24.9){
        resultado = "Peso Normal.";
        }
            
    if (indice >= 25.0 && indice < 29.9)
        {
            resultado = "Peso superior al normal.";
        }
        else
        {
            resultado = "Obesidad.";
        }  

        guardar()
    }
    
}
      


function MostrarResultadoIMC (altura, peso, indice)
    {
    var mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
    alert (mensaje);
    }

	

