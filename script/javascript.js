var pass = document.getElementById("psw");
var blackContainer = document.getElementById("black-container");
var container = document.getElementById("container");

function klik() {
    blackContainer.style.display = "flex";
    container.style.display = "flex";
}


blackContainer.addEventListener('click', () => {
    blackContainer.style.display = "none";
    container.style.display = "none";
})

function checkPassword(){
    if(pass.value != "310402"){
        alert("Cie bukan depita")
    }
    else {
        window.location.pathname = "/page/second.html";
    }
}