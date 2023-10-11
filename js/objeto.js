function objeto(){
    const pessoa = {
        primeiroNome: "Alexandre",
        segundoNome: "Lemes",
        idade: 19,
    }

    document.getElementById("objeto").innerHTML = pessoa.primeiroNome + " tem " + pessoa.idade + " anos"
}