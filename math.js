//sumar
function sumar(x1,x2){
    return x1+x2;

}
//dividir
function dividir(x1,x2) {
    if(x2==0){
        console.log("no se puede dividir por cero");
    }
    else{
        return x1/x2;
    }
}

exports.dividir = dividir;