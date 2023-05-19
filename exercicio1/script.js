const sacolao = []

const fruta2 = {
    nome: "melao",
    preco: 15,
    disponibilidade: true
}
const fruta3 = {
    nome: "manga",
    preco: 5,
    disponibilidade: true
}

let fruta = {
    nome: "banana",
    preco: 5,
    disponibilidade: true
}

sacolao.push(fruta, fruta2, fruta3)

console.log(sacolao);



console.log("\n");
console.log("==========================TESTES========================")

// console.log("objeto original", fruta);
// let copiaFurta = fruta
// copiaFurta.cachorro = "asinha"
// console.log("objeto copiado", copiaFurta);





let frutaTeste = {
    nome: "banana",
    preco: 5,
    disponibilidade: true
}
console.log(frutaTeste);
// ATRIBUINDO O OBJETO A UMA VARIAVEL SEM USAR O SPREAD OPERATOR, QUALQUER ALTERAÇÃO irá ALTERAR O OBJETO ORIGINAL
let novaFruta = frutaTeste
console.log(novaFruta);
novaFruta.teste = "testando"

// Usando Spread 
// let novaFrutaSpread = {...frutaTeste}
// novaFrutaSpread.testandoSpread = "testando"
// frutaTeste = {...novaFrutaSpread}

console.log("copiado da variável" , novaFruta);
console.log("original depois de ser copiado diretamente na variavel" ,frutaTeste);
// console.log("com spread", novaFrutaSpread);
console.log(frutaTeste);



