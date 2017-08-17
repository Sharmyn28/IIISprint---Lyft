var add = document.getElementById('add');
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