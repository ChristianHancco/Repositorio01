function Decodificador(){
    for(i=1;i<=8;i++){
        if(i%2==1){
        console.log("1")
        }
        else{
        console.log("0")
        }
    }
console.log("");
}
function Decodificador2(){
    for(i=1;i<=8;i++){
        if(i%2==1){
        console.log("1")
        }
        else{
        console.log("-1")
        }
    }
    console.log("");
}
function Decodificador3(){
    for(x=1,s=1,i=1;i<=8;i++,x++){
        console.log(s*x);
        if(x==2){
            x=0;
            s*=-1;
        }
    }
}
function Decodificador4(){
    for(x=3,i=1;i<=8;i++,x++){
        console.log(x);
        if(x==5)x=2;
    }
}