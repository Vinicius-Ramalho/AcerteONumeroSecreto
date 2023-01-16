function verificarChuteValido(chute){
    const numero = parseInt(chute)

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto esta entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        
        document.body.classList.add('acertou')

        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor</div>'
    }

    else{
        elementoChute.innerHTML += '<div>O número secreto é maior</div>'
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})