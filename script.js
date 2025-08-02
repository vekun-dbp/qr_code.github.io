const bubbleContainer = document.getElementById('bubble-container');
const lines = document.querySelectorAll('.line');

let lineIndex = 0;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

function showNextLine() {
    if (lineIndex >= lines.length) return;
    lines[lineIndex].style.opacity = 1;
    lineIndex++;
    setTimeout(showNextLine, 3000); // delay between lines
}

setInterval(createBubble, 100); // generate bubbles constantly
setTimeout(showNextLine, 2000); // start text reveal
