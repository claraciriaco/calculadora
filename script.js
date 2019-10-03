var num1=0;
var num2=0;
var operacao;

function init(){
  var zero = document.getElementById('zero');
  var um = document.getElementById('um');
  var dois = document.getElementById('dois');
  var tres = document.getElementById('tres');
  var quatro = document.getElementById('quatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var sete = document.getElementById('sete');
  var oito = document.getElementById('oito');
  var nove = document.getElementById('nove');

  var visor = document.getElementById('visor');
  var soma = document.getElementById('soma');
  var sub = document.getElementById('sub');
  var multi = document.getElementById('multiplicacion');
  var divi = document.getElementById('division');
  var igual = document.getElementById('igual');
}

zero.onclick = function(e){visor.textContent = visor.textContent  + "0";}
um.onclick = function(e){visor.textContent = visor.textContent  + "1";}
dois.onclick = function(e){visor.textContent = visor.textContent  + "2";}
tres.onclick = function(e){visor.textContent = visor.textContent  + "3";}
quatro.onclick = function(e){visor.textContent = visor.textContent  + "4";}
cinco.onclick = function(e){visor.textContent = visor.textContent  + "5";}
seis.onclick = function(e){visor.textContent = visor.textContent  + "6";}
sete.onclick = function(e){visor.textContent = visor.textContent  + "7";}
oito.onclick = function(e){visor.textContent = visor.textContent  + "8";}
nove.onclick = function(e){visor.textContent = visor.textContent  + "9";}
  

soma.onclick = function(e){
	num1 = visor.textContent;
	operacao = "+";
	limpar();
}
sub.onclick = function(e){
    num1 = visor.textContent;
    operacao = "-";
    limpar();
}
multi.onclick = function(e){
    num1 = visor.textContent;
    operacao = "*";
    limpar();
}
divi.onclick = function(e){
    num1 = visor.textContent;
    operacao = "/";
    limpar();
}
igual.onclick = function(e){
    num2 = visor.textContent;
      resolver();
}

function limpar(){
  visor.textContent = "";
}

function resolver(){
  var res = 0;
  switch(operacao){
    case "+":
      res = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
    case "*":
      res = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      res = parseFloat(num1) / parseFloat(num2);
      break;
  }
  reset();
  visor.textContent = res;
}

function reset(){
	var num1=0;
	var num2=0;
	var operacao="";
	visor.textContent="";
}