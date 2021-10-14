const mostraDados = () => {

    var nome = document.getElementById("user").value;
    var senha = document.getElementById("password").value;

    /* document.getElementById("pegadinha").innerHTML = "O usuário é " + nome + " e a senha é " + senha; */

    var mostra = document.getElementById("pegadinha");
    mostra.innerHTML = "O usuário é " + nome + " e a senha é " + senha;

    console.log("O usuário é " + nome + " e a senha é " + senha);
}