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
  ctx.fillStyle = "#553203";
  ctx.fillRect(851, 270, 140, 40);

  // dibujar el camino encima del pasto
  var img3 = new Image();
  img3.onload = function() {
    ctx.drawImage(img3, 851, 270, 140, 40);

    // dibujar la ventana encima de todo lo demás
    var img4 = new Image();
    img4.onload = function() {
      ctx.drawImage(img4,600, 240, 30, 30);
      ctx.drawImage(img4,600, 300, 30, 30);
      ctx.drawImage(img4,300, 240, 30, 30);
      ctx.drawImage(img4,205, 500, 30, 30);
    }
    img4.src = 'img/ventana.png';
  }
  img3.src = 'img/camino.jpeg';
}
// establecer la fuente de la imagen
img2.src = 'img/pasto.jpeg';

// Dibujar las habitaciones
ctx.fillStyle = "#be7009";
ctx.fillRect(20, 20, 200, 345);
ctx.fillStyle = "#e0a14f";
ctx.fillRect(20, 365, 200, 215);
ctx.fillStyle = "#4e98ec";
ctx.fillRect(220, 20, 300, 240);
ctx.fillRect(520, 20, 330, 240);
ctx.fillRect(520, 320, 330, 260);
ctx.fillStyle = "#37df4d";
ctx.fillRect(300, 340, 220, 240);
ctx.fillStyle = "#17ad2b";
ctx.fillRect(300, 440, 220, 140);

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
ctx.strokeRect(300, 440, 220, 140);
// Dibujar las puertas
ctx.fillStyle = "#6b4e39";
ctx.fillRect(215, 300, 10, 20);
ctx.fillRect(215, 450, 10, 20);
ctx.fillRect(370, 255, 20, 10);
ctx.fillRect(700, 255, 20, 10);
ctx.fillRect(700, 315, 20, 10);
ctx.fillRect(400, 335, 20, 10);
ctx.fillRect(515, 480, 10, 20);


// establecer la fuente de la imagen
img2.src = 'img/pasto.jpeg';

var img = new Image();
img.onload = function() {
  // dibujar la imagen en el canvas
  ctx.drawImage(img, 30, 30, 40, 40);
  ctx.drawImage(img, 450, 30, 40, 40);
  ctx.drawImage(img, 800, 30, 40, 40);
  ctx.drawImage(img, 800, 500, 40, 40);
  ctx.drawImage(img, 30, 500, 40, 40);
  ctx.drawImage(img, 310, 520, 40, 40);
}
img.src = 'img/bombilloprendido.jpeg';

// Dibujar la puerta principal
ctx.fillStyle = "#000000";
ctx.fillRect(843, 270, 10, 40);