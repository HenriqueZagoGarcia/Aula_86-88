var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= ""; /* armazenar o objeto da imagem do personagem */
var blockImageObject= ""; /* armazenar o objeto da imagem dos blocos */

function playerUpdate()  /* adicionar a imagem do personagem */
{
	fabric.Image.fromURL("player.png", function(Img) 
	{
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage) /* adicionar as diferentes imagens de acordo com as teclas específicas pressionadas */
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) /* "e" dentro dos parênteses representa o evento (todas as teclas)*/ 
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(e.shiftKey == true && keyPressed == '80') /* Teclas shift + P (número 80) = Aumenta o quadrado*/
	{
		console.log("Shift e P pressionados juntos");
		blockImageWidth = blockImageWidth + 1;
		blockImageHeight = blockImageHeight + 1;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;

	} /* Todo "if" pede uma condição e toda "condição" fica entre "chaves" */

	if(e.shiftKey && keyPressed == '77') /* Teclas shift + M (número 77) = Diminui o quadrado*/
	{
		console.log("Shift e M pressionados juntos");
		blockImageWidth = blockImageWidth - 1;
		blockImageHeight = blockImageHeight - 1;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}

/* Teclas direcionais */

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}

	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}

	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}

	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}

/* Blocos */

	if(keyPressed == '87')
	{
		newImage('wall.jpg');
		console.log("w");
	}

	if(keyPressed == '71')
	{
		newImage('ground.png');
		console.log("g");
	}

	if(keyPressed == '76')
	{
		newImage('light_green.png');
		console.log("l");
	}

	if(keyPressed == '84')
	{
		newImage('trunk.jpg');
		console.log("t");

	}

	if(keyPressed == '82')
	{
		newImage('roof.jpg');
		console.log("r");
	}

	if(keyPressed == '89')
	{
		newImage('yellow_wall.png');
		console.log("y");
	}

	if(keyPressed == '68')
	{
		newImage('dark_green.png');
		console.log("d");
	}

	if(keyPressed == '85')
	{
		newImage('unique.png');
		console.log("u");
	}
	
	if(keyPressed == '67')
	{
		newImage('cloud.jpg');
		console.log("c");
	}
}

function up()
{
	if(playerY >= 0)  /* Fizemos essa função para o player não sair do canvas */
	{
		playerY = playerY - blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight); /* O "+" apresentado no código ao lodo não tem função de soma e, sim, de concatenar (juntar informações) */
		console.log("quando a tecla direcional cima for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <= 500)  
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight); 
		console.log("quando a tecla direcional baixo for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)  
	{
		playerX = playerX - blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth); 
		console.log("quando a tecla direcional esquerda for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)  
	{
		playerX = playerX + blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth); 
		console.log("quando a tecla direcional direita for pressionada, X = " + playerX + " , Y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}