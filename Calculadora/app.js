import promptSync from 'prompt-sync';
const prompt = promptSync();

async function main () {
    console.log("¡Hola! Bienvenido/a a la calculadora!");

    while (true) {
        console.log("\nOpciones:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("0. Salir");

        let opcion = Number(prompt("Seleccione una opcion: "));
        console.clear();

        if (opcion == 0) {
            console.log("¡Hasta luego!");
            break;
        }

        let num1 = parseFloat(prompt("Ingrese el primer numero: "));
        let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

        let resultado;
        switch (opcion) {
            case 1:
                resultado = num1 + num2;
                break;
            case 2:
                resultado = num1 - num2;
                break;
            case 3:
                resultado = num1 * num2;
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Error: No se pudo dividir por cero, cabezon.");
                    continue;
                } 
                resultado = num1 / num2;
                break;
            default:
                console.log("Opcion invalida. Intente de nuevo.");
                break;
        }

        console.log("Resultado: " + resultado);
        prompt("Presione Enter para continuar...");
        console.clear();
    }   
}

main();

