const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️
const primeiroAtorAtriz = filme.elenco[0]

console.log(primeiroAtorAtriz);

const ultimoAtorAtriz = filme.elenco[filme.elenco.length -1]

console.log(ultimoAtorAtriz);

const todasTransmissoes = filme.transmissoesHoje

console.log(todasTransmissoes);

const horarioCanalBrasil = filme.transmissoesHoje[1].horario

console.log(horarioCanalBrasil);