//Agrega un producto a la lista de deseos
function agregarBoxesaListadeDeseos(evento2) {
    listadeDeseos.push(evento2.target.getAttribute("marcador2"));
    mostrarListadeDeseos();
    guardarListadeDeseosEnLocalStorage();
    swal({
        title: "¡Producto agregado!",
        text: "El producto se ha agregado a tu lista de deseos!",
        icon: "success",
        background: "#f9dee9",
    });
}

//Muestra la lista de deseos
function mostrarListadeDeseos() {
    DOMlistadeDeseos.textContent = "";
    const listadeDeseosSinDuplicados = [...new Set(listadeDeseos)];
    listadeDeseosSinDuplicados.forEach((item2) => {
        const miItem2 = boxes.filter((itemBaseDatos2) => {
            return itemBaseDatos2.id === parseInt(item2);
        });
        const numeroUnidadesItem2 = listadeDeseos.reduce((total2, itemId2) => {
            return itemId2 === item2 ? (total2 += 1) : total2;
        }, 0);
        const miNodo2 = document.createElement("li");
        miNodo2.className = `bg-black-100 shadow rounded overflow-hidden group w-full my-4`;
        miNodo2.textContent = `${numeroUnidadesItem2} x ${miItem2[0].nombre
            } - ${moneda} ${miItem2[0].precio.toFixed(2)} = ${moneda} ${numeroUnidadesItem2 * miItem2[0].precio
            }.00`;
        const miBoton2 = document.createElement("button");
        miBoton2.textContent = "X";
        miBoton2.className =
            "mx-4 px-3 py-2 bg-primary rounded-lg hover:bg-transparent hover:text-primary transition";
        miBoton2.dataset.item2 = item2;
        miBoton2.addEventListener("click", borrarItemListadeDeseos);
        miNodo2.appendChild(miBoton2);
        DOMlistadeDeseos.appendChild(miNodo2);
    });
    DOMtotal2.textContent = calcularTotalDeseos();
}

//Borra una box de la lista de deseos
function borrarItemListadeDeseos(evento2) {
    const id2 = evento2.target.dataset.item2;
    listadeDeseos = listadeDeseos.filter((listadeDeseosId) => {
        return listadeDeseosId !== id2;
    });
    mostrarListadeDeseos();
    guardarListadeDeseosEnLocalStorage();
}

//Calcula el Precio final y muestra el detalle de las unidades en la lista de deseos
function calcularTotalDeseos() {
    return listadeDeseos
        .reduce((total2, item2) => {
            const miItem2 = boxes.filter((itemBaseDatos2) => {
                return itemBaseDatos2.id === parseInt(item2);
            });
            return total2 + miItem2[0].precio;
        }, 0)
        .toFixed(2);
}

//Elimina todos los productos de la lista de Deseos
function vaciarListadeDeseos() {
    listadeDeseos = [];
    mostrarListadeDeseos();
    localStorage.clear();
    swal({
        title: "¡Ojo!",
        text: "Se van a eliminar todos los productos de tu lista de Deseos",
        icon: "warning",
        buttons: ["No, no quiero eliminar nada!", "Si, estoy seguro!"],
    });
}
DOMbotonVaciar2.addEventListener("click", vaciarListadeDeseos);

//Eventos
agregarCarritoDeLocalStorage();
mostrarCarrito();
agregarListadeDeseosDeLocalStorage();
mostrarListadeDeseos();