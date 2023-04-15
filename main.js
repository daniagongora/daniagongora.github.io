let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy programadora y estudiante de ciencias de la computación.')
  .pauseFor(100)
  .deleteChars(5)
  .start();
