function Palindromo(palavra) {
 if (!palavra) return "palavra inexistente";

 return palavra.split("").reverse().join("") === palavra;

}

console.log(Palindromo("ama"));