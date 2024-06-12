document.getElementById('formulario-capacidad').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.getElementById('formulario-cotizacion').addEventListener('submit', function(event) {
    event.preventDefault();
});

function CalcularBTU(){
    let ancho_area = document.getElementById('ancho').value;
    let largo_area = document.getElementById('largo').value;

    if (!ancho_area || !largo_area || isNaN(ancho_area) || isNaN(largo_area)) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }

    let resultado = parseFloat(ancho_area) * parseFloat(largo_area) * 600;
    let capacidad = 0;
    let marcas = " ";
    let voltaje = " ";

    if (resultado <= 12000){
        capacidad = 12000;
        marcas = "ComfortStar, Adina";
        voltaje = "110v, 220v";
        renderizarResultadoCapacidad(capacidad, marcas, voltaje);
    } else if (resultado > 12000 && resultado <= 18000) {
        capacidad = 18000;
        marcas = "ComfortStar, Adina, GAir";
        voltaje = "220v";
        console.log(capacidad, marcas, voltaje);
        renderizarResultadoCapacidad(capacidad, marcas, voltaje);
    } else if (resultado > 18000 && resultado <= 24000) {
        capacidad = 24000;
        marcas = "ComfortStar, Adina, GAir";
        voltaje = "220v";
        console.log(capacidad, marcas, voltaje);
        renderizarResultadoCapacidad(capacidad, marcas, voltaje);
    } else {
        alert("Se necesita un equipo de mayor resultado que 24,000 BTU");
    }
}

function renderizarResultadoCapacidad(capacidad, marcas, voltaje){
    let contenedor = document.getElementById('contenedor-form-capacidad');
    contenedor.innerHTML = `
    <div class="p-lg-5 p-4">
        <div class="mb-3">
           <img src="src/img/air-conditioner-icon.png">
        </div>
        <div>
            <h4 class="mb-2">Necesitas un equipo de ${capacidad} BTU</h4>
            <hr class="w-75 mb-3 border-dark-subtle">
            <p class="mb-0">
                Marcas disponibles: ${marcas}
            </p>
            <p class="mb-0">
                Voltaje disponible: ${voltaje}
            </p>
        </div>
    </div>
    `;
}

function CalcularPrecio(){
    let equipo = document.getElementById('equipo').value;
    let zona = document.getElementById('zona').value;

    if (!equipo || !zona) {
        alert("Por favor, ingresa los datos solicitados.");
        return;
    }

    let instalacion = 125;
    let total = parseFloat(equipo) + parseFloat(zona) + parseFloat(instalacion);

    renderizarResultadoCotizacion(total, equipo, instalacion, zona);
}


function renderizarResultadoCotizacion(total, equipo, instalacion, zona){
    let contenedor = document.getElementById('contenedor-form-cotizacion');
    contenedor.innerHTML = `
    <div class="p-lg-5 p-4">
        <div class="mb-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0e96d5" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
            </svg>
        </div>
        <div>
            <h4 class="mb-2">El total de tu cotización es de $${total}</h4>
            <hr class="w-75 mb-3 border-dark-subtle">
            <p class="mb-0">
                Precio del equipo: $${equipo}
            </p>
            <p class="mb-0">
                Precio de la instalación: $${instalacion}
            </p>
            <p class="mb-0">
                Cargo por zona: $${zona}
            </p>
        </div>
    </div>
    `;
}




