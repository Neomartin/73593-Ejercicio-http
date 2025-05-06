// 1- Definir variable de productos
let productos = [];
// 2- Obtener el elemento del DOM (HTML) donde se mostrarán los productos
const contenedorProductos = document.getElementById("product-container")

// 3- Crear función para obtener productos
function obtenerProductos() {
    axios.get("https://fakestoreapi.com/products") // Esto devuelve una promesa
            .then((respuesta) => {
                console.log(respuesta.data);
                // Deberiamos pintar los productos en el HTML usando nuestra funcion pintarProductos
                productos = respuesta.data;

                pintarProductos(productos)
            })
            .catch((error) => {
                console.warn(error);
            })
}       


obtenerProductos()

// 4- Crear función para mostrar productos
function pintarProductos(arrayProductos) {

    arrayProductos.forEach(prod => {
        
        // Pintar un div card por cada uno de ellos
        contenedorProductos.innerHTML += `<div class="card">
              <img src="${prod.image}" class="card-img-top" alt="${prod.title}" />
              <div class="card-body">
                <h5 class="card-title" title="${prod.title}">${prod.title}</h5>
                <a
                  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
                  Get a free kitten!</a
                >
                <p class="card-text" title="${prod.description}">
                  ${prod.description}
                </p>

                <p class="fw-bold h4 text-primary">$ 
                    ${prod.price}
                </p>
                <a href="/product-detail/${prod.id}" class="btn btn-dark">Ver más</a>
              </div>
            </div>`;
    })

}


