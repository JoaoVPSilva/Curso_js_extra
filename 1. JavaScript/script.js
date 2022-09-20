// MENOR QUE 18,5	    MAGREZA	
// ENTRE 18,5 E 24,9	NORMAL	
// ENTRE 25,0 E 29,9	SOBREPESO	I
// ENTRE 30,0 E 39,9	OBESIDADE	II
// MAIOR QUE 40,0	    OBESIDADE GRAVE

// peso / (altura*altura)

var peso;
var altura;
var resultado;
var imc;

function calcular(event) {
    //para o texto digitado não sumir após dar submit
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura*altura);

    resultado = document.getElementById('resultado');

    //Para controlar quantidade de casas decimais = ".toFixed(2)"
    if(imc < 17){        
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + ", Cuidado, você está muito abaixo do peso!!!";
    }else if(imc>17 && imc<18.49){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + ", Cuidado, você está abaixo do peso!!!";
    }else if(imc>18.50 && imc<24.99){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + ", Você esta com o peso Normal!!!";
    }else if(imc>25 && imc<29.9){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + ", Você esta com o sobrepeso I !!!";
    }else if(imc>30 && imc<39.9){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + ", Cuidado, você esta com o Obesidade II !!!";
    }else if(imc>40){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc.toFixed(2) + ", Cuidado, você esta com o Obesidade GRAVE !!!";
    }

}