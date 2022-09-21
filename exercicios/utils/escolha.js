import prompt from "prompt-sync";
let reader = prompt();

import { ex1 } from "../ex1.js";
import { ex2 } from "../ex2.js";
import { ex3 } from "../ex3.js";
import { ex4 } from "../ex4.js";
import { ex5 } from "../ex5.js";

export const escolha = () => {
	let input = reader("-> Por favor, escolha um exercício digitando um número entre 1 e 5: ") 
	switch(input) {
		case "1":
			console.log(`Exercício 1 escolhido: `)
			ex1();
			break;
		case "2":
			console.log(`Exercício 2 escolhido: `)
			ex2();
			break;
		case "3":
			console.log(`Exercício 3 escolhido: `)
			ex3();
			break;
		case "4":
			console.log(`Exercício 4 escolhido: `)
			ex4();
			break;
		case "5":
			console.log(`Exercício 5 escolhido: `)
			ex5();
		default:
			throw "Insira um número de 1 a 5!";
	}	
}
