import prompt from "prompt-sync";
let reader = prompt();

/* Leia 20 valores reais e calcule seu somátorio utilizando a instrução while: */
export const ex1 = () => {
	const repeticoes = 20;
	let numeros = [];

	while(numeros.length < repeticoes) {
		let input = reader("-> Insira um número: ")
		if(isNaN(parseInt(input))) {
			console.log(`Por favor insira um valor numérico`);
		} else {
			numeros.push(input);
			console.log(`Número ${numeros.length} de ${repeticoes} inserido!`);

		}
	}

	const numerosToNumber = numeros.map((el) => parseInt(el) );
	const soma = numerosToNumber.reduce((a,b) => a+b, 0);

	console.log(`A soma de todos os elementos do array foi: ${soma}`);
}
