var img1 = document.getElementById("imagem1"); 

function ampliar1() {
    img1.width = 650;
}

function reduzir1(){
    img1.width = 300;
}

function tamanhoNormal1(){
     img1.width = 410;
}

var img2 = document.getElementById("imagem2"); 

function ampliar2() {
    img2.width = 650;
}

function reduzir2(){
    img2.width = 300;
}

function tamanhoNormal2(){
     img2.width = 410;
}

var img3 = document.getElementById("imagem3"); 

function ampliar3() {
    img3.width = 650;
}

function reduzir3(){
    img3.width = 300;
}

function tamanhoNormal3(){
     img3.width = 410;
}

var img4 = document.getElementById("imagem4"); 

function ampliar4() {
    img4.width = 650;
}

function reduzir4(){
    img4.width = 300;
}

function tamanhoNormal4(){
     img4.width = 410;
}

function opniao(){
    alert("Seja bem vindo a nossa Padaria Online!")
    var pergunta = prompt ("Qual tipo de pão você deseja? \nfrances \ncaseiro \nbaguete");
    var n = prompt ("quantos pães você deseja? ");

    var paes = pergunta;
    
    switch (paes) {
        case "frances":
            var f=1.50;
            var total = f * n;
            alert ("O preço do pão é 1.50");
            alert("O total é R$ " + total)
        break;
        case "caseiro":
            var c=3.00;
            var total = c * n;
            alert ("O preço do pão é 3.00");
            alert("O total é R$ " + total)
        break;
        case "baguete":
            var b=5.00;
            var total = b * n;
            alert ("O preço do pão é 5.00");
            alert("O total é R$ " + total)
        break;
        default:
            alert ("Item inexistente!");
    }
}