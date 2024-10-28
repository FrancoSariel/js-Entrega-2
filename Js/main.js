const arrayProductos = document.getElementById("arrayProductos");
const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carrito-container");


const productos = [
    {
        id: 1,
        nombre: "Amortiguadores",
        precio: 250000,
        img: 
        "img/amortiguador deportivo.webp",
    },
    {
        id: 2,
        nombre: "Espirales Deportivo",
        precio: 125000,
        img: 
        "img/espirales deportivo.jpg",
    },
    {
        id: 3,
        nombre: "Kit Suspension Neumatica",
        precio: 850000,
        img: 
        "img/kit neumatica castor.webp",
    },
    {
        id: 4,
        nombre: "Kit Suspension Neumatica 2",
        precio: 1000000 ,
        img: 
        "img/kit neumatica airlift.jpg",
    },
];

let carrito = [];
productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "cards";
    content.innerHTML = `
     <img src="${product.img}">
     <h3>${product.nombre}</h3>
     <p class= "precio">${product.precio} $</p>       
    `;
    arrayProductos.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Añadir al Carrito";
    comprar.className = "añadirCarrito";

    content.append(comprar);

    comprar.onclick = () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        });
        console.log(carrito);
    }
});
verCarrito.onclick = () => {
    carritoContainer.innerHTML = "";
    carritoContainer.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h2 class="carrito-header-h2"> Compra </h2>
    `;
    carritoContainer.append(carritoHeader);
    const carritoButton = document.createElement("h3");
    carritoButton.innerText = "X";
    carritoButton.className = "carrito-button";


    carritoButton.onclick = () => {
        carritoContainer.style.display = "none";
    };


    carritoHeader.append(carritoButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-content";
        carritoContent.innerHTML = `
        <img src= "${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;
        carritoContainer.append(carritoContent);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const comprarTotal = document.createElement("div");
    comprarTotal.className ="compra-total";
    comprarTotal.innerHTML = `Comprar total: ${total} $`;
    carritoContainer.append(comprarTotal);
};