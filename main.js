/* 
SEGUNDA PRE ENTREGA
Curso: JavaScript
Comision: 34125
Alumno: Federico Stemberger
*/



//declaracion de variables
let nombrePaciente;
let apellidoPaciente;
let numeroFactura;
let periodoFacturado;
let vencimiento;
let respuesta;
let opcion;
let comprobantes = [];
let nuevoComprobante;

//inicializacion de variable
let hayComprobante = false;

function agregarComprobante(){ //Pregunta al usuario los datos del comprobante y los guarda en un objeto dentro de un array.
    
    //declaración de la clase Comprobante
    class Comprobante{
        constructor(nombre, apellido, factura, periodo, vencimiento){
            this.nombre = nombre;
            this.apellido = apellido;
            this.factura = factura;
            this.periodo = periodo;
            this.vencimiento = vencimiento;
        }
    }
    
    //Se pide los datos del comprobante y se guardan en variables
    nombrePaciente = prompt("Ingrese el nombre del paciente");
    apellidoPaciente = prompt("Ingrese el apellido del paciente");
    numeroFactura = prompt("Ingrese el numero de factura");
    periodoFacturado = prompt("Ingrese el periodo facturado");
    vencimiento = prompt("Ingrese el el vencimiento para el pago");

    //Se crea un un objeto con los valores de las variables
    nuevoComprobante = new Comprobante(nombrePaciente, apellidoPaciente, numeroFactura, periodoFacturado, vencimiento);
    
    //Se agrega el nuevo objeto a un array
    comprobantes.push(nuevoComprobante);
}

function mostrarFactura(){ //Pide el numero de factura y se imprime por un alert.
    
    let numeroComprobante = parseInt(prompt("Ingrese el numero de comprobante que desea buscar: "));
    alert(`Comprobante N°: ${comprobantes[numeroComprobante-1].factura}
           Nombre: ${comprobantes[numeroComprobante-1].nombre}
           Apellido: ${comprobantes[numeroComprobante-1].apellido}
           Período: ${comprobantes[numeroComprobante-1].periodo}
           Vencimiento: ${comprobantes[numeroComprobante-1].vencimiento}`);
}

do{
    //Guarda en la variable "opcion" la opcion elegida.
    opcion = prompt("Carga de Comprobantes\n\nSeleccione una opcion:\n1. Cargar Comprobante.\n2. Mostrar Comprobantes cargados.\n3. Salir.");
    
    //Ejecuta en cada caso la opción elegida.
    switch(opcion){
        case "1": //Guarda en variables los datos del comprobante y pide, en caso de ser necesario, que complete todos los campos.
            agregarComprobante();
            while(nombrePaciente == "" || apellidoPaciente == "" || numeroFactura == "" || periodoFacturado == "" || vencimiento == ""){
                alert("Complete todos los espacios.");
                agregarComprobante();
            }
            hayComprobante = true;
            alert("Carga Finalizada.");
            break;
        
        case "2": //Muestra el comprobante. Si no hay imprime por alert un mensaje diciendo que no hay.
            if(hayComprobante == false){
                alert("Aún no hay comprobantes cargados.");
            }else{
                mostrarFactura();
            }
            break;
        
        case "3": //Se despide del usuario con un mensaje de agradecimiento.
            alert("Gracias por elegirnos.");
            break;

        default: alert("Error. Seleccione una opción válida");
    }

}while(opcion != 3); //Cuando el usuario pulse 3 el programa finalizará.


