let contador = 0;
let modo = true;
 
function contadorLike() {
  contador++;
  document.getElementById("likeTotales").textContent = contador + " likes";
}


function cuentaRegresiva() {
  let segundos = 10;
  const elemento = document.getElementById('tiempo');

  const intervalo = setInterval(() => {
    segundos--;
    elemento.textContent = segundos;

    if (segundos == 0) {
      clearInterval(intervalo);
      elemento.textContent = '¡Tiempo agotado!';
      alert("Tiempo agotado");
    }
  }, 1000);
}

cuentaAtras();

function cambiarModo() {
    if ( modo == true){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      modo = false;
    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      modo = true;
    }
}

function cambiarTitulo() {
  let nombre = document.getElementById("nombreUsuario").value;
  if (nombre.trim() === "") {
    alert("El nombre no puede estar vacio !!!");
  } else {
    let titulo = document.getElementById("tituloBlog");
    titulo.textContent = nombre;
  }
}

function selectorFondo() {
      const colorFondo = document.getElementById('selectorFondo').value;
      document.body.style.backgroundColor = colorFondo;
    }

function horaActual() {
      let ahora = new Date();
      let hora = ahora.getHours();
      let minutos = ahora.getMinutes();
      let segundos = ahora.getSeconds();
      alert(`Buenas !!! La hora es: ${hora} horas, ${minutos} minutos y ${segundos} segundos.`);
    }

function mostrar_ocultar() {    
      let descripcion = document.getElementById("desc");
      if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
      } else {
        descripcion.style.display = "none";
      }
    }

function sonidito() {    
       let audio = new Audio('sonido.mp3');
       audio.volume = 0.2;
       audio.play()
    }