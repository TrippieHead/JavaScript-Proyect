//codigo html: <div id="contenedor"></div>

const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "pantalon", precio: 700 },
    { id: 3, nombre: "gorra", precio: 1300 },
    { id: 4, nombre: "zapato", precio: 1500 },
  ];
  
  let contenedor = document.getElementById("contenedor");
  let precio = parseInt(prompt("Ingrese el precio minimo"));
  
  let productosFiltrados = productos.filter(item => item.precio > precio);
  
  for (const producto of productosFiltrados) {
    let div = document.createElement("div");
    div.innerHTML = `<h3> ID: ${producto.id}</h3>
                     <p>Producto: ${producto.nombre}</p>
                     <b>${producto.precio}</b>`;
  
    contenedor.append(div);
  }