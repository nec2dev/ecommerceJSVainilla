// función que tras 2 segundo retorna un array de objetos
const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(boxes);
        }, 2000);
    });
};

//inicializamos con un array vacío
let productos = [];
const renderProductos = (arr) => {
    listarBoxes();
};
// asincrónicamente pedimos los datos y generamos la vista
pedirProductos().then((res) => {
    productos = res;
    renderProductos(productos);
});

//Eventos
agregarCarritoDeLocalStorage();
mostrarCarrito();
agregarListadeDeseosDeLocalStorage();
mostrarListadeDeseos();