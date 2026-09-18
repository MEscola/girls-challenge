/* ========================================
   ELEMENTOS DA INTERFACE
======================================== */

const screen = document.querySelector(".screen");

const drawButton = document.getElementById("draw-button");

const timerContainer = document.getElementById("timer-container");
const timer = document.getElementById("timer");
const drawStatus = document.getElementById("draw-status");

const progressRing = document.getElementById("progress-ring");

const resultContainer = document.getElementById("result-container");
const girlName = document.getElementById("girl-name");
const wodType = document.getElementById("wod-type");
const wodList = document.getElementById("wod-list");

const copyButton = document.getElementById("copy-button");


/* ========================================
   CONFIGURAÇÕES
======================================== */

const COUNTDOWN_SECONDS = 3;

// Circunferência do círculo SVG
const CIRCLE_LENGTH = 565;


/* ========================================
   ESTADO DA APLICAÇÃO
======================================== */

let isDrawing = false;
let selectedGirl = null;


/* ========================================
   INICIALIZAÇÃO
======================================== */

progressRing.style.strokeDasharray = CIRCLE_LENGTH;
progressRing.style.strokeDashoffset = CIRCLE_LENGTH;

drawButton.addEventListener("click", handleDrawButton);
copyButton.addEventListener("click", copyResult);


/* ========================================
   BOTÃO PRINCIPAL
======================================== */

function handleDrawButton() {

    // Evita iniciar outro sorteio enquanto
    // o atual ainda está acontecendo.
    if (isDrawing) {
        return;
    }

    // Se já existe um resultado na tela,
    // remove o resultado antes de começar novamente.
    if (screen.classList.contains("show-result")) {
        screen.classList.remove("show-result");
    }

    startDraw();
}


/* ========================================
   INICIAR SORTEIO
======================================== */

function startDraw() {

    if (isDrawing) {
        return;
    }

    isDrawing = true;

    selectedGirl = null;

    // Estado visual de sorteio
    screen.classList.remove("show-result");
    screen.classList.add("is-drawing");

    // Bloqueia o botão durante a contagem
    drawButton.disabled = true;

    // Volta a interface para o estado inicial
    resetInterface();

    // Começa a contagem
    startCountdown();
}


/* ========================================
   CONTAGEM REGRESSIVA
======================================== */

function startCountdown() {

    let remaining = COUNTDOWN_SECONDS;

    updateTimer(remaining);

    const startTime = performance.now();

    function tick(currentTime) {

        const elapsed =
            (currentTime - startTime) / 1000;

        const secondsPassed =
            Math.floor(elapsed);

        const newRemaining =
            COUNTDOWN_SECONDS - secondsPassed;

        // Atualiza o número somente quando
        // o segundo realmente mudar.
        if (newRemaining !== remaining) {

            remaining = newRemaining;

            if (remaining >= 0) {
                updateTimer(remaining);
            }
        }

        // Atualiza o círculo continuamente.
        updateProgress(elapsed);

        // Continua a animação até completar
        // os 4 segundos.
        if (elapsed < COUNTDOWN_SECONDS) {

            requestAnimationFrame(tick);

        } else {

            finishCountdown();
        }
    }

    requestAnimationFrame(tick);
}


/* ========================================
   ATUALIZAR TIMER
======================================== */

function updateTimer(seconds) {

    const formattedSeconds =
        String(Math.max(seconds, 0)).padStart(2, "0");

    timer.textContent =
        `00:${formattedSeconds}`;
}


/* ========================================
   ATUALIZAR CÍRCULO DE PROGRESSO
======================================== */

function updateProgress(elapsed) {

    const progress =
        Math.min(
            elapsed / COUNTDOWN_SECONDS,
            1
        );

    const offset =
        CIRCLE_LENGTH -
        (progress * CIRCLE_LENGTH);

    progressRing.style.strokeDashoffset =
        offset;
}


/* ========================================
   FINALIZAR CONTAGEM
======================================== */

function finishCountdown() {

    // Garante que o último estado seja 00:00
    updateTimer(0);

    // Garante que o círculo esteja completo
    updateProgress(COUNTDOWN_SECONDS);

    // Sorteia imediatamente
    selectedGirl = drawGirl();

    // Ajusta o tamanho do nome da Girl sorteada
    adjustGirlNameSize();

    // Pequena pausa para o 00:00 aparecer
    setTimeout(() => {

        // Coloca o nome dentro do próprio timer
        timer.textContent = selectedGirl.name;

        // Adiciona a classe visual do nome
        timer.classList.add("girl-result");

        // Ativa a animação de impacto
        timerContainer.classList.add("reveal-name");

        // Depois do impacto, mostra os detalhes
        setTimeout(() => {

            showResult(selectedGirl);

        }, 650);

    }, 250);
}


/* ========================================
   SORTEIO DA GIRL
======================================== */

function drawGirl() {

    /*
       Neste primeiro MVP todas as Girls
       participam do sorteio.

       Futuramente podemos filtrar aqui
       os movimentos do WOD atual.
    */

    const availableGirls = [...girls];

    const randomIndex =
        Math.floor(
            Math.random() * availableGirls.length
        );

    return availableGirls[randomIndex];
}

/* ========================================
   AJUSTAR TAMANHO DO NOME
======================================== */

function adjustGirlNameSize() {

    const availableWidth = timerContainer.clientWidth * 0.40;

    timer.style.fontSize = "6rem";

    const textWidth = timer.scrollWidth;

    if (textWidth > availableWidth) {

        const scale =
            availableWidth / textWidth;

        const currentSize =
            parseFloat(
                window.getComputedStyle(timer).fontSize
            );

        timer.style.fontSize =
            `${currentSize * scale}px`;
    }
}

/* ========================================
   MOSTRAR RESULTADO
======================================== */

function showResult(girl) {

    // Remove o estado de sorteio
    screen.classList.remove("is-drawing");

    // Nome da Girl
    girlName.textContent =
        girl.name;

    // Tipo do WOD
    wodType.textContent =
        girl.wod.type;

    // Limpa a lista anterior
    wodList.innerHTML = "";

    // Cria os movimentos do WOD
    girl.wod.description.forEach(item => {

        const listItem =
            document.createElement("li");

        listItem.textContent =
            item;

        wodList.appendChild(listItem);
    });

    // Mostra o resultado
    screen.classList.add("show-result");

    // Atualiza o status
    drawStatus.textContent =
        "RESULTADO";

    // Sorteio terminou
    isDrawing = false;

    // Libera o botão
    drawButton.disabled = false;

    // Agora ele permite outro sorteio
    drawButton.textContent =
        "NOVO SORTEIO";
}


/* ========================================
   COPIAR RESULTADO
======================================== */

async function copyResult() {

    // Não faz nada se ainda não existe
    // uma Girl sorteada.
    if (!selectedGirl) {
        return;
    }

    const resultText =
        createResultText(selectedGirl);

    try {

        await navigator.clipboard.writeText(
            resultText
        );

        showCopyFeedback();

    } catch (error) {

        console.error(
            "Não foi possível copiar o resultado:",
            error
        );
    }
}


/* ========================================
   CRIAR TEXTO PARA COPIAR
======================================== */

function createResultText(girl) {

    const wod =
        girl.wod.description.join("\n");

    return `${girl.name}

${girl.wod.type}

${wod}`;
}


/* ========================================
   FEEDBACK DO BOTÃO COPIAR
======================================== */

function showCopyFeedback() {

    const originalText =
        copyButton.textContent;

    copyButton.textContent =
        "✓ COPIADO!";

    setTimeout(() => {

        copyButton.textContent =
            originalText;

    }, 2000);
}


/* ========================================
   RESET DA INTERFACE
======================================== */

function resetInterface() {

    // Remove efeitos do resultado anterior
    timer.classList.remove("girl-result");
    timerContainer.classList.remove("reveal-name");

    // Timer
    timer.textContent =
        "00:04";

    // Status
    drawStatus.textContent =
        "SORTEANDO...";

    // Círculo
    progressRing.style.strokeDashoffset =
        CIRCLE_LENGTH;

    // Botão copiar
    copyButton.textContent =
        "COPIAR RESULTADO";

    // Botão principal
    drawButton.textContent =
        "FALTOU?";
}


