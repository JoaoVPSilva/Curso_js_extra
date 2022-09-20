//diferença entre VAR , LET e CONST

/********************************************/
//var
var nome = "sujeito";

if(nome === "sujeito"){
    var curso = "Programador Frontend";
}

curso="outro curso";

console.log(curso);

//var permite mudar o valor por fora do scopo

/********************************************/
// Let

if (nome === "sujeito"){
    let cargo = "Ceo - Sujeito programador";
    console.log(cargo);
}

cargo = "teste";

console.log(cargo);

//nao reconhece por ser um let 

/********************************************/
//const

//possui scopo de bloco, mas após ser criado não pode mais mudar o valor

//tem q inicializar com um valor 
const cargo2 = "sujeito programador frontend"

cargo2 = "programador mobile"

console.log(cargo2)
