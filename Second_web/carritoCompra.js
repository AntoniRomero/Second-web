//Mostramos nuestros articulos en la tienda
const articulos = [
	{id:1, nombre:'Gafa 1', precio: 15},
	{id:2, nombre:'Gafa 2', precio: 10},
	{id:3, nombre:'Gafa 3', precio: 5}
]

for(articulo of articulos){
    document.body.innerHTML += `<div class='articulo'><p>Articulo: ${articulo.nombre}</p><p>Precio: ${articulo.precio} $</p></div>`;
    document.body.innerHTML += `<button type="submit" onclick='comprar("${articulo.nombre}")'>compra</button>`;
}


//Agregamos articulos al carrito
let carrito=[];

function comprar(nombre)
{
    carrito.push(nombre)    
    console.log(carrito)
}







var string1= "hola"
var string2= 'hola'
var string1= `hola` //Cuando quieres incluir codigo javascript en html





