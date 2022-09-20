function acao(){
    document.write("Executando....<br/>");
}

/**********************************************************************/
//setInterval


// vai executar essa função de 1 em 1 segundo (está em Milisegundos)
// setInterval((acao), 1000);

//definindo uma função anonima 
// var timer = setInterval (()=>{
//     document.write("executando!!!<br/>")
// }, 1000)

// definido em uma variável para poder parar quando for necessário

/********************************************************************/


//serTimeout

//só chama uma vez no tempo determinado, no caso 3 segundos
// setTimeout(acao, 3000);

setTimeout(()=>{
    document.write("EXECUTOU NOSSO TIMEOUT");
},3000)