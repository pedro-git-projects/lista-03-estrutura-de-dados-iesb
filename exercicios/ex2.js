import prompt from "prompt-sync";
let reader = prompt();
/* 	
   	Leia 20 valores reais e calcule seu somátorio 
	utilizando a instrução do while: 
*/
export const ex2 = () => {
	const repeticoes = 20;
	let numeros = [];
	
	do {
		let input = reader("-> Insira um número: ")
		numeros.push(input);
		console.log(`Número ${numeros.length} de ${repeticoes} inserido!`);
	} while(numeros.length < repeticoes) 
			
	const numerosToNumber = numeros.map((el) => parseInt(el) );
	const soma = numerosToNumber.reduce((a,b) => a+b, 0);

	console.log(`A soma de todos os elementos do array foi: ${soma}`);
}
