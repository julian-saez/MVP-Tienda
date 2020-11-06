var carrito = []
   
console.log(carrito)

for(let i = 0; i <= 2; ++i){    


    let articulosJSON = localStorage.getItem("Articulos")
    let articulos = [JSON.parse(articulosJSON)];
    carrito.push(articulos)

    // CREO LOS ELEMENTOS 

    let article = document.createElement("article")
    let enlace = document.createElement("a")
    let img = document.createElement("img")
    let title = document.createElement("h3")
    let oferta = document.createElement("span")


    // ASIGNANDO LAS CLASES A LOS ELEMENTOS

    article.className = "articulo-compra"
    img.className = "image"
    img.src = carrito[i].imagen;
    title.className = "title"
    oferta.className = "oferta"

    title.innerHTML = carrito[i].nombre;
    oferta.innerHTML = carrito[i].precio;


    article.appendChild(enlace)
    article.appendChild(title)
    article.appendChild(oferta)
    enlace.appendChild(img)


    // CONTENEDOR CON EL LISTADO DE ARTICULOS GUARDADOS

    let container = document.getElementById("list")
    container.appendChild(article);
}