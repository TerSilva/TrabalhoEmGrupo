const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Alterando o tema para tipo sanguíneo
const perguntas = [
    {
        enunciado: "Qual é o seu tipo sanguíneo?",
        alternativas: [
            {
                texto: "A+",
                afirmacao: "Você é uma pessoa que se destaca pela sua capacidade de liderança."
            },
            {
                texto: "B+",
                afirmacao: "Você é conhecido por ser criativo e adaptável."
            },
            {
                texto: "AB+",
                afirmacao: "Você é uma pessoa equilibrada e versátil."
            },
            {
                texto: "O+",
                afirmacao: "Você é generoso e sempre disposto a ajudar os outros."
            }
        ]
    },
    {
        enunciado: "Como você se sente ao saber que seu tipo sanguíneo é raro?",
        alternativas: [
            {
                texto: "Sinto-me especial!",
                afirmacao: "Você valoriza a singularidade do seu tipo sanguíneo."
            },
            {
                texto: "Isso me preocupa.",
                afirmacao: "Você se preocupa com a dificuldade de encontrar doadores compatíveis."
            }
        ]
    },
    {
        enunciado: "Você precisa doar sangue. O que você faz?",
        alternativas: [
            {
                texto: "Vou imediatamente ao hemocentro.",
                afirmacao: "Você sabe da importância da doação e age rapidamente."
            },
            {
                texto: "Penso duas vezes antes de ir.",
                afirmacao: "Você hesita, mas acaba decidindo ajudar."
            }
        ]
    },
    {
        enunciado: "Você descobre que seu amigo precisa de uma transfusão. O que você faz?",
        alternativas: [
            {
                texto: "Ofereço meu sangue sem pensar duas vezes.",
                afirmacao: "Você é altruísta e se preocupa com a saúde dos outros."
            },
            {
                texto: "Sugiro que ele procure um doador.",
                afirmacao: "Você tenta ajudar, mas prefere não se envolver diretamente."
            }
        ]
    },
    {
        enunciado: "Você está em uma campanha de doação de sangue. Como você se sente?",
        alternativas: [
            {
                texto: "Orgulhoso de fazer parte disso!",
                afirmacao: "Você se sente parte de algo maior e importante."
            },
            {
                texto: "Um pouco nervoso.",
                afirmacao: "Você tem medo de agulhas, mas sabe que é por uma boa causa."
            }
        ]
    },
];

// Alterando as cores para vermelho e branco
caixaPrincipal.style.backgroundColor = "white";
caixaPerguntas.style.color = "red";
caixaAlternativas.style.color = "red";
caixaResultado.style.color = "red";

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por participar!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
