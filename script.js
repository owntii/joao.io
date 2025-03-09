// Variável para contar as perguntas
let perguntaIndex = 0;

// Array de perguntas e respostas
const perguntas = [
    {
        pergunta: "o joao foi um babaca?",
        respostaSim: "desculpa livia da solva",
        respostaNao: "fui sim, desculpa livia pitton"
    },
    {
        pergunta: "o joao foi um otario?",
        respostaSim: "desculpa livia ivia",
        respostaNao: "fui sim, desculpa, nunca mais vo ser assim"
    },
    {
        pergunta: "o joao e um bosta?",
        respostaSim: "eu sei, fui babaca, desculpa pitton livia",
        respostaNao: "e sim, desculpa"
    },
    {
        pergunta: "o joao e feio?",
        respostaSim: "triste realidade",
        respostaNao: "ownt, que fofa, desculpa"
    },
    {
        pergunta: "o joao odeia a livia?",
        respostaSim: "oxi, claro que nao, jamais, nunca",
        respostaNao: "obvio que nao"
    },
    {
        pergunta: "o joao se arrepende de tudo oq ele falou e quer ter a livia da silva de volta?",
        respostaSim: "me perdoa livia",
        respostaNao: " me arrependo si, desculpa"
    }
];

// Função que é chamada quando o usuário clica em "Sim"
function responderSim() {
    mostrarResposta(perguntas[perguntaIndex].respostaSim);
}

// Função que é chamada quando o usuário clica em "Não"
function responderNao() {
    mostrarResposta(perguntas[perguntaIndex].respostaNao);
}

function mostrarResposta(resposta) {
    // Esconde a pergunta e os botões "Sim" e "Não"
    document.getElementById("pergunta").style.display = "none";
    document.getElementById("botoes").style.display = "none";

    // Exibe a resposta
    document.getElementById("mensagem").textContent = resposta;

    // Se for a última pergunta, iniciar a animação de desaparecer o quadrado e corações
    if (perguntaIndex === perguntas.length - 1) {
        esconderQuadrado();  // Esconde o quadrado
        desaparecerCoracoes();  // Inicia o desaparecimento dos corações
    } else {
        // Exibe o botão "Próxima pergunta" normalmente
        document.getElementById("proxima").style.display = "block";
    }
}




// Função para esconder a pergunta e mostrar a carta com animação
function esconderPerguntasEMostrarCarta() {
    // Esconde a pergunta e a resposta
    document.getElementById("pergunta").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("botoes").style.display = "none";

    // Exibe a carta com animação
    mostrarCarta();
}

// Função para exibir a carta com animação
function mostrarCarta() {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.innerHTML = `
        <p>oi livia piton</p>
        <p>Blablablablablablablablablablablablabla...</p>
        <p><strong>.</strong></p>
    `;

    document.body.appendChild(carta);

    // A animação começa após 0.5s
    setTimeout(function() {
        carta.style.transition = "opacity 1s ease, transform 1s ease";
        carta.style.opacity = "1";
        carta.style.transform = "scale(1)";
    }, 500); // A animação começa após 0.5s
}

// Função para mostrar a próxima pergunta
function mostrarProximaPergunta() {
    // Oculta a resposta e o botão "Próxima pergunta"
    document.getElementById("mensagem").textContent = "";
    document.getElementById("proxima").style.display = "none";

    // Aumenta o índice da pergunta
    perguntaIndex++;

    if (perguntaIndex < perguntas.length) {
        // Exibe a próxima pergunta e os botões
        document.getElementById("pergunta").style.display = "block";
        document.getElementById("botoes").style.display = "block";
        document.getElementById("pergunta").textContent = perguntas[perguntaIndex].pergunta;
    } else {
        // Se for a última pergunta, exibe a carta com animação
        mostrarCarta();  
    }
}


// Função para esconder o quadrado com animação
function esconderQuadrado() {
    // Adiciona uma classe de animação para o quadrado desaparecer suavemente
    document.getElementById("quadrado").classList.add("animar-quadrado");
    
    // Espera o tempo da animação terminar para esconder o quadrado completamente
    setTimeout(function() {
        document.getElementById("quadrado").style.display = "none";
    }, 5000); // 1 segundo de duração da animação
}

// Função para desaparecer um coração por vez
function desaparecerCoracoes() {
    const coracoes = document.querySelectorAll('.coracao');
    let i = 0;
    
    const intervalo = setInterval(function() {
        // Esconde o próximo coração com animação
        coracoes[i].classList.add('animar-coracao');
        i++;
        
        // Quando todos os corações desaparecerem, para a animação e exibe a carta
        if (i === coracoes.length) {
            clearInterval(intervalo);
            mostrarCarta(); // Chama a função para exibir a carta
        }
    }, 500); // Intervalo de 0.5 segundos entre os corações
}

// Função para mostrar a carta final
function mostrarCarta() {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.innerHTML = `
        <p>oi livia piton, me perdoa por favo, eu gosto muito de voce, quero que a gente de certo, to planejando nosso futuro, a gente vai ter 2 filho, vai ser o frank e o ocean, e vamos ter o max de pet e a yuna tambem, agi igual um primata, desculpa</p>
        <p>💜<p>
    `;
    document.body.appendChild(carta);

    // A animação da carta começa após um pequeno delay
    setTimeout(function() {
        carta.style.transition = "opacity 1s ease, transform 1s ease";
        carta.style.opacity = "1";
        carta.style.transform = "scale(1)";
    }, 500); // 0.5 segundos após o fim da animação dos corações
}
