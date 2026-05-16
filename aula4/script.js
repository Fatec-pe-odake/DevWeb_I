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

// ATIVDADE 4 

function ativ4() {
    let tarefa = document.getElementById('tarefa').value
    let li = document.createElement("li");
    li.textContent = tarefa;
    document.getElementById("lista-4").appendChild(li);
}