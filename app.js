const circle = document.getElementsByClassName('circle')
// const play = document.getElementById('play')
// const stop = document.getElementById('stop')

function on() {

 for (let i = 0; i < circle.length; i = i + 1) {
     circle [i].removeAttribute("style")
     }
}

function ligar() {

 for (let i = 0; i < circle.length; i = i + 1) {
     circle [i].removeAttribute("style")
     }
}


 function off() {
     for (let i = 0; i < circle.length; i = i + 1) {
         circle[i].style.animation = "none";
         circle[i].style.background = "#563260";
 }

 }
 function desligar() {
     for (let i = 0; i < circle.length; i = i + 1) {
         circle[i].style.animation = "none";
         circle[i].style.background = "#563260";
 }
 }
