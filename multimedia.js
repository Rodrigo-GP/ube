const video = document.getElementById("myVideo");
const audio = document.getElementById("bandaSonora");
const button = document.querySelector("button");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    audio.play();
    button.textContent = "Pausar";
  } else {
    video.pause();
    audio.pause();
    button.textContent = "Seguir viendo";
  }
}

// Evento cuando el video termina
video.addEventListener("ended", () => {
  audio.pause();               // Pausa el audio si aún suena
  audio.currentTime = 0;       // Reinicia audio
  video.currentTime = 0;       // Reinicia video
  button.textContent = "¿Vamos?";  // ⬅️ Aquí actualizamos el botón
}

);

function goBack() {
  window.location.href = "index.html"; // Cambia "index.html" por la URL o ruta real de tu menú principal
}







    









