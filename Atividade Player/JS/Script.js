var meuVideo = document.getElementById("playerCustomizado"); //Criando a id para colocar no html

function playPause(){
    if (meuVideo.paused)
       meuVideo.play();
    else
       meuVideo.pause();
}//Botão para play e pause

function ampliar() {
    meuVideo.width = 650;
}//Botão para ampliar

function reduzir(){
    meuVideo.width = 300;
}//Botão para reduzir

function tamanhoNormal(){
     meuVideo.width = 410;
}//Botão de tamanho normal

function telaCheia(){
      meuVideo.requestFullscreen();
}//Botão de tela cheia

function aumentarVomule(){
    meuVideo.volume += 0.1;
}//Botão aumentar volume

function diminuirVomule(){
    meuVideo.volume -= 0.1;
}// Botão diminuir volume

function mudo(){
   if (meuVideo.muted == false)
     meuVideo.muted = true;
    else
      meuVideo.muted = false;
}//Botão Mudo

function opniao(){
    var x;
    var nome;

    var nome=prompt("Digite seu nome ");
    var x=prompt("Deixe sua nota pelo vídeo ");

    alert("Olá " + nome + ", você deu " + x + " estrelas");
}