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


function cronometro() {
	var inicio = setTimeout(addBola, 1000);

	var c = parseInt(document.getElementById("cro").innerHTML);
	c = c - 1;
	document.getElementById("cro").innerHTML = c;	
	var t = setTimeout(cronometro, 1000);

	if(c == 0) {
		clearTimeout(t);
		clearInterval(inicio);
		document.getElementById('iniciar').setAttribute("disabled", "disabled");
		document.getElementById('container').classList.add("desabilitado")
    }
}

function reniciar(){
	window.location.reload();
}
