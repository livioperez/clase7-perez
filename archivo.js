

function mas() {

    alert("Ingrese su nombre por favor");
    let nombre = prompt("Ingrese su Nombre");
    //nuevo intento
    if (nombre == "") {
        alert("Ingrese un nombre valido");
        mas()
    }
    else {
        alert(`Hola "${nombre}" Tengo una buena noticia, te vamos a generar un descuento!`);
        alert("El total que va a abonar es:");
    }
}

const arrayProductos = [];

class Varios {
    constructor(eleccion, precio) {
        this.eleccion = eleccion;
        this.precio = precio;
    }
} 


const gustos1 = new Varios(prompt("Ingrese una bebida que le gusta"));
arrayProductos.push(gustos1)
const gustos2 = new Varios(prompt("Que le gustaria comer? "));
arrayProductos.push(gustos2)
const gustos3 = new Varios(prompt("Que postre le gustaria?"));
arrayProductos.push(gustos3)
console.log("Esto es lo que usted a elegido");
for (let el of arrayProductos) {
    console.log(el.eleccion );
}

let plata = parseInt(prompt("Cuanto dinero tiene destinado a gastar?"));


if (plata == " ") {
    alert("Ingrese correctamente el importe");
}
else {
    mas();
}

alert(plata - (plata * 0.15));
