document.getElementById('formulario-capacidad').addEventListener('submit', function(event) {
    event.preventDefault();
});

function CalcularBTU(){
    let ancho_area = document.getElementById('ancho').value;
    let largo_area = document.getElementById('largo').value;
    let resultado = parseFloat(ancho_area) * parseFloat(largo_area) * 600;
    let capacidad = 0;
    let marcas = " ";
    let voltaje = " ";
    let fuente = ""

    if (resultado <= 12000){
        fuente = 'src/img/Productos/condensador12-24k.webp'
        capacidad = 12000;
        marcas = "ComfortStar, Adina";
        voltaje = "110v, 220v";
        console.log(capacidad, marcas, voltaje);
        renderizarResultado(fuente, capacidad, marcas, voltaje);
    } else if (resultado > 12000 && resultado <= 18000) {
        alert("Necesitas un equipo de 18,000 BTU");
    } else if (resultado > 18000 && resultado <= 24000) {
        alert("Necesitas un equipo de 24,000 BTU");
    } else {
        alert("Se necesita un equipo de mayor resultado que 24,000 BTU");
    }
}

function renderizarResultado(fuente, capacidad, marcas, voltaje){
    let contenedor = document.getElementById('contenedor-form-capacidad');
    contenedor.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${fuente}" class="card-img-top" alt="Condensador 12k - 24k BTU">
            <div class="card-body">
                <h5 class="card-title">Capacidad: ${capacidad} BTU</h5>
                <div class="d-flex flex-column">
                    <p class="card-text">
                        Marcas: ${marcas}
                        Voltaje: ${voltaje}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
}


function CalcularPrecio(){
    /*
    TODO
    1. Recopilar valores de los inputs
    2. Calcular precio del equipo en base a la resultado y el tipo
    3. Calcular precio de la instalación en base a la zona seleccionada
    */
}



