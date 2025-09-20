//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];

const inputName = document.getElementById('amigo');
const listaElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

function adicionarAmigo() {
    const nome = inputName.value.trim();
    if (!nome) {
        alert("Por favor, insira um nome!");
            inputName.focus();
            return;
        }        
    if (listaDeNomes.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    listaDeNomes.push(nome);
    inputName.value = "";
    inputName.focus();
    renderizarLista();
}

function renderizarLista() {
    listaElement.innerHTML = "";
    listaDeNomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    const indice = Math.floor(Math.random() * listaDeNomes.length);
    const nomeSorteado = listaDeNomes[indice];
    resultadoElement.innerHTML = "";
    const mensagem = document.createElement("p");
    mensagem.innerHTML = `O amigo secreto sorteado é: <strong>${nomeSorteado}</strong>🎁`;
    resultadoElement.appendChild(mensagem);

    const contadorAntigo = document.getElementById("contagemRegressiva");
    if (contadorAntigo) contadorAntigo.remove();

    let tempo = 10;
    const contador = document.createElement("p");
    contador.id = 'contagemRegressiva';
    contador.textContent = `Reiniciando em ${tempo} segundos...`;
    resultadoElement.appendChild(contador);

    const intervalo = setInterval (() => {
        tempo--;
        if (tempo > 0) {
           contador.textContent =  `Reiniciando em ${tempo} segundos...`;
        } else {
            clearInterval(intervalo);
            resetarSorteio();
        }
    }, 1000);
}

function resetarSorteio() {
    listaDeNomes = [];
    listaElement.innerHTML = "";
    resultadoElement.innerHTML = "";
    inputName.value = "";
    inputName.focus();
}