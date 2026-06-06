// ATIVIDADE 1

let btn_ativ_1 = document.getElementById('btn-desaparece');
function ativ1() {
    btn_ativ_1.style.display = 'none';
    alert("desapareço");
}

// ATIVIDADE 2

function ativ2() {
    let input_ativ2 = document.getElementById('caixa-de-texto-ativ2').value
    let container = document.getElementById("div_ativ2");
    container.textContent = input_ativ2;
}

// ATIVIDADE 3

function ativ3() {
    let resposta = document.getElementById('pergunta_id').value
    let container = document.getElementById("ativ3");

    if (resposta == 'macau'){
        // container.textContent = "PARABÉNS ACERTOU, MACAU É O PAÍS MAIS POVOADO (PESSOAS POR m²)";
        alert("PARABÉNS ACERTOU, MACAU É O PAÍS MAIS POVOADO (PESSOAS POR m²)");
    }
    else {
        // container.textContent = "ERROU, NÃO PENSE EM NÚMERO ABSOLUTO";
        alert("ERROU, NÃO PENSE EM NÚMERO ABSOLUTO");
    }
}

// ATIVIDADE 4 

function ativ4() {
    let tarefa = document.getElementById('tarefa').value
    let li = document.createElement("li");
    li.textContent = tarefa;
    document.getElementById("lista-4").appendChild(li);
}

// ATIVIDADE 5

function ativ5() {
    let temp = document.getElementById('temperatura').value
    let containerAtiv5 = document.getElementsByClassName('ativ5')

    let farenheit = temp * ( 9 / 5 ) + 32
    document.getElementById('resultado').textContent = `°F ${farenheit}`
}

// ATIVIDADE 6 

function ativ6(cor) {
    const cores = ['red', 'yellow', 'greenyellow'];

    cores.forEach((corAtual) => {
        const elemento = document.querySelector(`.${corAtual}`);
        if (!elemento) return;

        if (corAtual === cor) {
            elemento.style.backgroundColor = corAtual;
        } else {
            elemento.style.backgroundColor = 'transparent';
        }
    });
}

// ATIVIDADE 7

function ativ7() {
    let tabuada = document.getElementById('tabuada');
    let numeroTabuada = document.getElementById('numero').value;

    // Limpa a tabuada anterior
    tabuada.innerHTML = '';

    // Cria a tabuada de 1 a 10
    for(let i = 1; i <= 10; i++) {
        let elementoTabuada = document.createElement("p");
        elementoTabuada.textContent = `${numeroTabuada} x ${i} = ${numeroTabuada * i}`;
        tabuada.appendChild(elementoTabuada);
    }
}