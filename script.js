var setaL = document.getElementById("setaL")
var bruna = document.getElementById("bruna")
var samantha = document.getElementById("samantha")
var setaR = document.getElementById("setaR")

function RolarDireita(){
    setaL.style.display = "grid"
    bruna.style.display = "none"
    samantha.style.display = "grid"
    setaR.style.display = "none"
}

function RolarEsquerda(){
    setaL.style.display = "none"
    bruna.style.display = "grid"
    samantha.style.display = "none"
    setaR.style.display = "grid"
}