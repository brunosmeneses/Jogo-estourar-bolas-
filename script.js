function addBola(){
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 800);
	var p2 = Math.floor(Math.random() * 200);
	var cor = Math.floor(Math.random() * 16777215).toString(16);

	bola.setAttribute("style", "right:"+p1+"px;top:"+p2+"px;"+"background-color:#"+cor);
	bola.setAttribute("onclick", "estourar(this)");

	document.getElementById('container').appendChild(bola);
}

function estourar(elemento){
	document.getElementById('container').removeChild(elemento);
	score();
}

function score(){
	var contador = parseInt(document.getElementById("score").innerHTML);
	contador += 1;
	document.getElementById("score").innerHTML = contador;	
}

function inicializaCronometro() {
    var tempoRestante = parseInt(document.getElementById("tempo").innerHTML);
	document.getElementById('iniciar').setAttribute("disabled", "disabled");
    var inicio = setInterval(addBola, 500);

	var cronometroID = setInterval(function() {
		tempoRestante--;
		document.getElementById("tempo").innerHTML = tempoRestante;	
		if (tempoRestante == 0) {
            clearInterval(cronometroID);
            clearInterval(inicio);
            document.getElementById('container').classList.add("desabilitado")
		}

	}, 1000);
}

function reniciar(){
	window.location.reload();
}

