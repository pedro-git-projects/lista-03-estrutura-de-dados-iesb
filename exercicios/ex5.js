const testPar = (n) => n % 2 === 0 ? true : false;

const sqrPar = (n) => {
	if(testPar(n)) return n * n;
	if(!testPar(n)) return null; 
} 

const printSqrDePara = (de, para) => {
	for(let i = de; i < para; i++) {
		if(sqrPar(i) != null) {
			console.log(`O quadrado de ${i} é ${sqrPar(i)}`);
		}
	}
}

export const ex5 = () => {
	printSqrDePara(1, 100);
}
