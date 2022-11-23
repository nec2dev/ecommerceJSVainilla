//Agrega un producto al carrito de compra
function agregarBoxesaCarrito(evento) {
    carrito.push(evento.target.getAttribute("marcador"));
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
    swal({
        title: "¡Producto agregado!",
        text: "El producto se ha agregado al carrito de compras",
        icon: "success",
        background: "#f9dee9",
    });
}

//Muestra el carrito de compra
function mostrarCarrito() {
    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = boxes.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? (total += 1) : total;
        }, 0);
        const miNodo = document.createElement("li");
        miNodo.className = `bg-black-100 shadow rounded overflow-hidden group w-full my-4`;
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre
            } - ${moneda} ${miItem[0].precio.toFixed(2)} = ${moneda} ${numeroUnidadesItem * miItem[0].precio
            }.00`;
        const miBoton = document.createElement("button");
        miBoton.textContent = "X";
        miBoton.className =
            "mx-4 px-3 py-2 bg-primary rounded-lg hover:bg-transparent hover:text-primary transition";
        miBoton.dataset.item = item;
        miBoton.addEventListener("click", borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
}

//Borra una box del carrito de compra
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

//Calcula el Precio final y muestra el detalle de las unidades en el carrito
function calcularTotal() {
    return carrito
        .reduce((total, item) => {
            const miItem = boxes.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0)
        .toFixed(2);
}

//Elimina todos los productos del carrito de compra
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
    swal({
        title: "¡Ojo!",
        text: "Se van a eliminar todos los productos del carrito de compras",
        icon: "warning",
        buttons: ["No, no quiero eliminar nada!", "Si, estoy seguro!"],
    });
}
DOMbotonVaciar.addEventListener("click", vaciarCarrito);


//Eventos
agregarCarritoDeLocalStorage();
mostrarCarrito();
agregarListadeDeseosDeLocalStorage();
mostrarListadeDeseos();