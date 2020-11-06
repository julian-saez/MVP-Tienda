// El ejercicio integrador es el e-commerce. 
// Como primer objetivo parte de mostrar un listado de imagenes que se corresponden con un producto y poder
// agregar cada uno de esos productos a un carrito. Este carrito debe persistir mas alla de un refresco de la pantalla.
// Como consigna se espera q puedan trabajar en un diseño para proponerlo, y obviamente en la logica de agregar el producto
// al carrito de compras. Esa es la version MVP. Esta funcionalidad luego se ira ampliando. 

// RECUERDEN QUE ENTRE LAS NOTAS DE CLASE 25 Y 26 ESTA EL MANEJO DEL DOM, CREACION DE NUEVOS ELEMENTOS, APPENDCHILD, Y MANEJO DE LOCALSTORAGE.





// pasos para lograr el objetivo.

// HACER UN DISEÑO COMO PARA QUE SEPAN HACIA DONDE VA LA CONSIGNA. Y PARA Q CONOZCAN LA ESTRUCTURA A GENERAR DESDE JAVASCRIPT.


// 1) - Definir una clase que represente un producto. La clase tendra propiedades como, titulo, precio, urlImagen, descripcion, id, etc. Todas las propiedades
// que necesiten para completar el diseño que propongan. (Fijense que es necesario que cada producto tenga un id, pq es una propiedad q nos va a permitir distinguir
// un producto de otro. Obvio el id siempre tiene q ser unico, en este caso puede ser un numero, un string, etc.)
// La clase es opcional tambien, ya saben que si no hacen una clase, pueden hacer objetos literales. Pero en este caso aplicaria mas crear una clase.

//TODO: hacer aca el codigo que define la clase.


// 2) - Una vez definida la clase, crear los productos utilizando esa clase (con el operador new) y almacenar esos productos en un array. Es decir lo que 
// se va a terminar mostrando en la pagina todos los productos que tenga cargado el array.

// TODO: crear los objetos y agregarlos al array de productos.


let array = [
    {nombre: "Air Shoes", imagen: "assets/air.jpg", precio: 7000, oferta: 4999, id: "art1"},
    {nombre: "Blow Shoes", imagen: "assets/blow.jpg", precio: 7000, oferta: 4999, id: "art2"},
    {nombre: "Flash Shoes", imagen:'assets/flash.jpg', precio: 6800, oferta: 5999, id: "art3"},
    {nombre: "Rain Shoes", imagen:'assets/rain.jpg', precio: 10000, oferta: 8199, id: "art4"},
    {nombre: "Torm Shoes", imagen:'assets/torm.jpg', precio: 7900, oferta: 6899, id: "art5"},
    {nombre: "Earth Shoes", imagen:'assets/earth.jpg', precio: 15000, oferta: 9999, id: "art6"}
]

console.log(array);


// 3) - Recorrer el array de productos para poder generar el html necesario para mostrar los productos cargados. Para generar este html ya sabemos que tenemos
// que usar document.createElement y element.appendChild() para crear la estructura y luego inyectarla en el elemento que deseamos que se vea.
// POR CADA PRODUCTO DEL ARRAY, SEGURAMENTE VAMOS A CREAR MINIMO 1 IMAGEN Y 1 BOTON, debido a que cada producto tiene su propio boton de agregar al carrito.
// EN CADA BOTON GENERADO, RECORDAR IR HACIENDOLE EL addEventListener para que en cada click llame a una funcion que va a agregar el producto al carrito.
// Para que sea mas facil de identificar el evento, al boton ponganle como id el id del producto contenido en el array.
// TODO: hacer una funcion que recorre el array de productos (recibiendolo por parametro), y se encarga de generar todos los elementos del dom y al finalizar
// el recorrido del array agrega esos elementos al html.


for(let i= 0; i <= array.length; ++i){    
    let card = document.createElement('article') // CREE UN <article></article>


    let box1 = document.createElement('div') // CREE UN <div></div>
    let box2 = document.createElement('div') // CREE UN <div></div>
    var btn = document.createElement('button') // CREE UN <button></button>
    btn.classList.add("item", array[i].id)
    btn.id = array[i].id;


    // IMAGEN DEL PRODUCTO
    let enlace = document.createElement("a") // CREE UN <a></a>
    let img = document.createElement("img") // CREE UN <img></img>, ES HIJO DE <a></a>

    // DENTRO DE <div class="flex-articles"</div>

    let boxHijo = document.createElement('div') // CREE UN <div></div>
    let title = document.createElement("h3");
    let brand = document.createElement("h4");
    let precioTachado = document.createElement("span") // CREA UN <span></span>
    let oferta = document.createElement("span") // CREE UN <span></span>

    // CLASES

    card.className = "articles"; 
    btn.className = "add fas fa-plus-square";
    img.className = "image";
    box2.className = "flex-articles"; 
    title.className = "title";
    brand.className = "brand";
    precioTachado.className = "tachado"; 
    oferta.className = "oferta";


    // LE INDICO EL INDICE DEL ELEMENTO DEL ARRAY A MOSTRAR

    title.innerHTML = array[i].nombre;
    img.src = array[i].imagen;
    enlace.href = "#";
    precioTachado.innerHTML = "$" + array[i].precio;
    oferta.innerHTML = "$" + array[i].oferta;


    // DECLARO LOS HIJOS DE CADA ELEMENTO

    card.appendChild(box1)
    card.appendChild(box2)
    box1.appendChild(btn)
    box1.appendChild(enlace)
    enlace.appendChild(img)
    box2.appendChild(boxHijo)
    boxHijo.appendChild(title)
    boxHijo.appendChild(brand)
    boxHijo.appendChild(precioTachado)
    boxHijo.appendChild(oferta)

    // ESPECIFICO DONDE QUIERO QUE SE VEAN LOS ELEMENTOS CREADOS.

    let contenedor = document.getElementById("articles");
    contenedor.appendChild(card);

    class Carrito{
        constructor(nombre, precio, imagen){
            this.nombre = nombre;
            this.precio = precio;
            this.imagen = imagen;
        }
    }

    var miCarrito = []


    btn.addEventListener("click", function añadir(e){
        // Obtengo el nombre y el precio y lo guardo en una variable

        let nombreArt = title.innerHTML;
        console.log(nombreArt);

        let ofertaArt = oferta.innerHTML;
        console.log(ofertaArt);

        let imageArt = img.src;
        console.log(imageArt);


        let añadido = new Carrito(nombreArt, ofertaArt, imageArt);
        miCarrito.push(JSON.stringify(añadido));

        localStorage.setItem("Articulos", miCarrito);

        // localStorage.removeItem("Articulos")
    });
}




// 4) - El carrito, no va a ser otra cosa que un array que puede tener objetos tambien. Cada vez que alguien agregue un producto, ese producto se agregara al array de carrito.
// Definir la funcion que escucha el click de los botones de "agregar al carrito". Si siguieron el consejo de que cada id del boton tiene el mismo id 
// que tiene cada producto. Pueden usar esa informacion para saber que producto se esta queriendo agregar. Recuerden que si la funcion del addEventListener asociado
// al click del boton tiene un parametro, javascript va a poner dentro de ese parametro toda la informacion referida al evento. Entre toda esa info esta el target
// que es el elemento clickeado, entonces si hacen  param.target.id <-- ese seria el id del producto agregado al carrito, entonces tendrian que buscar en el array 
// de productos el objeto asociado a ese id, y ahi ya tendrian cual fue el producto agregado. Una vez identificado el producto, simplemente pushearlo al array del
// carrito.

// TODO: definir la funcion que escucha el click del boton del carrito.







// 5) - Si ya tienen la funcion que agrega al carrito, seguramente el array de carrito ya esta recibiendo productos. Uno de los puntos propone que no se borre el carrito
// luego de que en la pagina se presiona un F5.
// para lograr este comportamiento hay q usar el localStorage. Entonces, inmediatamente luego de hacer push sobre el array de carrito. Guardar ese array en local storage.
// recuerden que para guardar objetos (en este caso es un array de objetos) hay que hacer JSON.stringify(arrayCarrito). 
// la sentencia para guardar en local storage es localStorage.setItem("clave", JSON.stringify(arrayCarrito))

// TODO: modificar la funcion para que cada vez q se agregue un item al carrito, guarde el array en local storage.



// 6) - Una vez guardada la informacion en localStorage, tenemos que contemplar el escenario en que nuestra pagina inicie y el carrito ya tenga informacion (que quedo 
// almacenada previamente en localStorage de alguna otra navegacion previa). 
// cuando declaramos el arrayCarrito = [] como array vacio, no siempre va a estar vacio, pq si en localStorage hay algo, lo tenemos que cargar.
// entonces solicitamos la informacion del local storage con la sentencia localStorage.getItem("clave"); 
// Si en localStorage habia algo, nos va a devolver el string que estaba guardado, si no habia nada nos va a devolver null. Recuerden validar eso.
// si habia algo, esa info la guardamos en una variable, recuerden que esa info es string (debido a que para guardarla le hicimos JSON.stringify()), entonces debemos hacer 
// la inversa para que vuelva a ser un objeto de javascript, entonces le hacemos un JSON.parse(objString) y el resultado de eso seria nuestro arrayCarrito que en algun momento
// guardamos.

// TODO: modificar el inicio del script, para que al declarar el array carrito, en vez de arrancar siempre como vacio [], lea el local storage y si hay algo lo cargue
// en el array.


