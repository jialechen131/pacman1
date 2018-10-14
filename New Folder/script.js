let ghost = document.querySelector('#ghostTesting');
let player = document.querySelector("#player");
let ghost2 = document.querySelector("#blinky");
let ghost3 = document.querySelector("#inky");
let ghost4 = document.querySelector("#Clyde");
let ghost5 = document.querySelector("#pinky");
let ghost6 = document.querySelector("#ghost6");
let win = document.querySelector("#winning");
let again = document.querySelector("#again")

ghost.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost2.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost3.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost4.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost5.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});

ghost6.addEventListener('collide', e => {
   player.setAttribute('position', '38.424 4 -26.201');
});


win.addEventListener('collide', e=>{
player.setAttribute('position','38.424 4 3778.817');   
   
});

again.addEventListener('collide', e=>{
   player.setAttribute('position', '38.424 4 -26.201')
   
   

   
});

