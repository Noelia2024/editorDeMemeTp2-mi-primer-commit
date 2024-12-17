window.onload= () =>{
    //domtoimage.toBlob($card).then((blob) => {
   // saveAs(blob, "my-meme.png");
//});

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

//--Opciones de texto-Top/Bottom-Tex---//
function $(element){
    return document.querySelector(element)
}

const $inputTopText = $("#top-tex");
const $pTextoArriba = $("#texto-arriba");
const $inputBottomText = $("#bottom-text");
const $pTextoAbajo = $("#texto-abajo");
const $labelTextoSuperior = $("#texto-superior");
const $labelTextoInferior = $("#texto-inferior");
const $selectClasesFuentes = $("#clases-fuentes");
const $inputTamañoTexto = $("#tamaño-texto");
const $buttonIzquierda = $("#izquierda");
const $buttonCentro = $("#centro");
const $buttonDerecha = $("#derecha");
const $inputColor = $("#input-color");
const $inputFondo = $("#input-fondo");
const $inputCheck = $("#input-check");
const $buttonNinguno = $("#btn-ninguno");
const $buttonClaro = $("#btn-claro");
const $buttonOscuro = $("#btn-oscuro");
const $inputEspacio = $("#input-espacio");
const $selectInter = $("#inter-select");

$inputTopText.addEventListener("input", () =>{
    $pTextoArriba.innerText = $inputTopText.value
})





}

