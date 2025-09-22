import promptSync from 'prompt-sync';
const prompt = promptSync();

function menutareas(){
    console.log ("1.Ver mis tareas");
    console.log ("2.Buscar una tarea");
    console.log ("3.Agregar una tarea");
    console.log ("4.Modificar una tarea");
    console.log ("5.Eliminar una tarea");
    console.log ("0.Salir");
}

function creaciontareas(cantidadtareas){
    let titulo;
    let descripcion;
    let estado;
    let dificultad;
    let fechaVencimiento;
    titulo = prompt("Ingrese el titulo de la tarea: ");
    descripcion = prompt("Ingrese la descripcion de la tarea: ");
    estado = prompt("Ingrese el estado de la tarea (P = pendiente, E = en proceso, F = finalizada, C = cancelada): ");
    dificultad = Number(prompt("Ingrese la dificultad de la tarea (1, 2 o 3): "));
    fechaVencimiento = new  Date(prompt("ingrese la fecha de vencimiento de la tarea: (AAAA-MM-DD)"));
    return{
        tarenanum : cantidadtareas + 1,
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        dificultad: dificultad,
        fechaVencimiento: fechaVencimiento,
        fechaCreacion: new Date()
    }
}

function listartareas(tareas){
    console.log("LISTADO DE TAREAS\n");
    for (let i = 0; i < tareas.length; i++){
        if (tareas[i].tarenanum == -1) continue;
        console.log("Tarea numero: " + tareas[i].tarenanum);
        console.log("Titulo: " + tareas[i].titulo);
        console.log("Descripcion: " + tareas[i].descripcion);
        if (tareas[i].fechaVencimiento < new Date() && tareas[i].estado != 'F' && tareas[i].estado != 'C'){
            tareas[i].estado = 'Vencida';
        }else console.log("fecha de vencimiento: " + tareas[i].fechaVencimiento);
        console.log("Estado: " + tareas[i].estado);
        console.log("Dificultad: " + tareas[i].dificultad);
        console.log("\n");
    }
}

function main(){
    let tareas = [];
    let cantidadtareas = 0;
    let eleccion2;
    let tarea;
    let opcion;
    let salir;
    let coincidencia;
    salir = 1;
    while (salir == 1){
        coincidencia = 0;
        menutareas();
        opcion = Number(prompt("Que desea hacer= "));
        switch (opcion){
            case 1:
                listartareas(tareas);
                break;
            case 2:
                eleccion2 = prompt("Ingrese el numero de la tarea que desea buscar: ");
                for (let i = 0; i < tareas.length; i++){
                    if (tareas[i].tarenanum == eleccion2){
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
            case 4:
                eleccion2 = Number(prompt("Ingrese el numero de la tarea que desea modificar: "));
                for (let i = 0; i < tareas.length; i++){
                    if (tareas[i].tarenanum == eleccion2){
                        switch (eleccion2 = Number(prompt("Que desea modificar? 1.Titulo, 2.Descripcion, 3.Estado, 4.Dificultad, 5.Fecha de vencimiento"))){
                            case 1:
                                tareas[i].titulo = prompt("Ingrese el nuevo titulo: ");
                                break;
                            case 2:
                                tareas[i].descripcion = prompt("Ingrese la nueva descripcion: ");
                                break;
                            case 3:
                                tareas[i].estado = prompt("Ingrese el nuevo estado (P = pendiente, E = en proceso, F = finalizada, C = cancelada): ");
                                break;
                            case 4:
                                tareas[i].dificultad = Number(prompt("Ingrese la nueva dificultad (1, 2 o 3): "));
                                break;
                            case 5:
                                tareas[i].fechaVencimiento = new  Date(prompt("ingrese la nueva fecha de vencimiento de la tarea: (AAAA-MM-DD)"));
                                break;
                            default
                                : console.log("Opcion incorrectam, volviendo al menu principal...");
                                break;
                        }
                        coincidencia++;
                    }  
                }
                if (coincidencia == 0){
                    console.log("\n");
                    console.log("No se encontro la tarea");
                    console.log("\n");
                }
                break;
            case 5:
                eleccion2 = Number(prompt("Ingrese el numero de la tarea que desea eliminar: "));
                for (let i = 0; i < tareas.length; i++){
                    if (tareas[i].tarenanum == eleccion2){
                        tareas[i].tarenanum = -1;
                        coincidencia++;
                    }
                }
                if (coincidencia == 0){
                    console.log("\n");
                    console.log("No se encontro la tarea");
                    console.log("\n");
                }
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