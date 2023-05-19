const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
console.log("objeto original", pokemon1);

// a) 
const pokemon1Copy = {
    ... pokemon1,
    nome : "Squirtle",
    tipo : "Água"
}
console.log("a)copia do objeto",pokemon1Copy);

// b) 
pokemon1.ataques = [] 
console.log(pokemon1);

// c) 
const ataque ={
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque)
console.log(pokemon1);


// d)
pokemon1Copy.ataques = [...pokemon1.ataques]
console.log(pokemon1Copy);

// e)
const novoAtaque = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}
pokemon1.ataques.push(novoAtaque)
console.log(pokemon1);


// f)
pokemon1Copy.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})

// g)
console.log(`

===================RESULTADO FINAL ===================
`);
console.log(`exercicio finalizado, oBjeto original`);
console.log(pokemon1);
console.log(`exercicio finalizado, copia do oBjeto original`);
console.log(pokemon1Copy);