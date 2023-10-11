function IfElse(){
    alert("Teste if e else")

    let num01 = parseInt(prompt("Escreva um numero"))
    let num02 = parseInt(prompt("Escreva outro numero"))

    let divisao, subtracao

    if(num01>num02){
        divisao = num01/num02
        subtracao = num01-num02
    }else {
        divisao = num02/num01
        subtracao = num02-num01
    }

    let soma = num01+num02
    let multiplicacao = num01*num02

    alert("Soma:"+ soma)
    alert("Subtracão:"+ subtracao)
    alert("Multiplicacão:"+ multiplicacao)
    alert("divisao:"+ divisao)
}
