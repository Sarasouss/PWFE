var video1 = document.getElementById("video1");

function playPause1(){
    if (video1.paused)
       video1.play();
    else
       video1.pause();
}

function ampliar1() {
    video1.width = 650;
}

function reduzir1(){
    video1.width = 300;
}

function tamanhoNormal1(){
     video1.width = 410;
}

function telaCheia1(){
      video1.requestFullscreen();
}

function aumentarVomule1(){
    video1.volume += 0.1;
}

function diminuirVomule1(){
    video1.volume -= 0.1;
}

function mudo1(){
   if (video1.muted == false)
     video1.muted = true;
    else
      video1.muted = false;
}

var video2 = document.getElementById("video2");

function playPause2(){
    if (video2.paused)
       video2.play();
    else
       video2.pause();
}

function ampliar2() {
    video2.width = 650;
}

function reduzir2(){
    video2.width = 300;
}

function tamanhoNormal2(){
     video2.width = 410;
}

function telaCheia2(){
      video2.requestFullscreen();
}

function aumentarVomule2(){
    video2.volume += 0.1;
}

function diminuirVomule2(){
    video2.volume -= 0.1;
}

function mudo2(){
   if (video2.muted == false)
     video2.muted = true;
    else
      video2.muted = false;
}


var video3 = document.getElementById("video3");

function playPause3(){
    if (video3.paused)
       video3.play();
    else
       video3.pause();
}

function ampliar3() {
    video3.width = 650;
}

function reduzir3(){
    video3.width = 300;
}

function tamanhoNormal3(){
     video3.width = 410;
}

function telaCheia3(){
      video3.requestFullscreen();
}

function aumentarVomule3(){
    video3.volume += 0.1;
}

function diminuirVomule3(){
    video3.volume -= 0.1;
}

function mudo3(){
   if (video3.muted == false)
     video3.muted = true;
    else
      video3.muted = false;
}

var video4 = document.getElementById("video4");

function playPause4(){
    if (video4.paused)
       video4.play();
    else
       video4.pause();
}

function ampliar4() {
    video4.width = 650;
}

function reduzir4(){
    video4.width = 300;
}

function tamanhoNormal4(){
     video4.width = 410;
}

function telaCheia4(){
      video4.requestFullscreen();
}

function aumentarVomule4(){
    video4.volume += 0.1;
}

function diminuirVomule4(){
    video4.volume -= 0.1;
}

function mudo4(){
   if (video4.muted == false)
     video4.muted = true;
    else
      video4.muted = false;
}

function opniao(){
    var x;
    var nome;
    var idade;

    var nome=prompt("Digite seu nome ");
    var idade = prompt("Digite sua idade ")
    var x=prompt("Deixe sua nota pelo site ");


    alert("O usuário " + nome +" de " + idade + " anos "+", deu " + x + " estrelas");
}