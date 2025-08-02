const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const messages = [
    "Anh biết hỏi trực tiếp hơi khó...",
    "Nên anh làm thế này...",
    "Em ăn cơm chưa? 🙃"
];

let hearts = [];
let currentText = 0;

function createHeart(x, y) {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        tx: x,
        ty: y,
        vx: 0,
        vy: 0,
        size: 4,
        color: `hsl(${Math.random() * 360}, 80%, 70%)`
    };
}

function renderTextToPoints(text) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 60px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const points = [];

    for (let y = 0; y < canvas.height; y += 8) {
        for (let x = 0; x < canvas.width; x += 8) {
            const i = (y * canvas.width + x) * 4;
            if (imgData[i + 3] > 150) points.push({ x, y });
        }
    }
    return points;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let h of hearts) {
        const dx = h.tx - h.x;
        const dy = h.ty - h.y;
        h.vx += dx * 0.01;
        h.vy += dy * 0.01;
        h.vx *= 0.9;
        h.vy *= 0.9;
        h.x += h.vx;
        h.y += h.vy;

        ctx.fillStyle = "#ff4d6d";
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(animate);
}

function showNextMessage() {
    if (currentText >= messages.length) return;
    const points = renderTextToPoints(messages[currentText]);
    hearts = points.map(p => createHeart(p.x, p.y));
    currentText++;
    setTimeout(showNextMessage, 3000);
}

showNextMessage();
animate();
