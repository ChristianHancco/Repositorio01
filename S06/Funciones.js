function InvetirNumero(){
    let valor=document.getElementById("Numero1").value;
    invertido=valor.toString().split("").reverse("").join("");
    document.getElementById("NumeroRespuesta1").innerHTML=invertido;
}
function NumeroMayor(){
    var a=document.getElementById("NumeroA").value;
    var b=document.getElementById("NumeroB").value;
    var c=document.getElementById("NumeroC").value;
    var mayor=a;
    if (mayor<b) mayor=b;
    if (mayor<c) mayor=c;
    document.getElementById("NumeroRespuesta2").innerHTML=mayor;
}
function SegundoMenor(){
    var a1=document.getElementById("Numero1").value;
    var b1=document.getElementById("Numero2").value;
    var c1=document.getElementById("Numero3").value;
    var mayor1=a1;
    if (mayor1<b1) mayor1=b1;
    if (mayor1<c1) mayor1=c1;
    var menor1=a1;
    if (menor1>b1) menor1=b1;
    if (menor1>c1) menor1=c1;
    menor2=mayor1;
    if(a1<menor2 && a1>menor1)menor2=a1;
    if(b1<menor2 && b1>menor1)menor2=b1;
    if(c1<menor2 && c1>menor1)menor2=c1;
    document.getElementById("NumeroRespuesta3").innerHTML=menor2;

}
function Convertir(){
    let Number=document.getElementById("Numero").value;
    var g=Math.floor(Number/3600);
    var m=Math.floor(Number%3600/60);
    var s=Math.floor(Number%3600%60);

    var gfinal = g > 0 ? g + (g == 1 ? " grados, " : " grados, ") : "";
    var mfinal = m > 0 ? m + (m == 1 ? " minutos, " : " minutos, ") : "";
    var sfinal = s > 0 ? s + (s == 1 ? " segundos" : " segundos") : "";
    document.getElementById("NumeroRespuesta4").innerHTML=gfinal+mfinal+sfinal;
}