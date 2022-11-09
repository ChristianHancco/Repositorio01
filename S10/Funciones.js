function Array1(){
    //1 0 1 0 1 0 1 0
    n=8
    v=1;
    let Ax=[];
    Ax.push(1,0);
    while(v<=n){
        Ax.push(Ax[v-1]);
        console.log(Ax[v-1])
        v++;
    }
    
}
function Array2(){
    //1 -1 1 -1 1 -1 1 -1
    n=8
    v=1;
    let Ax=[];
    Ax.push(1,-1);
    while(v<=n){
        Ax.push(Ax[v-1]);
        console.log(Ax[v-1])
        v++;
    }
    
}
function Array3(){
    // 1 2 -1 -2 1 2 -1 -2
    n=8;
    v=1;
    let Ax=[];
    Ax.push(1,2)
    while(v<=n){
        Ax.push(Ax[v-1]*-1);
        console.log(Ax[v-1])
        v++
    }
}
function Array4(){
    //3 4 5 3 4 5 3 4
    n=8;
    v=1;
    let Ax=[];
    Ax.push(3,4,5)
    while(v<=n){
        Ax.push(Ax[v-1]);
        console.log(Ax[v-1])
        v++
    }
}