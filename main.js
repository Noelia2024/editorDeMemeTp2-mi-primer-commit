/*domtoimage.toBlob($card).then((blob) => {
    saveAs(blob, "my-meme.png");
});*/

//-------MODO OSCURO/CLARO-----------//
const $buttonFoco = document.querySelector("#foco");
const body = document.querySelector(".modo-oscuro");

$buttonFoco.addEventListener('click', () => {   
    body.classList.toggle('modo-oscuro');
    body.classList.toggle('modo-claro');
    console.log("si")
})

//-----CAMBIO DE IMAGEN A TEXTO-------//
function $(element){
    return document.querySelector(element);
}
const $buttonImagen = $("#imagen");
const $buttonTexto = $("#texto");
const $asideImagen = $("#opciones-imagen");
const $asideTexto = $("#opciones-texto");

//---funcion para ocultar ambos aside----//
function ocultarOpciones(){
    console.log("ocultar")
    $asideImagen.style.display = "none";
    $asideTexto.style.display = "none";
}

//---Evento para el boton Imagen----//
$buttonImagen.addEventListener("click", () => {
    console.log("click")
    ocultarOpciones();
    $asideImagen.style.display= "block"
});
//----Evento para el boton Texto----//
$buttonTexto.addEventListener("click", () =>{
    console.log("ok")
    ocultarOpciones();
    $asideTexto.style.display= "block";
})

//---Top/Bottom-Tex---//
//function $(element){
   // return document.querySelector(element)
//}

const $textAreaTop = document.querySelector("#top-tex");
const $pTextoArriba =document.querySelector("#texto-arriba");
const $textAreaBottom = document.querySelector("#bottom-text");
const $pTextoAbajo = document.querySelector("#texto-abajo");


