const mostraDados = () => {

    var nome = document.getElementById("user").value;    
    var senha = document.getElementById("password").value;  
    
    var mostra = document.getElementById("pegadinha");
    mostra.innerHTML = "O usuário é " + nome + " e a senha é " + senha;

    console.log("O usuário é " + nome + " e a senha é " + senha);
}