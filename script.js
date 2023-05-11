
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Obtener una referencia al botón

// Creamos una instancia de Artyom.js
var artyom = new Artyom();
document.addEventListener("DOMContentLoaded", function(event) { 

  // Agregar un evento de escucha para el envío del formulario
  var form = document.getElementById("myForm");
  form.addEventListener("submit", function(event) {

    // Prevenir el envío del formulario y la recarga de la página
    event.preventDefault();

    // Obtener el valor del campo de entrada del formulario
    const name = document.getElementById("nameInput").value;

   nameVariable = name;
    
    
  });

});
var comandos = [
  {
    indexes: ["dejar de escuchar"],
    action: function() {
      artyom.say("Deteniendo escucha");
      stopListening();
      
    }
    
  },
  {
    indexes: ["abrir puerta principal"],
    action: function() {
      const principalDoor = { x: 845, y: 270, width: 10, height: 40 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
      artyom.say("Abriendo puerta principal");
    }
    
  },
  {
    indexes: ["cerrar puerta principal"],
    action: function() {
      const principalDoor = { x: 845, y: 270, width: 10, height: 40 };
      ctx.fillStyle = "#000000";
      ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
      artyom.say("Cerrando puerta principal");
    }
    
  },
  {
    indexes: ["apagar todas las luces"],
    action: function() {
      offBaño1();
      offBaño2();
      offCocina();
      offHabitacion1();
      offHabitacion2();
      offHabitacion3();
      offPatio();

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
      img.src = 'img/bombilloapagado.png';
  
      artyom.say("Apagando todas las luces");
    }
  },
  {
    indexes: ["prender todas las luces"],
    action: function() {
      onBaño1();
      onBaño2();
      onCocina();
      onHabitacion1();
      onHabitacion2();
      onHabitacion3();
      onPatio();
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
      artyom.say("Prendiendo todas las luces");
    }
  },
  {
    indexes: ["apagar luz cocina"],
    action: function() {
      offCocina();
      var img = new Image();
      img.onload = function(){
        var luzCocina=ctx.drawImage(img, 30, 500, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz de la cocina");
    }
  },
  {
    indexes: ["apagar luz habitación uno"],
     
    action: function() {
     offHabitacion1();
      var img = new Image();
      img.onload = function(){
        var luzH1=ctx.drawImage(img, 450, 30, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz de la habitación uno");
    }
  },
  {
    indexes: ["apagar luz habitación dos"],
    action: function() {
      offHabitacion2();
      var img = new Image();
      img.onload = function(){
        var luzH2=ctx.drawImage(img, 800, 30, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz de la habitación dos");
    }
  },
  {
    indexes: ["apagar luz habitación tres"],
    action: function() {
      offHabitacion3();
      var img = new Image();
      img.onload = function(){
        var luzH3=ctx.drawImage(img, 800, 500, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz de la habitación tres");
    }
  },
  {
    indexes: ["apagar luz patio"],
    action: function() {
      offPatio();
      var img = new Image();
      img.onload = function(){
        var luzPatio=ctx.drawImage(img, 30, 30, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz del patio");
    }
  },
  {
    indexes: ["apagar luz baño uno"],
    action: function() {
      offBaño1();
      var img = new Image();
      img.onload = function(){
        var luzB1=ctx.drawImage(img, 310, 370, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz del baño uno");
    }
  },
  {
    indexes: ["apagar luz baño dos"],
    action: function() {
      offBaño2();
      var img = new Image();
      img.onload = function(){
        var luzB2=ctx.drawImage(img, 310, 520, 40, 40);
      }
      img.src = 'img/bombilloapagado.png';
      artyom.say("Apagando luz del baño dos");
    }
  },
  {
    indexes: ["prender luz baño uno"],
    action: function() {
      onBaño1();
      var img = new Image();
      img.onload = function(){
        var luzB1=ctx.drawImage(img, 310, 370, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("prendiendo luz del baño uno");
    }
    
  },
  {
    indexes: ["prender luz baño dos"],
    action: function() {
      onBaño2();
      var img = new Image();
      img.onload = function(){
        var luzB2=ctx.drawImage(img, 310, 520, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("prendiendo luz del baño dos");
    }
    
  },
  {
    indexes: ["prender luz cocina"],
    action: function() {
      onCocina();
      var img = new Image();
      img.onload = function(){
        var luzCocina=ctx.drawImage(img, 30, 500, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("prendiendo luz de la cocina");
    }
    
  },
  {
    indexes: ["prender luz habitación uno"],
    action: function() {
      onHabitacion1();
      var img = new Image();
      img.onload = function(){
        var luzH1=ctx.drawImage(img, 450, 30, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("prendiendo luz de la habitación uno");
    }
  },
  {
    indexes: ["prender luz habitación dos"],
    action: function() {
      onHabitacion2();
      var img = new Image();
      img.onload = function(){
        var luzH2=ctx.drawImage(img, 800, 30, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("prendiendo luz de la habitación dos");
    }
  },
  {
    indexes: ["prender luz habitación tres"],
    action: function() {
      onHabitacion3();
      var img = new Image();
      img.onload = function(){
        var luzH3=ctx.drawImage(img, 800, 500, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("Prendiendo luz de la habitación tres");
    }
  },
  {
    indexes: ["prender luz patio"],
    action: function() {
      onPatio();
      var img = new Image();
      img.onload = function(){
        var luzPatio=ctx.drawImage(img, 30, 30, 40, 40);
      }
      img.src = 'img/bombilloprendido.jpeg';
      artyom.say("Prendiendo luz del patio");
    }
  },
  {
    indexes: ["cerrar todas las ventanas"],
    action: function() {
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
      img4.src = 'img/ventanacerrada.png';
      artyom.say("cerrando todas las ventanas");
    }
    
  },
  {
    indexes: ["abrir todas las ventanas"],
    action: function() {
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
      artyom.say("abriendo todas las ventanas");
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
      artyom.say("cerrando ventana de la habitación uno");
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
      artyom.say("cerrando ventana de la habitación dos");
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
      artyom.say("cerrando ventana de la habitación tres");
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
      artyom.say("cerrando ventana de la cocina");
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
      artyom.say("abriendo ventana de la habitación uno");
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
      artyom.say("abriendo ventana de la habitación dos");
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
      artyom.say("abriendo ventana de la habitación tres");
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
    artyom.say("abriendo ventana de la cocina");

    }
    
  },
  {
    indexes: ["abrir puerta habitación tres"],
    action: function() {
      const kitchenDoor = { x: 700, y: 315, width: 20, height: 10 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(kitchenDoor.x, kitchenDoor.y, kitchenDoor.width, kitchenDoor.height);
      artyom.say("abriendo puerta de la habitacion tres");
    }
    
  },
  {
    indexes: ["abrir puerta cocina"],
    action: function() {
      const bedroom1Door = { x: 215, y: 450, width: 10, height: 20 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(bedroom1Door.x, bedroom1Door.y, bedroom1Door.width, bedroom1Door.height);
      artyom.say("abriendo puerta de la cocina");
    }
    
  },
  {
    indexes: ["abrir puerta habitación uno"],
    action: function() {
      const bedroom2Door = { x: 370, y: 255, width: 20, height: 10 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(bedroom2Door.x, bedroom2Door.y, bedroom2Door.width, bedroom2Door.height);
     artyom.say("abriendo puerta de la habitacion uno");
    }
    
  },
  {
    indexes: ["abrir puerta habitación dos"],
    action: function() {
      const bedroom3Door = { x: 700, y: 255, width: 20, height: 10};
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(bedroom3Door.x, bedroom3Door.y, bedroom3Door.width, bedroom3Door.height);
      artyom.say("abriendo puerta de la habitacion dos");
    }
    
  },
  {
    indexes: ["abrir puerta baño uno"],
    action: function() {
      const bathroom1Door = { x: 400, y: 335, width: 20, height: 10 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(bathroom1Door.x, bathroom1Door.y, bathroom1Door.width, bathroom1Door.height);
      artyom.say("abriendo puerta del baño uno");
    }
    
  },
  {
    indexes: ["abrir puerta baño dos"],
    action: function() {
      const bathroom3Door = { x: 515, y: 480, width: 10, height: 20 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(bathroom3Door.x, bathroom3Door.y, bathroom3Door.width, bathroom3Door.height);
      artyom.say("abriendo puerta del baño dos");
    }
    
  },
  {
    indexes: ["abrir puerta patio"],
    action: function() {
      const mainDoor = { x: 215, y: 300, width: 10, height: 20 };
      ctx.fillStyle = "#0d89b9";
      ctx.fillRect(mainDoor.x, mainDoor.y, mainDoor.width, mainDoor.height);
      artyom.say("abriendo puerta del patio");
    }
    
  },
  {
    indexes: ["abrir todas las puertas"],
    action: function() {
      // Coordenadas y tamaño de cada puerta
const mainDoor = { x: 215, y: 300, width: 10, height: 20 };
const bedroom1Door = { x: 215, y: 450, width: 10, height: 20 };
const bedroom2Door = { x: 370, y: 255, width: 20, height: 10 };
const bedroom3Door = { x: 700, y: 255, width: 20, height: 10};
const kitchenDoor = { x: 700, y: 315, width: 20, height: 10 };
const bathroom1Door = { x: 400, y: 335, width: 20, height: 10 };
const bathroom3Door = { x: 515, y: 480, width: 10, height: 20 };
const principalDoor = { x: 845, y: 270, width: 10, height: 40 };

ctx.fillStyle = "#0d89b9";
ctx.fillRect(mainDoor.x, mainDoor.y, mainDoor.width, mainDoor.height);
ctx.fillRect(bedroom1Door.x, bedroom1Door.y, bedroom1Door.width, bedroom1Door.height);
ctx.fillRect(bedroom2Door.x, bedroom2Door.y, bedroom2Door.width, bedroom2Door.height);
ctx.fillRect(bedroom3Door.x, bedroom3Door.y, bedroom3Door.width, bedroom3Door.height);
ctx.fillRect(kitchenDoor.x, kitchenDoor.y, kitchenDoor.width, kitchenDoor.height);
ctx.fillRect(bathroom1Door.x, bathroom1Door.y, bathroom1Door.width, bathroom1Door.height);
ctx.fillRect(bathroom3Door.x, bathroom3Door.y, bathroom3Door.width, bathroom3Door.height);
ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
      artyom.say("abriendo todas las puertas");
    }
    
  },
  {
    indexes: ["cerrar todas las puertas"],
    action: function() {
      // Coordenadas y tamaño de cada puerta
const mainDoor = { x: 215, y: 300, width: 10, height: 20 };
const bedroom1Door = { x: 215, y: 450, width: 10, height: 20 };
const bedroom2Door = { x: 370, y: 255, width: 20, height: 10 };
const bedroom3Door = { x: 700, y: 255, width: 20, height: 10};
const kitchenDoor = { x: 700, y: 315, width: 20, height: 10 };
const bathroom1Door = { x: 400, y: 335, width: 20, height: 10 };
const bathroom3Door = { x: 515, y: 480, width: 10, height: 20 };
const principalDoor = { x: 845, y: 270, width: 10, height: 40 };

ctx.fillStyle = "#bdc014";
ctx.fillRect(mainDoor.x, mainDoor.y, mainDoor.width, mainDoor.height);
ctx.fillRect(bedroom1Door.x, bedroom1Door.y, bedroom1Door.width, bedroom1Door.height);
ctx.fillRect(bedroom2Door.x, bedroom2Door.y, bedroom2Door.width, bedroom2Door.height);
ctx.fillRect(bedroom3Door.x, bedroom3Door.y, bedroom3Door.width, bedroom3Door.height);
ctx.fillRect(kitchenDoor.x, kitchenDoor.y, kitchenDoor.width, kitchenDoor.height);
ctx.fillRect(bathroom1Door.x, bathroom1Door.y, bathroom1Door.width, bathroom1Door.height);
ctx.fillRect(bathroom3Door.x, bathroom3Door.y, bathroom3Door.width, bathroom3Door.height);
ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
      artyom.say("cerrando todas las puertas");
    }
    
  },
  {
    indexes: ["cerrar puerta habitación tres"],
    action: function() {
      const kitchenDoor = { x: 700, y: 315, width: 20, height: 10 };
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(kitchenDoor.x, kitchenDoor.y, kitchenDoor.width, kitchenDoor.height);
      artyom.say("cerrando puerta de la habitacion tres");
    }
    
  },
  {
    indexes: ["cerrar puerta cocina"],
    action: function() {
      const bedroom1Door = { x: 215, y: 450, width: 10, height: 20 };
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(bedroom1Door.x, bedroom1Door.y, bedroom1Door.width, bedroom1Door.height);
      artyom.say("cerrando puerta de la cocina");
    }
    
  },
  {
    indexes: ["cerrar puerta habitación uno"],
    action: function() {
      const bedroom2Door = { x: 370, y: 255, width: 20, height: 10 };
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(bedroom2Door.x, bedroom2Door.y, bedroom2Door.width, bedroom2Door.height);
     artyom.say("cerrando puerta de la habitacion uno");
    }
    
  },
  {
    indexes: ["cerrar puerta habitación dos"],
    action: function() {
      const bedroom3Door = { x: 700, y: 255, width: 20, height: 10};
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(bedroom3Door.x, bedroom3Door.y, bedroom3Door.width, bedroom3Door.height);
      artyom.say("cerrando puerta de la habitacion dos");
    }
    
  },
  {
    indexes: ["cerrando puerta baño uno"],
    action: function() {
      const bathroom1Door = { x: 400, y: 335, width: 20, height: 10 };
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(bathroom1Door.x, bathroom1Door.y, bathroom1Door.width, bathroom1Door.height);
      artyom.say("cerrando puerta del baño uno");
    }
    
  },
  {
    indexes: ["cerrando puerta baño dos"],
    action: function() {
      const bathroom3Door = { x: 515, y: 480, width: 10, height: 20 };
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(bathroom3Door.x, bathroom3Door.y, bathroom3Door.width, bathroom3Door.height);
      artyom.say("cerrando puerta del baño dos");
    }
    
  },
  {
    indexes: ["cerrar puerta patio"],
    action: function() {
      const mainDoor = { x: 215, y: 300, width: 10, height: 20 };
      ctx.fillStyle = "#bdc014";
      ctx.fillRect(mainDoor.x, mainDoor.y, mainDoor.width, mainDoor.height);
      artyom.say("cerrando puerta del patio");
    }
    
  },
  
];


artyom.addCommands(comandos);


function startArtyom(){
  artyom.initialize({
    lang: "es-ES",
    continuous: true,
    debug: true,
    listen: true,
    obeyKeyword: false
  });
  artyom.say("Hola"+ nameVariable +"en que puedo ayudarte");
}
function stopListening() {
  artyom.fatality();
  console.log("Artyom ya no está escuchando");
}

// Base principal
ctx.fillStyle = "#852211";
ctx.fillRect(20, 20, 850, 560);

// pasto de la entrada principal
var img2 = new Image();
img2.onload = function() {
  // imagen del pasto
  ctx.drawImage(img2, 851, 20, 120, 560);

  // DELINEADO DE LA ENTRADA PRINCIPAL
  ctx.strokeStyle = "#000000"; 
  ctx.strokeRect(851, 20, 120, 560);
  const principalDoor = { x: 845, y: 270, width: 10, height: 40 };


  // dibujo del camino encima del pasto
  var img3 = new Image();
  img3.onload = function() {
    ctx.drawImage(img3, 855, 270, 120, 40);
    ctx.fillStyle = "#bdc014";
    ctx.fillRect(principalDoor.x, principalDoor.y, principalDoor.width, principalDoor.height);
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
onHabitacion1();
onHabitacion2();
onHabitacion3();
onCocina();
onBaño1();
onBaño2();
onPatio();
function onHabitacion1(){
// Habitacion 1
ctx.fillStyle = "#ffffff";
ctx.fillRect(220, 20, 300, 240);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(220, 20, 300, 240);
}
function offHabitacion1(){
  // Habitacion 1
  ctx.fillStyle = "#000000";
  ctx.fillRect(220, 20, 300, 240);
  ctx.strokeStyle = "#ffffff"; 
  ctx.strokeRect(220, 20, 300, 240);
  }
  function onPatio(){
// Patio
ctx.fillStyle = "#ffffff";
ctx.fillRect(20, 20, 200, 345);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(20, 20, 200, 345);
  }
function offPatio(){
  ctx.fillStyle = "#000000";
ctx.fillRect(20, 20, 200, 345);
ctx.strokeStyle = "#ffffff"; 
ctx.strokeRect(20, 20, 200, 345);
}
function onCocina(){

// Cocina
ctx.fillStyle = "#ffffff";
ctx.fillRect(20, 365, 200, 215);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(20, 365, 200, 215); 
}
function offCocina(){

  // Cocina
  ctx.fillStyle = "#000000";
  ctx.fillRect(20, 365, 200, 215);
  ctx.strokeStyle = "#ffffff"; 
  ctx.strokeRect(20, 365, 200, 215); 
  }
  function onHabitacion2(){
// Habitacion 2
ctx.fillStyle = "#ffffff";
ctx.fillRect(520, 20, 330, 240);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(520, 20, 330, 240);
  }
  function offHabitacion2(){
    // Habitacion 2
    ctx.fillStyle = "#000000";
    ctx.fillRect(520, 20, 330, 240);
    ctx.strokeStyle = "#ffffff"; 
    ctx.strokeRect(520, 20, 330, 240);
    }
    function onHabitacion3(){
// Habitacion 3
ctx.fillStyle = "#ffffff";
ctx.fillRect(520, 320, 330, 260);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(520, 320, 330, 260);
    }
    function offHabitacion3(){
      // Habitacion 3
      ctx.fillStyle = "#000000";
      ctx.fillRect(520, 320, 330, 260);
      ctx.strokeStyle = "#ffffff"; 
      ctx.strokeRect(520, 320, 330, 260);
      }
      function onBaño1(){

// Baño 1
ctx.fillStyle = "#ffffff";
ctx.fillRect(300, 340, 220, 240);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(300, 340, 220, 240);
      }
      function offBaño1(){
        // Baño 1
        ctx.fillStyle = "#000000";
        ctx.fillRect(300, 340, 220, 240);
        ctx.strokeStyle = "#ffffff"; 
        ctx.strokeRect(300, 340, 220, 240);
        }
        function onBaño2(){
// Baño 2
ctx.fillStyle = "#ffffff";
ctx.fillRect(300, 440, 220, 140);
ctx.strokeStyle = "#000"; 
ctx.strokeRect(300, 440, 220, 140);
        }
        function offBaño2(){
          // Baño 2
          ctx.fillStyle = "#000000";
          ctx.fillRect(300, 440, 220, 140);
          ctx.strokeStyle = "#ffffff";
          ctx.strokeRect(300, 440, 220, 140);
          }
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

ctx.fillStyle = "#bdc014";
ctx.fillRect(mainDoor.x, mainDoor.y, mainDoor.width, mainDoor.height);
ctx.fillRect(bedroom1Door.x, bedroom1Door.y, bedroom1Door.width, bedroom1Door.height);
ctx.fillRect(bedroom2Door.x, bedroom2Door.y, bedroom2Door.width, bedroom2Door.height);
ctx.fillRect(bedroom3Door.x, bedroom3Door.y, bedroom3Door.width, bedroom3Door.height);
ctx.fillRect(kitchenDoor.x, kitchenDoor.y, kitchenDoor.width, kitchenDoor.height);
ctx.fillRect(bathroom1Door.x, bathroom1Door.y, bathroom1Door.width, bathroom1Door.height);
ctx.fillRect(bathroom3Door.x, bathroom3Door.y, bathroom3Door.width, bathroom3Door.height);



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





