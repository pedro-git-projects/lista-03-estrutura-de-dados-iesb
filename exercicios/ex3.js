import prompt from "prompt-sync";
let reader = prompt();

class Cardapio {
	constructor(codigo, produto, preco) {
		this.codigo = codigo;
		this.produto = produto;
		this.preco = preco;
	}
}

const cachorroQuente = new Cardapio(100, "Cachorro Quente", 1.70); 
const bauru = new Cardapio(101, "Bauru Simples", 2.30); 
const bauruOvo = new Cardapio(102, "Bauru com Ovo", 2.60); 
const hamburguer = new Cardapio(103, "Hamburguer", 2.40); 
const cheeseburguer = new Cardapio(104, "Cheeseburguer", 2.50); 
const refrigerante = new Cardapio(105, "Refrigerante", 1.00); 
const vazio = new Cardapio(0, "", 0);


export class Pedido {
	constructor(produtos = vazio) {
		this.produtos = [produtos];
		this.total = this.produtos.reduce((a,b) => a+b, 0); 
	}

	adicionarProduto(codigo) {
		try {
			let novoProduto = testaCodigo(codigo);
			this.produtos.push(novoProduto);
			this.total = parseFloat(this.total) +  parseFloat(novoProduto.preco);
			console.log(`${novoProduto.produto} adicionado`);
		} catch(err) {
			console.log(err)
		}
	}

	printTotal() {
		const total =  Math.round(this.total * 100)/100;
		const casasAposPonto = numCasasDecimais(total);
		if (casasAposPonto > 1) { 
			console.log(`O valor total dos itens foi de R$${total}`);
		} else {
			console.log(`O valor total dos itens foi de R$${total}0`);
		}
	}
}

const numCasasDecimais = (num) => num.toString().split('.')[1].length;  

const testaCodigo = (codigo) => {
	switch(codigo) {
		case "100":
			return cachorroQuente; 
		case "101":
			return bauru;
		case "102":
			return bauruOvo;
		case "103":
			return hamburguer;
		case "104":
			return cheeseburguer;
		case"105":
			return refrigerante;
		default:
			throw "!!! Código inválido! Por favor tente novamente: ";
	}
} 

export const ex3 = () => {
	let input = "";
	let pedido = new Pedido();
	while(input != "0") {
		input = reader("-> Escolha um item do cardápio pelo código ou digite 0 para sair: ")
		if(input != "0") pedido.adicionarProduto(input);
		if(input == "0") break;
	}
	pedido.printTotal();
}
