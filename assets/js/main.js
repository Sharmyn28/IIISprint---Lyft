var add = document.getElementById('add');
var credits = document.getElementById('credits');
var tutorial = document.getElementById('tutorial');
var mazeSpot = document.getElementById('mazeSpot');

function addUser() {
	var numero= document.getElementById("num").value;
	numero =parseInt(numero);
	var numvacio;
	var string = NaN;
	if(numero < 10000000000 && numero > 900000000){
		swal("Bienvenido", "Se ha registrado el usuario" , "success");
	}else if(numero > 10000000000 && numero < 900000000){
		swal({
  				title: "No es un número válido!",
  				text: "I will close in 2 seconds.",
  				timer: 2000,
  				showConfirmButton: false
			});
	}else{
		sweetAlert("No es un número válido", "Intente nuevamente!", "error");
	}
	numero = "";
}

add.onclick = function (){
	addUser();
}

function clean(){
	mazeSpot.innerHTML = '';
}

function cerrar(i){
	i.parentNode.style.display = 'none';
}

credits.onclick = function(){
	clean();

/*<a class="btn-floating green">
<i class="fa fa-question-circle-o" aria-hidden="true" id="tutorial">
</i>*/

	var div1 = document.createElement('div');
	var div2 = document.createElement('div');
	var form = document.createElement('form');
	var h4 = document.createElement('h4');
	var img = document.createElement('img');
	var p = document.createElement('p');
	var p2 = document.createElement('p');
	var p3 = document.createElement('p');
	var p4 = document.createElement('p');
	
	var a = document.createElement('a');
	var i = document.createElement('i');
	div1.setAttribute('id', 'tablero');
	div2.setAttribute('class', 'row');
	form.setAttribute('class', 'col s12');
	h4.setAttribute('class', 'title');
	img.setAttribute('src','assets/img/joys1.png');
	img.setAttribute('id','imagen');
	p.setAttribute('class','titleP');
	p3.setAttribute('class','titleP');
	p2.setAttribute('class','person');
	p4.setAttribute('class','person');
	a.setAttribute('class','btn-floating teal lighten-1');
	i.setAttribute('class','fa fa-times');
	i.setAttribute('id','tutorial');
	a.setAttribute('onclick','cerrar(this)');
	h4.innerHTML = 'Credits';
	p.innerHTML = 'Programming & Graphics';
	p2.innerHTML = 'Diana Maria Silva';
	p3.innerHTML = 'Design & Graphics';
	p4.innerHTML = 'Milagros Sharmyn Rodriguez';
	a.appendChild(i);
	form.appendChild(h4);
	form.appendChild(img);
	form.appendChild(p);
	form.appendChild(p2);
	form.appendChild(p3);
	form.appendChild(p4);
	div2.appendChild(form);
	div1.appendChild(a);
	div1.appendChild(div2);
	mazeSpot.appendChild(div1);
}


tutorial.onclick = function(){
	clean();
	var div1 = document.createElement('div');
	var div2 = document.createElement('div');
	var form = document.createElement('form');
	var h4 = document.createElement('h4');
	var div3 = document.createElement('div');
	var iframe = document.createElement('iframe');
	
	div1.setAttribute('id', 'tablero');
	div2.setAttribute('class', 'row');
	form.setAttribute('class', 'col s12');
	h4.setAttribute('class', 'title');
	h4.innerHTML = 'Road Blocks';
	div3.setAttribute('class', 'video-container');
	iframe.setAttribute('width', '854');
	iframe.setAttribute('height', '480');
	iframe.setAttribute('src', 'https://www.youtube.com/embed/czO63o2RFzU');
	iframe.setAttribute('frameborder', '2');
	iframe.setAttribute('allowfullscreen', 'allowfullscreen');

	div3.appendChild(iframe);
	form.appendChild(h4);
	form.appendChild(div3);
	div2.appendChild(form);
	//div1.appendChild(button);
	div1.appendChild(div2);
	mazeSpot.appendChild(div1);
}
