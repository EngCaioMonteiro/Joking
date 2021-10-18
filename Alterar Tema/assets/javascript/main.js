const botao = document.querySelector("button");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const main = document.getElementsByTagName("main")[0];
const h1 = document.getElementsByTagName("h1")[0];
const dark = "Dark Mode";
const light = "Light Mode";
const darkModeClass = "dark-mode"

botao.addEventListener("click", mudarTema);

function mudarTema () {
    mudarClasse();
    mudarTexto();
}

function mudarTexto () {
    if (botao.classList.contains(darkModeClass)) {
        h1.innerHTML = dark + " ON"; 
        botao.innerHTML = light + " theme";
        return;
    }
    h1.innerHTML = light + " ON"; 
        botao.innerHTML = dark + " Theme";   
}

function mudarClasse () {
    botao.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    main.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
}