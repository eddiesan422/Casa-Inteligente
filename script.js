
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Creamos una instancia de Artyom.js
var artyom = new Artyom();

// Definimos una función para que Artyom simule el cierre de una puerta


// Definimos los comandos de voz que reconocerá Artyom
var comandos = [
  {
    indexes: ["abrir puerta principal"],
    action: function() {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
      
    }
    
  },
  {
    indexes: ["cerrar puerta principal"],
    action: function() {
      ctx.fillStyle = "#000000";
      
      ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
     
    }
    
  },
  {
    indexes: ["apagar luz de la cocina"],
    action: function() {
      var img = new Image();
      img.onload = function(){
        var luzCocina=ctx.drawImage(img, 30, 500, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
    }
  },
  {
    indexes: ["prender luz de la cocina"],
    action: function() {
      var img = new Image();
      img.onload = function(){
        var luzCocina=ctx.drawImage(img, 30, 500, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
    }
    
  },
  {
    indexes: ["cerrar ventana habitación uno"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la habitacion 1
        var vH1= ctx.drawImage(img4,300, 240, 30, 30);
      }
      img4.src = 'img/ventanacerrada.png';
     
    }
    
  },
  {
    indexes: ["cerrar ventana habitación dos"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la habitacion 2
        var vH2=ctx.drawImage(img4,600, 240, 30, 30);
      }
      img4.src = 'img/ventanacerrada.png';
     
    }
    
  },
  {
    indexes: ["cerrar ventana habitación tres"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la habitacion 3
        var vH3=ctx.drawImage(img4,600, 300, 30, 30);

      }
      img4.src = 'img/ventanacerrada.png';
     
    }
    
  },
  {
    indexes: ["cerrar ventana cocina"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la cocina
        var vCocina= ctx.drawImage(img4,205, 500, 30, 30);
      }
      img4.src = 'img/ventanacerrada.png';
     
    }
    
  },
  {
    indexes: ["abrir ventana habitación uno"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la habitacion 1
        var vH1= ctx.drawImage(img4,300, 240, 30, 30);
      }
      img4.src = 'img/ventana.png';
     
    }
    
  },
  {
    indexes: ["abrir ventana habitación dos"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la habitacion 2
        var vH2=ctx.drawImage(img4,600, 240, 30, 30);
      }
      img4.src = 'img/ventana.png';
     
    }
    
  },
  {
    indexes: ["abrir ventana habitación tres"],
    action: function() {
      var img4 = new Image();
      img4.onload = function() {
        // ventana de la habitacion 3
        var vH3=ctx.drawImage(img4,600, 300, 30, 30);

      }
      img4.src = 'img/ventana.png';
     
    }
    
  },
  {
    indexes: ["abrir ventana cocina"],
    action: function() {
      var img4 = new Image();
    img4.onload = function() {
      // ventana de la cocina
      var vCocina= ctx.drawImage(img4,205, 500, 30, 30);
    }
    img4.src = 'img/ventana.png';
     
    }
    
  },
  
  
 
  // Puedes agregar más comandos aquí
];

// Le decimos a Artyom que cargue los comandos definidos
artyom.addCommands(comandos);

// Le decimos a Artyom que inicie el reconocimiento de voz
artyom.initialize({
  lang: "es-ES",
  continuous: true,
  debug: true
});
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
      // ventana de la habitacion 2
      var vH2=ctx.drawImage(img4,600, 240, 30, 30);
      // ventana de la habitacion 3
      var vH3=ctx.drawImage(img4,600, 300, 30, 30);
      // ventana de la habitacion 1
      var vH1= ctx.drawImage(img4,300, 240, 30, 30);
      // ventana de la cocina
      var vCocina= ctx.drawImage(img4,205, 500, 30, 30);
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


// Coordenadas y tamaño de cada puerta
const mainDoor = { x: 215, y: 300, width: 10, height: 20 };
const bedroom1Door = { x: 215, y: 450, width: 10, height: 20 };
const bedroom2Door = { x: 370, y: 255, width: 20, height: 10 };
const bedroom3Door = { x: 700, y: 255, width: 20, height: 10};
const kitchenDoor = { x: 700, y: 315, width: 20, height: 10 };
const bathroom1Door = { x: 400, y: 335, width: 20, height: 10 };
const bathroom3Door = { x: 515, y: 480, width: 10, height: 20 };
const principalDoor = { x: 845, y: 270, width: 10, height: 40 };
ctx.fillStyle = "#000000";
ctx.fillRect(mainDoor.x, mainDoor.y, mainDoor.width, mainDoor.height);
ctx.fillRect(bedroom1Door.x, bedroom1Door.y, bedroom1Door.width, bedroom1Door.height);
ctx.fillRect(bedroom2Door.x, bedroom2Door.y, bedroom2Door.width, bedroom2Door.height);
ctx.fillRect(bedroom3Door.x, bedroom3Door.y, bedroom3Door.width, bedroom3Door.height);
ctx.fillRect(kitchenDoor.x, kitchenDoor.y, kitchenDoor.width, kitchenDoor.height);
ctx.fillRect(bathroom1Door.x, bathroom1Door.y, bathroom1Door.width, bathroom1Door.height);
ctx.fillRect(bathroom3Door.x, bathroom3Door.y, bathroom3Door.width, bathroom3Door.height);
ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);

// bombillos
var img = new Image();
img.onload = function() {
  // bombillo del patio
  var luzPatio=ctx.drawImage(img, 30, 30, 40, 40);
  //bombillo habitacion 1
  var luzH1=ctx.drawImage(img, 450, 30, 40, 40);
  //bombillo habitacion 2
  var luzH2=ctx.drawImage(img, 800, 30, 40, 40);
  //bombillo habitacion 3
  var luzH3=ctx.drawImage(img, 800, 500, 40, 40);
  //bombillo habitacion de la cocina
  var luzCocina=ctx.drawImage(img, 30, 500, 40, 40);
  //bombillo habitacion baño 2
  var luzB2=ctx.drawImage(img, 310, 520, 40, 40);
  //bombillo habitacion baño 1
  var luzB1=ctx.drawImage(img, 310, 370, 40, 40);
}
img.src = 'img/bombilloprendido.jpeg';


  
