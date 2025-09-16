const { prompt } = require("./prompt");

let tareas = [];
//creamos categorias
let categoriasNombres = ["Trabajo", "Personal"];

//ver categorias
function mostrarCategorias() {
    console.log("Categorias existentes:  ");
    categoriasNombres.forEach(
        function (categoria, indice) {
            console.log(indice + ": " + categoria);
        }
    );
}
// funcion para cargar nuevas categorias por el usuario
function cargarCategoria(nombreCategoria) {
    categoriasNombres.push(nombreCategoria);
    console.log("categoria " + nombreCategoria + " agregada");
}

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    mostrarCategorias();
    let numeroCategoria = parseInt(prompt("ingrese el indice de categoria", 10));
    if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length) {
        tareas.push({
            nombre: nombreRecibido,
            completada: false,
            fechaLimite: fechaLimiteRecibida,
            categoria: numeroCategoria
        });
    } else {
        console.log("Categoría inválida");
    }
}
// eliminar tarea
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log("tarea eliminada correctamente");
    } else { console.log("indice de tarea invalido") }
}

function tareaCompletada(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("tarea completada");
    } else { console.log("indice de tarea invalido") }
}

// modificar tareas && nuevoNombre.trim() !== "" && nuevaFechaLimite.trim() !== ""1
function modificarTarea(indice , nuevoNombre = null, nuevaFechaLimite = null, nuevoNumCategoria) {
    if (indice >= 0 && indice < tareas.length) {
        if (nuevoNombre !== null ) {
            tareas[indice].nombre = nuevoNombre;
        }
        if (nuevaFechaLimite !== null ) {
            tareas[indice].fechaLimite = nuevaFechaLimite;
        }
        tareas[indice].categoria = nuevoNumCategoria;
    } else {
        console.log("indice de tarea invalido");

    }
}
//funcion que muestra tareas completadas
function filtrarTareasCompletadasPorCat(numeroCategoria) {
    let tareasCategoria = filtrar(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function (contador, tarea) { return tarea.completada ? contador + 1 : contador; }, 0);
    let tareasEnTotal = tareasCategoria.length;
    console.log("tareas completadas de la categoria " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal);
}
//funcion que filtra tareas por categoria
function filtrar(numeroCategoria) {
    let tareasFiltradas = tareas.filter(function (tarea) {
        return tarea.categoria === numeroCategoria;
    })
    return tareasFiltradas;
}

// funcion que muestra las tareas por completar 
function Pendientes() {
    console.log("Tareas no completadas");
    tareas.forEach(function (tarea) {
        if (!tarea.completada) { console.log("Nombre: " + tarea.nombre + ", Categoria: " + categoriasNombres[tarea.categoria]); }
    });
}

//ordenar por nombre
function tareasPorNombre() {
    let total = tareas.length;
    for (let j = 0; j < tareas.length; j++) {
        for (let i = 0; i < total - 1; i++) {
            if (tareas[i].nombre > tareas[i + 1].nombre) {
                let temp = tareas[i];
                tareas[i] = tareas[i + 1];
                tareas[i + 1] = temp;
            }
        }
    }
}
//ordenar por fechalimite
function tareasPorFecha() {
    let total = tareas.length;
    for (let j = 0; j < tareas.length; j++) {
        for (let i = 0; i < total - 1; i++) {
            if (tareas[i].fechaLimite > tareas[i + 1].fechaLimite) {
                let temp = tareas[i];
                tareas[i] = tareas[i + 1];
                tareas[i + 1] = temp;
            }
        }
    }
}

// funcion que busca una tarea por su nombre y retorna su posicion:
function buscar(nombre) {
    tareasPorNombre();
    let inicio = 0;
    let limite = tareas.length - 1;
    while (inicio <= limite) {
        const indicemitad = Math.round((inicio + limite) / 2);
        const elemMedio = tareas[indicemitad];
        if (elemMedio.nombre === nombre) {
            return indicemitad;
        }
        else if (elemMedio.nombre > nombre) {
            limite = indicemitad - 1
        }
        else if (elemMedio.nombre < nombre) {
            inicio = indicemitad + 1
        }
    }
    return -1;
}



// funcion de menu de opciones
function mostrarMenu() {
    console.log("==============================");
    console.log("        MENU PRINCIPAL        ");
    console.log("==============================");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Ver todas las categorias");
    console.log("7. Agregar categoria");
    console.log("8. Filtrar tareas por categoria");
    console.log("9. Ver tareas completadas por categoria");
    console.log("10. Ver tareas pendientes");
    console.log("11. Ordenar tareas por nombre");
    console.log("12. Ordenar tareas por fecha limite");
    console.log("13. Buscar tareas por nombre");
    console.log("0. Salir");
    console.log("==============================");
}
// funcion de interaccion

function interactuar() {
    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("ingrese la opcion seleccionada: "))
      switch (opcion) {
        case 1:
            let nombreTareaNueva = prompt("ingrese nombre:");
            let fechaTareaNueva = prompt("ingrese fecha limite si la hay:");
              if (fechaTareaNueva === "") { fechaTareaNueva = null }
              agregarTarea(nombreTareaNueva, fechaTareaNueva);
              console.log(tareas[0].fechaLimite);
            break;
        case 2:
              let indiceEliminar = parseInt(prompt("ingrese el indice a eliminar:"));
              eliminarTarea(indiceEliminar);
            break;
        case 3:
              let indiceCompletar = parseInt( prompt("ingrese el indice a completar:"));
              tareaCompletada(indiceCompletar);
              break;
          case 4:
              let indice = parseInt(prompt("ingrese indice:"));

              let nuevoNombre = prompt("ingrese nuevo nombre:");
           
              let modificarFecha = prompt("ingrese nueva fecha limite si la hay:");
              console.log("lista de categorias");
              mostrarCategorias();
              let nuevaCat = parseInt(prompt("ingrese nueva categoria: "));
              if (modificarFecha === "") { modificarFecha = null }
              if (nuevoNombre === "") { nuevoNombre = null }
              modificarTarea(indice, nuevoNombre, modificarFecha,nuevaCat);
            
            break;
          case 5:
              console.log("lista de tareas");
              console.log(tareas);
              break;
          case 6:
              console.log("lista de categorias");
              mostrarCategorias();
              break;
          case 7:
              cargarCategoria(prompt("ingrese categoria nueva:"));
              break;
          case 8:
              mostrarCategorias();
              let nroCat = parseInt(prompt("ingrese numero de categoria: "));
              let tareasCategoria = filtrar(nroCat);
              console.log("tareas de la categoria seleccionada:");
              console.log(tareasCategoria);
              break;
          case 9:
              let nroCategoria = parseInt(prompt("Ingrese el numero de categoria a visualizar"));
              filtrarTareasCompletadasPorCat(nroCategoria);
              break;
          case 10:
              Pendientes();
              break;
          case 11:
              tareasPorNombre();
              console.log("Tareas por nombre: ");
              console.log(tareas);
              break;
          case 12:
              tareasPorFecha();
              console.log("Tareas por fecha: ");
              console.log(tareas);

              break;
          case 13:
              let nombreBuscar = prompt("Ingrese el nombre a buscar: ");
              let indiceTarea = buscar(nombreBuscar);
              if (indiceTarea > -1) {
                  console.log("Tarea encontrada en el índice: " + indiceTarea);
                  console.log(tareas[indiceTarea]);
              } else {
                  console.log("Tarea no encontrada");
              }
              break;
          default:
              console.log("opcion invalida");
    }
    }
  
}
interactuar();