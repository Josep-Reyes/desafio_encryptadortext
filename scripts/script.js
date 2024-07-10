
let aviso=document.getElementById("aviso");
aviso.style.visibility='hidden';

let presentacion__imagen=document.getElementById("presentacion__imagen");
presentacion__imagen.style.display='inline-flex';

let resultado=document.getElementById("resultado");
resultado.style.display='none';

let encriptate=document.getElementById("encriptatexto");
let resultadotexto=document.getElementById("resultadotexto");
let copiasa=document.getElementById("copiar");

function encriptar() {
    let mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZÁÉÍÓÚéáíóú";
    let textonormal = encriptate.value;


    for(let i=0; i<textonormal.length; i++){
        if (mayusculas.indexOf(textonormal.charAt(i),0)!=-1){
           return encriptado(false);
        }
     }

     return encriptado(true);

}

function desencriptar() {
    let mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZÁÉÍÓÚéáíóú";
    let textonormal = encriptate.value;


    for(let i=0; i<textonormal.length; i++){
        if (mayusculas.indexOf(textonormal.charAt(i),0)!=-1){
           return desencriptado(false);
        }
     }

     return desencriptado(true);

}

function encriptado(booleano){
if(booleano===true){
    presentacion__imagen.style.display='none';
    resultado.style.display='inline-flex';
    let textonormal = encriptate.value;
    textonormal=textonormal.replaceAll("e", "enter"); 
    textonormal=textonormal.replaceAll("i", "imes"); 
    textonormal=textonormal.replaceAll("a", "ai"); 
    textonormal=textonormal.replaceAll("o", "ober"); 
    textonormal=textonormal.replaceAll("u", "ufat"); 
    resultadotexto.value=textonormal;
    encriptate.value="";
    aviso.style.visibility='hidden';
}else{
    aviso.style.visibility='visible'
}
}

function desencriptado(booleano){
    if(booleano===true){
        presentacion__imagen.style.display='none';
        resultado.style.display='inline-flex';
        let textonormal = encriptate.value;
        textonormal=textonormal.replaceAll("ufat", "u"); 
        textonormal=textonormal.replaceAll("ober", "o"); 
        textonormal=textonormal.replaceAll("ai", "a"); 
        textonormal=textonormal.replaceAll("imes", "i"); 
        textonormal=textonormal.replaceAll("enter", "e"); 
        resultadotexto.value=textonormal;
        encriptate.value="";
        aviso.style.visibility='hidden';
    }else{
        aviso.style.visibility='visible'
    }
    }

function copiar(){

  if (resultadotexto.value.length < 1) {
    return alert("No hay valores por copiar");
  }
  resultadotexto.select();
  resultadotexto.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(resultadotexto.value);

}