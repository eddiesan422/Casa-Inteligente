
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Base principal
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(20, 20, 850, 560);

// pasto de la entrada principal
var img2 = new Image();
img2.onload = function() {
  // imagen del pasto
  ctx.drawImage(img2, 851, 20, 120, 560);

  // DELINEADO DE LA ENTRADA PRINCIPAL
  ctx.strokeStyle = "#000000"; 
  ctx.strokeRect(851, 20, 120, 560);
  

  // dibujo del camino encima del pasto
  var img3 = new Image();
  img3.onload = function() {
    ctx.drawImage(img3, 851, 270, 140, 40);

    // dibujo de las ventanas encima de todo lo demás
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

// Patio
ctx.fillStyle = "#be7009";
ctx.fillRect(20, 20, 200, 345);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(20, 20, 200, 345);
// Cocina
ctx.fillStyle = "#e0a14f";
ctx.fillRect(20, 365, 200, 215);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(20, 365, 200, 215); 
// Habitacion 1
ctx.fillStyle = "#4e98ec";
ctx.fillRect(220, 20, 300, 240);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(220, 20, 300, 240);
// Habitacion 2
ctx.fillStyle = "#4e98ec";
ctx.fillRect(520, 20, 330, 240);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(520, 20, 330, 240);
// Habitacion 3
ctx.fillStyle = "#4e98ec";
ctx.fillRect(520, 320, 330, 260);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(520, 320, 330, 260);
// Baño 1
ctx.fillStyle = "#37df4d";
ctx.fillRect(300, 340, 220, 240);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(300, 340, 220, 240);
// Baño habitacion 3
ctx.fillStyle = "#17ad2b";
ctx.fillRect(300, 440, 220, 140);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(300, 440, 220, 140);
//division del del patio a la cocina
ctx.beginPath();
ctx.moveTo(20, 365);
ctx.lineTo(220, 365);
ctx.lineWidth = 2; 
ctx.stroke();

// Delineado de la casa
ctx.strokeStyle = "#000"; 
ctx.strokeRect(20, 20, 850, 560);

// puertas
ctx.fillStyle = "#6b4e39";
ctx.fillRect(215, 300, 10, 20);
ctx.fillRect(215, 450, 10, 20);
ctx.fillRect(370, 255, 20, 10);
ctx.fillRect(700, 255, 20, 10);
ctx.fillRect(700, 315, 20, 10);
ctx.fillRect(400, 335, 20, 10);
ctx.fillRect(515, 480, 10, 20);


// bombillos
img2.src = 'img/pasto.jpeg';

var img = new Image();
img.onload = function() {
  // bombillo del patio
  ctx.drawImage(img, 30, 30, 40, 40);
  //bombillo habitacion 1
  ctx.drawImage(img, 450, 30, 40, 40);
  //bombillo habitacion 2
  ctx.drawImage(img, 800, 30, 40, 40);
  //bombillo habitacion 3
  ctx.drawImage(img, 800, 500, 40, 40);
  //bombillo habitacion de la cocina
  ctx.drawImage(img, 30, 500, 40, 40);
  //bombillo habitacion baño 1
  ctx.drawImage(img, 310, 520, 40, 40);
}
img.src = 'img/bombilloprendido.jpeg';

// puerta principal
ctx.fillStyle = "#000000";
ctx.fillRect(845, 270, 10, 40);