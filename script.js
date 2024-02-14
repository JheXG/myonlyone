const alternatives = [
    { text: "👀💖", image: "img/1.png", buttons: ["Ombio mi amor🥰💖", "nooo🙄"] },
    { text: " wtf, pero porqué dices que NO😔", image: "img/2.png", buttons: ["claro que quiero ser tu San Valentin mi amor💖", "Porque -no quiero, no quiero, NO QUIEROOno quiero, no quiero, NO QUIEROO-💢"] },
    { text: " Di que Sí mi amor🥺💖", image: "img/3.png", buttons: ["Sí mi amorcito hemosho peshosho💖", "Nnnno😋"] },
    { text: " Por favor mi amor🥺", image: "img/4.png", buttons: ["Sí mi vida💖", "Nooo🙄"] },
    { text: " Porqueee😭", image: "img/5.png", buttons: ["Ti mi amorcito🥰💖", "¿Por qué diría que sí?🤨"] },
    { text: " Porque eres mi esposita hemosha peshosha y te amo mucho🥰💖", image: "img/6.png", buttons: ["Grr está bien mi amor🥰💖", "Awww🥺💖, pero te dije que No😋"] },
    { text: " ¿Te diviertes verdad?🤨💔", image: "img/7.png", buttons: ["Yes, Yes, Yes, Claro que Yes mi amor🥰💖", "jeje😋"] },
    { text: " 🙄", image: "img/8.png", buttons: ["Chi mi amor💖", "🙄"] },
    { text: "Ya di que Sí Esposita hemoshaa💖", image: "img/9.png", buttons: ["Tí bebé🥰💖", "😋"] },
    { text: "Grr voy a deshabilitar ese pinche botón🙄💢", image: "img/10.png", buttons: ["Era bromuro mi amor, Claro que quiero ser tu San Valentin🥰💖", "Noooo😢"] },
    { text: "😎", image: "img/11.png", buttons: ["La ma ombia po mi amor🥰💖"] },
    { text: "Lo sabía mi amorcita linda, hemosha, peshosha🥰💖, te amo muucho💖", image: "img/12.png", buttons: ["🥰💖"] },
];

const buttonContainer = document.getElementById('buttonContainer');
const responseMessage = document.getElementById('responseMessage');
const valentineImage = document.getElementById('valentineImage');

let currentAlternativeIndex = 0;

// Función para abrir el video
function openVideo() {
    // Reemplaza 'URL_DEL_VIDEO' con la URL real del video que deseas abrir
    window.open('img/chilitouwu.mp4', '_blank');
}

function updateDisplay() {
    const currentAlternative = alternatives[currentAlternativeIndex];

    valentineImage.src = currentAlternative.image;
    responseMessage.textContent = currentAlternative.text;

    buttonContainer.innerHTML = ''; // Limpiar los botones anteriores

    // Crear botones
    currentAlternative.buttons.forEach((buttonText, index) => {
        const button = document.createElement('button');
        button.textContent = buttonText;

        if (currentAlternativeIndex === alternatives.length - 1 && index === 0) {
            // Si estamos en el último caso y es el primer botón, abrir el video
            button.addEventListener('click', openVideo);
        } else {
            // Para otros botones, continuar con la lógica existente
            button.addEventListener('click', () => handleButtonClick(index));
        }

        buttonContainer.appendChild(button);
    });
}

function handleButtonClick(buttonIndex) {
    if (buttonIndex === 0) {
        // Si se hace clic en el primer botón, saltar al último caso
        currentAlternativeIndex = alternatives.length - 1;
    } else {
        // Si se hace clic en cualquier otro botón, avanzar al siguiente caso
        currentAlternativeIndex++;
    }

    // Actualizar la pantalla con el nuevo caso
    updateDisplay();
}

// Mostrar la primera opción al cargar la página
updateDisplay();

