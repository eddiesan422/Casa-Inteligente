var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Dibujar las paredes
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(20, 20, 850, 560);

// pasto
var img2 = new Image();
img2.onload = function() {
  // dibujar la imagen en el canvas
  ctx.drawImage(img2, 851, 20, 120, 560);

  // ahora que la imagen de pasto está dibujada, puedes continuar con el resto de tu código
  ctx.strokeStyle = "#000000"; 
  ctx.strokeRect(851, 20, 120, 560);
  
}
// establecer la fuente de la imagen
img2.src = 'img/pasto.jpeg';
//camino
var img3 = new Image();
img3.onload = function() {
  // dibujar la imagen en el canvas
  ctx.drawImage(img3, 851, 270, 140, 40);
}
// establecer la fuente de la imagen
img3.src = 'img/camino.jpeg';

// Dibujar las habitaciones
ctx.fillStyle = "#fff";
ctx.fillRect(20, 20, 200, 560);
ctx.fillRect(220, 20, 300, 240);
ctx.fillRect(520, 20, 330, 240);
ctx.fillRect(520, 320, 330, 260);
ctx.fillRect(300, 340, 220, 240);

ctx.beginPath();
ctx.moveTo(20, 365);
ctx.lineTo(220, 365);
ctx.lineWidth = 2; // establece el ancho de la línea en 2 píxeles
ctx.stroke();

// delineado
ctx.strokeStyle = "#000"; 
ctx.strokeRect(20, 20, 200, 560); 
ctx.strokeRect(20, 20, 830, 560);
ctx.strokeRect(220, 20, 300, 240);
ctx.strokeRect(520, 20, 330, 240);
ctx.strokeRect(520, 320, 330, 260);
ctx.strokeRect(300, 340, 220, 240);

// Dibujar las puertas
ctx.fillStyle = "#6b4e39";
ctx.fillRect(215, 300, 10, 20);
ctx.fillRect(215, 450, 10, 20);
ctx.fillRect(370, 255, 20, 10);
ctx.fillRect(700, 255, 20, 10);
ctx.fillRect(700, 315, 20, 10);
ctx.fillRect(400, 335, 20, 10);

// Dibujar las ventanas
ctx.fillStyle = "#bfe1d9";
ctx.fillRect(130, 150, 30, 30);
ctx.fillRect(270, 150, 30, 30);
ctx.fillRect(130, 300, 30, 30);
ctx.fillRect(270, 300, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);
ctx.fillRect(130, 450, 30, 30);
ctx.fillRect(270, 450, 30, 30);

var img = new Image();
img.onload = function() {
  // dibujar la imagen en el canvas
  ctx.drawImage(img, 160, 30, 40, 40);
  ctx.drawImage(img, 450, 30, 40, 40);
  ctx.drawImage(img, 800, 30, 40, 40);
  ctx.drawImage(img, 800, 500, 40, 40);
  ctx.drawImage(img, 175, 480, 40, 40);
  ctx.drawImage(img, 460, 500, 40, 40);
}
img.src = 'img/bombilloprendido.jpeg';
/*
// Dibujar las luces
ctx.fillStyle = "#beca16";
ctx.beginPath();
ctx.arc(145, 190, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(285, 190, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(425, 190, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(570, 190, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(185, 490, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(545, 190, 10, 0, 2 * Math.PI);
ctx.fill(); */

// Dibujar la puerta principal
ctx.fillStyle = "#000000";
ctx.fillRect(843, 270, 10, 40);