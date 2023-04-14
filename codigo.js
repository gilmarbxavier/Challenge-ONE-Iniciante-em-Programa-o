var texto = document.getElementById("text")
var recebe = document.getElementById("recebe")
var btncript = document.getElementById("btn")
var btnDesc = document.getElementById("btn2")
var btnCopy = document.getElementById("copy")
var btnClear = document.getElementById("limpar")



function criptografar(msg){
    recebe.innerHTML = msg.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")
}

function chamarcriptografar(){
    criptografar(texto.value)
    texto.value = ""
}


function descriptografa(msg){
    recebe.value = msg.replaceAll(/enter/g,"e").replaceAll(/imes/g,"i").replaceAll(/ai/g,"a").replaceAll(/ober/g,"o").replaceAll(/ufat/g,"u")
}

function chamardescriptografa(){
    descriptografa(texto.value)
    texto.value =""
}


function copiarTexto() {
    recebe.select();
    document.execCommand("copy")
    recebe.value = ""
    window.location.reload();
}

function limparTela(){
    texto.value =""
    recebe.value=""
    window.location.reload();
    texto.focus
}

btncript.onclick = chamarcriptografar
btnDesc.onclick = chamardescriptografa
btnCopy.onclick = copiarTexto
btnClear.onclick = limparTela





/*gimeslmaimesr*/