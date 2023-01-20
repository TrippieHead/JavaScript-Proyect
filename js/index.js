const productos = document.getElementById('productos');
const templateCard = document.getElementById('template-card').content;
const templateCarrito = document.getElementById('template-carrito').content;
const items = document.getElementById('items');
const templateFooter = document.getElementById('template-footer').content;
const footerCarrito = document.getElementById('footer');
const fragment = document.createDocumentFragment();
let carrito = {};

//Eventos 

productos.addEventListener('click', e => {
    addCarrito(e);
})

items.addEventListener('click', e => {
    btnAccion(e);
})

//Renderiza los productos en pantalla

const renderizarProductos = () => {
    baseDeDatos.forEach(producto => {
        templateCard.querySelector('h6').textContent = producto.nombre;
        templateCard.querySelector('p').textContent = '$' + producto.precio;
        templateCard.querySelector('img').setAttribute('src', producto.imagen)
        templateCard.querySelector('.btn').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.append(clone)
    })

    productos.append(fragment);
}

//Agrega productos al carrito

const addCarrito = e => {
    if(e.target.classList.contains('btn')){
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

//Seteamos el carrito, crea coleccion de objetos y manipula la cantidad

const setCarrito = (objeto) => {
    const producto = {
        id: objeto.querySelector('.btn').dataset.id,
        nombre: objeto.querySelector('h6').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}

    renderizarCarrito()
}

//Renderiza el carrito como tal

const renderizarCarrito = () => {
    items.innerHTML = '';
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id;
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio;

        const clone = templateCarrito.cloneNode(true);
        fragment.append(clone)
    }) 

    items.append(fragment);

    renderizarFooter();

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

//Renderiza footer del carrito, suma cantidad total y precio total

const renderizarFooter = () => {
    footerCarrito.innerHTML = '';
    if(Object.keys(carrito).length === 0){
        footerCarrito.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
        return
    }

    const sumaCantidades = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);
    const sumaPrecios =  Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0);

    templateFooter.querySelectorAll('td')[0].textContent = sumaCantidades;
    templateFooter.querySelector('span').textContent = sumaPrecios;

    const clone = templateFooter.cloneNode(true);
    fragment.append(clone);
    footerCarrito.append(fragment);

    btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', () =>{
        carrito = {};
        renderizarCarrito()
    })

}

//Seteamos las acciones de los botones internos del carrito (agregar y quitar)

const btnAccion = e => {
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = {...producto};
        renderizarCarrito();
    }

    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }

        renderizarCarrito();
    }

    e.stopPropagation();
}

if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'));
    renderizarCarrito();
}

renderizarProductos();
