// Sección 1: Selección de Elementos y Definiciones Iniciales
const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST
let id // para que inicie en 0 cada tarea tendrá un id diferente


// Sección 2: Creación de Fecha Actualizada
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' })

// Sección 3: Función para Agregar Tarea
function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) { return } // si existe eliminado es true si no es false
    const REALIZADO = realizado ? check : uncheck // si realizado es verdadero check si no uncheck
    const LINE = realizado ? lineThrough : ''
    const elemento =` 
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                        </li>
                        `
                    
    lista.insertAdjacentHTML("beforeend", elemento)
}