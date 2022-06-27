function substituiPares(numeros){

   for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 0) {
     console.log("Você já é zero!!");
    }
    else if (numeros[i] % 2 === 0){
        console.log (`Substituindo ${numeros[i]} por 0`);
        numeros[i] = 0;
    }
 }
 return numeros;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(array));

