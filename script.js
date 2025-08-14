
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que saber o seu tipo sanguíneo é tão importante?",
        alternativas: [
            "Pois é crucial para quando voce for realizar transfussões de sangue, pois se caso fizerem com o tipo sanguíneo errado pode causar rejeição de sangue!",
            "Não é importante, pois qualquer sangue é compátivel no nosso organismo!"
        ]
    },
    {
        enunciado: "Qual é o tipo sanguíeno que é considerado doador universal?",
        alternativas: [
            "Tipo AB",
            "Tipo O",
        ]
    },
    {
        enunciado: "Qual o tipo sanguíneo que é considerado receptor universal?",
        alternativas: [
            "Tipo O",
            "Tipo AB"
        ]
    },
    {
        enunciado: "Qual tipo de RH que indica a presença do antígeno RH nos globulos vermelhos?",
        alternativas: [
            "Rh negativo",
            "Rh positivo"
        ]
    },
    {
        enunciado: "Qual tipo de RH que indica a ausencia do antígeno RH nos globulos vermelhos?",
        alternativas: [
            "Rh positivo",
            "Rh negativo"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
