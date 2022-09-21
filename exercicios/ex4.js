const cobaias = [
	{
		"numero": 10,
		"tipo": 2,	
	},
	{
		"numero": 42,
		"tipo": 1,	
	},
	{
		"numero": 9,
		"tipo": 1,	
	},
	{
		"numero": 17,
		"tipo": 2,	
	},
	{
		"numero": 19,
		"tipo": 2,	
	},
	{
		"numero": 18,
		"tipo": 1,	
	},
	{
		"numero": 11,
		"tipo": 1,	
	},
	{
		"numero": 16,
		"tipo": 1,
	},
	{
		"numero": 22,
		"tipo": 2,	
	},
	{
		"numero": 30, 
		"tipo": 2,	
	},
	{
		"numero": 1,
		"tipo": 1,	
	},
	{
		"numero": 15,
		"tipo": 2,	
	},
	{
		"numero": 14,
		"tipo": 1,	
	},
	{
		"numero": 19,
		"tipo": 2,	
	},
	{
		"numero": 10,
		"tipo": 1,	
	}
];

const getTotal = () => {
	let total = 0;
	cobaias.forEach(
		el => total += el.numero
	)
	return total;
}

const printTotal = () => {
	console.log(`O número total de cobaias utilizado foi ${getTotal()}`);
}

const getCoelhos = () => {
	let coelhos = 0;
	for(let i = 0; i < cobaias.length; i++) {
		if(cobaias[i].tipo === 1) {
			coelhos += cobaias[i].numero;
		}	
	}
	return coelhos;
}

const printCoelhos = () => {
	console.log(`O número total de coelhos foi ${getCoelhos()}`);
}

const getRatos = () => {
	let ratos = 0;
	for(let i = 0; i < cobaias.length; i++) {
		if(cobaias[i].tipo === 2) {
			ratos += cobaias[i].numero;
		}	
	}
	return ratos;
}

const printRatos = () => {
	console.log(`O número total de ratos foi ${getRatos()}`);
}

const calculatePercetangeRatos = () => {
	const ratos = getRatos();
	const total = getTotal();
	return Math.round(((ratos/total) * 100)*100)/100; 
}

const calculatePercetangeCoelhos = () => {
	const coelhos = getCoelhos();
	const total = getTotal();
	return Math.round(((coelhos/total) * 100)*100)/100; 
}

const printPercentage = () => {
	console.log(`${calculatePercetangeCoelhos()}% das cobaias foram coelhos e ${calculatePercetangeRatos()}% foram ratos`);
} 

export const ex4 = () => {
	printTotal();
	printCoelhos();
	printRatos();
	printPercentage();
}
