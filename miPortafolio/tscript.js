/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Susana Pacheco')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora y documentadora')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Amante de la naturaleza')
    .pauseFor(1500)
    
    .start();