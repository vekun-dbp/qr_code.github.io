const messages = [
    "Anh biết hỏi trực tiếp hơi khó...",
    "Nên anh làm thế này...",
    "Em ăn cơm chưa? 🙃"
];

let index = 0;
const container = document.getElementById('message-container');

function typeMessage(msg, callback) {
    let i = 0;
    container.innerHTML = '';
    const interval = setInterval(() => {
        container.innerHTML += msg[i++];
        if (i >= msg.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 80);
}

function createHeartsFromText(text) {
    [...text].forEach((char, i) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.position = 'absolute';
            span.style.left = `${Math.random() * window.innerWidth}px`;
            span.style.top = `${Math.random() * window.innerHeight}px`;

            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = span.style.left;
            heart.style.top = span.style.top;
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }, i * 80);
    });
}

function showNext() {
    if (index >= messages.length) return;
    const msg = messages[index++];
    typeMessage(msg, () => {
        createHeartsFromText(msg);
        setTimeout(showNext, 2000);
    });
}

showNext();
