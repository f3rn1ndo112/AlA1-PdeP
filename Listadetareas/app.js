import promptSync from 'prompt-sync';
const prompt = promptSync();

function menutareas(){
    console.log ("1.Ver mis tareas");
    console.log ("2.Buscar una tarea");
    console.log ("3.Agregar una tarea");
    console.log ("0.Salir");
}

function creaciontareas(cantidadtareas){
    let titulo;
    let descripcion;
    let estado;
    let dificultad;
    titulo = prompt("Ingrese el titulo de la tarea= ");
    descripcion = prompt("Ingrese la descripcion de la tarea= ");
    estado = prompt("Ingrese el estado de la tarea (P = pendiente, E = en proceso, F = finalizada, C = cancelada)= ");
    dificultad = Number(prompt("Ingrese la dificultad de la tarea (1, 2 o 3)= "));
    return{
        tarenanum : cantidadtareas + 1,
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        dificultad: dificultad,
    }
}

function listartareas(tareas){
    console.log("LISTADO DE TAREAS\n");
    for (let i = 0; i < tareas.length; i++){
        console.log("Tarea numero: " + tareas[i].tarenanum);
        console.log("Titulo: " + tareas[i].titulo);
        console.log("Descripcion: " + tareas[i].descripcion);
        console.log("Estado: " + tareas[i].estado);
        console.log("Dificultad: " + tareas[i].dificultad);
        console.log("\n");
    }
}

function main(){
    let tareas = [];
    let cantidadtareas = 0;
    let busqueda;
    let tarea;
    let opcion;
    let salir;
    let coincidencia = 0;
    salir = 1;
    while (salir == 1){
        menutareas();
        opcion = Number(prompt("Que desea hacer= "));
        switch (opcion){
            case 1:
                listartareas(tareas);
                break;
            case 2:
                busqueda = prompt("Ingrese el titulo de la tarea que desea buscar: ");
                for (let i = 0; i < tareas.length; i++){
                    if (tareas[i].titulo == busqueda){
                        console.log("Tarea numero: " + tareas[i].tarenanum);
                        console.log("Titulo: " + tareas[i].titulo);
                        console.log("Descripcion: " + tareas[i].descripcion);
                        console.log("Estado: " + tareas[i].estado);
                        console.log("Dificultad: " + tareas[i].dificultad);
                        console.log("\n");
                        coincidencia++;
                    }
                }
                if (coincidencia == 0){
                    console.log("\n");
                    console.log("No se encontro la tarea");
                    console.log("\n");
                }
                break;
            case 3:
                tarea = creaciontareas(cantidadtareas);
                tareas.push(tarea);
                cantidadtareas++;
                break;
            case 0:
                console.log("saliendo del programa...");
                salir = 0;
                break;
            default:
                console.log ("por favor ingrese una opcion correcta");
                break;
        }
    }
}
main()