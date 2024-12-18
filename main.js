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

const $sectionContenedor = $("#contenedor-meme");
const $inputTopText = $("#top-text");
const $pTextoArriba = $("#texto-arriba");
const $inputBottomText = $("#bottom-text");
const $pTextoAbajo = $("#texto-abajo");
const $labelTextoSuperior = $("#texto-superior");
const $inputCheckBox = $("#checkbox")
const $labelTextoInferior = $("#texto-inferior");
const $inputCheckBox2 = $("#checkbox2")
const $selectClasesFuentes = $("#clases-fuentes");
const $divTamañoAlineacion = $("#tamaño-alineacion");
const $inputTamañoTexto = $("#tamaño-texto");
const $buttonIzquierda = $("#izquierda");
const $buttonCentro = $("#centro");
const $buttonDerecha = $("#derecha");
const $inputColor = $("#input-color");
const $inputFondo = $("#input-fondo");
const $divContenedorImagen = $(".contenedor-imagen");
const $inputCheck = $("#input-check");
const $buttonNinguno = $("#btn-ninguno");
const $buttonClaro = $("#btn-claro");
const $buttonOscuro = $("#btn-oscuro");
const $inputEspacio = $("#input-espacio");
const $selectInter = $("#inter-select");

$inputTopText.addEventListener("input", () =>{
    $pTextoArriba.innerText = $inputTopText.value
    console.log("toptext")
})

$inputBottomText.addEventListener("input", () =>{
    $pTextoAbajo.innerText = $inputBottomText.value
    console.log("bottomtext")
})

$inputCheckBox.addEventListener("click", () =>{
    if ($inputCheckBox.checked) {    // si el checkbox está marcado
        $pTextoArriba.style.display = "none";  // oculta el texto
    } else {  // si el checkbox no está marcado
        $pTextoArriba.style.display = "block";  // muestra el texto
    }
    console.log("check")
})

$inputCheckBox2.addEventListener("click", () =>{
    if($inputCheckBox2.checked){
        $pTextoAbajo.style.display= "none";
    } else {
        $pTextoAbajo.style.display= "block"
    }
    console.log("check2")
})

$selectClasesFuentes.addEventListener("input", () =>{
    $pTextoArriba.style.fontFamily = $selectClasesFuentes.value
    $pTextoAbajo.style.fontFamily = $selectClasesFuentes.value
    console.log($selectClasesFuentes.value)
})

$inputTamañoTexto.addEventListener("input", () =>{
    $pTextoArriba.style.fontSize = $inputTamañoTexto.value + "px" //esto de agregar px no lo sabia, me ayudo google
    $pTextoAbajo.style.fontSize = $inputTamañoTexto.value + "px"
    console.log($inputTamañoTexto.value)
})

$buttonIzquierda.addEventListener("click", () =>{
    $pTextoArriba.style.textAlign = $buttonIzquierda.value
    $pTextoAbajo.style.textAlign = $buttonIzquierda.value
    console.log($buttonIzquierda.value)
})

$buttonCentro.addEventListener("click", () =>{
    $pTextoArriba.style.textAlign = $buttonCentro.value
    $pTextoAbajo.style.textAlign = $buttonCentro.value
    console.log($buttonCentro.value)
})

$buttonDerecha.addEventListener("click", () =>{
    $pTextoArriba.style.textAlign = $buttonDerecha.value
    $pTextoAbajo.style.textAlign = $buttonDerecha.value
    console.log($buttonDerecha.value)
})

$inputColor.addEventListener("input", () =>{
    $pTextoArriba.style.color = $inputColor.value
    $pTextoAbajo.style.color = $inputColor.value
    console.log("color")
})

$inputFondo.addEventListener("input", () =>{
    $divContenedorImagen.style.backgroundColor = $inputFondo.value
    console.log("fondo")
})

$inputCheck.addEventListener("click", () =>{
    if($inputCheck.checked){
        $divContenedorImagen.style.backgroundColor = "transparent"
    } else {
        $divContenedorImagen.style.backgroundColor = "black"
    }
})











}

