window.onload= () =>{


//-------MODO OSCURO/CLARO-----------//
const $buttonFoco = document.querySelector("#foco"); 
const body = document.querySelector(".modo-oscuro");

$buttonFoco.addEventListener('click', () => {   
body.classList.toggle('modo-oscuro');
body.classList.toggle('modo-claro');
console.log("si")
});

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

function $(element){            //<<=====OPCIONES-DE-IMAGEN------//
    return document.querySelector(element)
}

const $buttonDescarga = $("#btn-descarga");
const $inputUrl = $("#url");
const $inputColorBackg = $("#colorBackground");
const $selectOpcipnesFondo = $("#opciones-fondo");
const $inputBrillo = $("#brillo");
const $inputOpacidad = $("#opacidad");
const $inputContraste = $("#contraste");
const $inputDesenfoque = $("#desenfoque");
const $inputEscala = $("#escala");
const $inputSepia = $("#sepia");
const $inputHue = $("#hue");
const $inputSaturado = $("#saturado");
const $inputNegativo = $("#negativo");
const $buttonRestablecer = $("#restablecer");
const $imgDescargada = $("#imagen-descargada");
const $sectionContenedor = $("#contenedor-meme");


$inputUrl.addEventListener("click", () =>{  
    $imgDescargada.src = $inputUrl.value
    console.log("url")

})

$inputColorBackg.addEventListener("input", () =>{
    $divContenedorImagen.style.backgroundColor= $inputColorBackg.value
    console.log($inputColorBackg.value)
})

$selectOpcipnesFondo.addEventListener("input", () =>{
    $divContenedorImagen.style.backgroundBlendMode= $selectOpcipnesFondo.value
    console.log($selectOpcipnesFondo.value)
})

$inputBrillo.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputBrillo.value
    console.log($inputBrillo.value)
});

$inputOpacidad.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputOpacidad.value
    console.log($inputOpacidad.value)
});

$inputContraste.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputContraste.value
    console.log($inputContraste.value)
});

$inputDesenfoque.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputDesenfoque.value
    console.log($inputDesenfoque.value)
});

$inputEscala.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputEscala.value
    console.log($inputEscala.value)
});

$inputSepia.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputSepia.value
    console.log($inputSepia.value)
});

$inputHue.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputHue.value
    console.log($inputHue.value)
});

$inputSaturado.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputSaturado.value
    console.log($inputSaturado.value)
});

$inputNegativo.addEventListener("input", () =>{
    $imgDescargada.style.filter = $inputNegativo.value
    console.log($inputNegativo.value)
});

$buttonDescarga.addEventListener("click", () =>{
    domtoimage.toBlob($sectionContenedor)
    .then((blob) => {
    saveAs(blob, "my-meme.png");
    console.log("descarga lista")
})
})


function restablecerValores(){
    $inputBrillo.value = "1"
    $inputOpacidad.value = "1"
    $inputContraste.value ="100%"
    $inputDesenfoque.value = "0px"
    $inputEscala.value = "0%"
    $inputSepia.value = "0%"
    $inputHue.value = "0deg"
    $inputSaturado.value ="100%"
    $inputNegativo.value = "1"
};

restablecerValores()

$buttonRestablecer.addEventListener("click", restablecerValores)
console.log("restablecer");




function $(element){           //<<=======OPCIONES-DE-TEXTO-------//                
    return document.querySelector(element)
}
  
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
});

$inputBottomText.addEventListener("input", () =>{
    $pTextoAbajo.innerText = $inputBottomText.value
    console.log("bottomtext")
});

$inputCheckBox.addEventListener("click", () =>{
    if ($inputCheckBox.checked) {    // si el checkbox está marcado
        $pTextoArriba.style.display = "none";  // oculta el texto
    } else {  // si el checkbox no está marcado
        $pTextoArriba.style.display = "block";  // muestra el texto
    }
    console.log("check")
});

$inputCheckBox2.addEventListener("click", () =>{
    if($inputCheckBox2.checked){
        $pTextoAbajo.style.display= "none";
    } else {
        $pTextoAbajo.style.display= "block"
    }
    console.log("check2")
});

$selectClasesFuentes.addEventListener("input", () =>{
    $pTextoArriba.style.fontFamily = $selectClasesFuentes.value
    $pTextoAbajo.style.fontFamily = $selectClasesFuentes.value
    console.log($selectClasesFuentes.value)
});

$inputTamañoTexto.addEventListener("input", () =>{
    $pTextoArriba.style.fontSize = $inputTamañoTexto.value + "px" //esto de agregar px no lo sabia, me ayudo google
    $pTextoAbajo.style.fontSize = $inputTamañoTexto.value + "px"
    console.log($inputTamañoTexto.value)
});

$buttonIzquierda.addEventListener("click", () =>{
    $pTextoArriba.style.textAlign = $buttonIzquierda.value
    $pTextoAbajo.style.textAlign = $buttonIzquierda.value
    console.log($buttonIzquierda.value)
});

$buttonCentro.addEventListener("click", () =>{
    $pTextoArriba.style.textAlign = $buttonCentro.value
    $pTextoAbajo.style.textAlign = $buttonCentro.value
    console.log($buttonCentro.value)
});

$buttonDerecha.addEventListener("click", () =>{
    $pTextoArriba.style.textAlign = $buttonDerecha.value
    $pTextoAbajo.style.textAlign = $buttonDerecha.value
    console.log($buttonDerecha.value)
});

$inputColor.addEventListener("input", () =>{
    $pTextoArriba.style.color = $inputColor.value
    $pTextoAbajo.style.color = $inputColor.value
    console.log("color")
});

$inputFondo.addEventListener("input", () =>{
    $divContenedorImagen.style.backgroundColor = $inputFondo.value
    console.log("fondo")
});

$inputCheck.addEventListener("click", () =>{
    if($inputCheck.checked){
        $divContenedorImagen.style.backgroundColor = "transparent"
    } else {
        $divContenedorImagen.style.backgroundColor = "black"
    }
});

$buttonNinguno.addEventListener("click", () =>{
    $pTextoArriba.style.textShadow = $buttonNinguno.value
    $pTextoAbajo.style.textShadow = $buttonNinguno.value
    console.log("ninguno")
});

$buttonClaro.addEventListener("click", () =>{
    $pTextoArriba.style.textShadow = "2px 2px 3px white"
    $pTextoAbajo.style.textShadow = "2px 2px 3px white"
    console.log("claro")
});

$buttonOscuro.addEventListener("click", () =>{
    $pTextoArriba.style.textShadow = "2px 2px 3px black"
    $pTextoAbajo.style.textShadow = "2px 2px 3px black"
    console.log("oscuro")
});

$inputEspacio.addEventListener("input", () =>{       //no funciona como debe ser!
    $pTextoArriba.style.padding = $inputEspacio.value + "px"
    $divContenedorImagen.style.padding = $inputEspacio.value + "px"
    $pTextoAbajo.style.padding = $inputEspacio.value + "px"
    console.log($inputEspacio.value)
});

$selectInter.addEventListener("input", ()=>{
    $pTextoArriba.style.lineHeight = $selectInter.value
    $pTextoAbajo.style.lineHeight = $selectInter.value
    console.log($selectInter.value)
});

}

