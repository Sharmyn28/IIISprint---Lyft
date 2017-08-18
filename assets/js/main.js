var add = document.getElementById('add');
var credits = document.getElementById('credits');
var play = document.getElementById('play');
var tutorial = document.getElementById('tutorial');
var mazeSpot = document.getElementById('mazeSpot');

add.onclick = function (){
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

function clean(){
	mazeSpot.innerHTML = '';
}

function cerrar(i){
	i.parentNode.style.display = 'none';
}

credits.onclick = function(){
	clean();
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
	var p = document.createElement('p');
	var div3 = document.createElement('div');
	var iframe = document.createElement('iframe');
	div1.setAttribute('id', 'tablero');
	div2.setAttribute('class', 'row');
	form.setAttribute('class', 'col s12');
	h4.setAttribute('class', 'title');
	h4.innerHTML = 'Road Blocks';
	p.innerHTML = '<br> Hola, bienvenido a Road Blocks!'+'<br> Jugarás 6 niveles que se van complicando nivel a nivel. Usa las teclas direccionales para jugar.'+'<br> Aquí un video de guía.';
	div3.setAttribute('class', 'video-container');
	iframe.setAttribute('width', '854');
	iframe.setAttribute('height', '480');
	iframe.setAttribute('src', 'https://www.youtube.com/embed/czO63o2RFzU');
	iframe.setAttribute('frameborder', '2');
	iframe.setAttribute('allowfullscreen', 'allowfullscreen');
	div3.appendChild(iframe);
	form.appendChild(h4);
	form.appendChild(p);
	form.appendChild(div3);
	div2.appendChild(form);
	div1.appendChild(div2);
	mazeSpot.appendChild(div1);
}

//=====================================================//
/*------------- MAZE ONLY--------*/


var map1 = ["/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/",
    "/* *           * * *             * *   */",
    "/* *             W                 *   */",
    "/*                           *     *   */",
    "/*         *                       *   */",
    "/*   * * * *             *         *   */",
    "/*     *     * *       *   *       *   */",
    "/*   * I o   * *         *   * * * *   */",
    "/*     *     * *   * *  **           I */",
    "/*   *          *        *         * * */",
    "/*           * ***   *   *     *   * * */",
    "/*       *      *        * *       * * */",
    "/*     * *             ***         * * */",
    "/* *   *           *     *         *   */",
    "/*     *   *      *      *     *       */",
    "/* *        *     *      *         *   */",
    "/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/"];

var  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];


var mapas = [map1, map2, map3, map4];
var mapa = mapas[4];
var mapita = [];
var x;
var y;


//keycode de las teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", movimiento);

function start(){
  for (var i in mapa){
    mapita[i]=[];
    for (var j = 0; j < mapa[0].length; j++) {
      mapita[i][j]=mapa[i][j];
      if(mapita[i][j]=='o'){
          xinicial=j;
          yinicial=i;
      } 
    }
  }
}

function createSpot(){ 
	mazeSpot.innerHTML='';
	var div1 = document.createElement('DIV');
	div1.setAttribute("id", "tablero");
	mazeSpot.appendChild(div1);

	var button = document.createElement('button');
	button.innerHTML = 'play';
	button.setAttribute('id', 'playG');
	button.setAttribute('onclick', 'startGame()');
	mazeSpot.appendChild(button);
	var nivel = 1;	
	createMaze(map1);
}

function createMaze(map){
	xtrans = [];
	ytrans = [];
	yfinal = map.length - 1;
	xfinal = map[0].length -1;

	var tablero = document.getElementById('tablero');
    console.log('Current map', map);//limpiar tablero
    //rotar titulo
    var tabla = document.createElement('table');
    tabla.border = "0";
    //crea strings en lista
    for (var i in map) {
        var fila = document.createElement('tr');
        //crea elementos en string
        for (var j = 0; j < map[i].length; j++) {
            var celda = document.createElement('td');
            if (map[i][j]=="*") {
                celda.setAttribute('class','wall');
                            	  
            }else if(map1[i][j]=="W"){
                	celda.setAttribute('class', 'fin');	
            }else if(map1[i][j]=="I"){
                	celda.setAttribute('class', 'transportar');
                		xtrans.push(j);
          				ytrans.push(i);
            }else if(map1[i][j]=="o"){
                	celda.setAttribute('class', 'inicio');	
            }else if(map1[i][j]==" "){
                	celda.setAttribute('class', 'espacio');
            }else if(map1[i][j]=="/"){
                	celda.setAttribute('class', 'espacio');
                	celda.setAttribute('class', 'muerte');
            }
            var p = document.createElement('p');
            celda.appendChild(p);
            celda.setAttribute("id", i+","+j);        
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla); 
    console.log(mapita);
}

play.onclick=function(){
	createSpot();
}
//start();
y = 7;
x = 7;
function mover(a,b,lado){
  
  while( true ){
  		if ( x == 0 || y == 0 || y == map1.length - 1 || x == map1[0].length - 1){
      		//alert('perdiste');
      		sweetAlert("Oops..."+'\nPerdistee', "Vuelve a intentarlo!", "error");
      		createSpot();
      		break;
      	}
      	if (map1[ y + a][x + b] != '*') {
	  	 	newP = (y+a)+','+ (x+b);
	      	pos = document.getElementById(newP);
	      	pos.setAttribute ('class', lado);
			//pos.style.backgroundColor = "yellow";
	      	y += a;
	      	x += b;
	     }
	     else {
	     	break;
	     }
	     if (map1[(y)][x] == 'W'){
      		//alert('ganaste');
      		swal({
  				title: "Ganaste!",
  				text: "Listo para el nuevo reto?",
  				timer: 2000,
  				showConfirmButton: false
			});
      		createSpot();
      	}	  
	} 
}

var newP;
var pos;
function movimiento(evento){
	evento.preventDefault();
  switch(evento.keyCode){
    case teclas.UP:
      	mover(-1, 0, 'adelante');
    break;
    case teclas.DOWN:
  	   	mover(1, 0, 'atras');
    break;
    case teclas.LEFT:
      	mover(0, -1, 'izquierda');
    break;
    case teclas.RIGHT:
      	mover(0, 1, 'derecha');
    break;
  }
}
