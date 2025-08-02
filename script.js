const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const textElem = document.getElementById("realText");
const range = document.createRange();
const hearts = [];

for (let i = 0; i < textElem.textContent.length; i++) {
    const span = document.createElement("span");
    span.textContent = textElem.textContent[i];
    span.style.position = "absolute";
    textElem.appendChild(span);

    const rect = span.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY;

    hearts.push({ x, y, size: 8, color: "red" });
    span.remove(); // Xong thì bỏ đi
}

// Animation
let i = 0;
function animate() {
    if (i < hearts.length) {
        const heart = hearts[i];
        ctx.fillStyle = heart.color;
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, 2 * Math.PI);
        ctx.fill();
        i++;
        setTimeout(animate, 100); // từng trái tim 1
    }
}
animate();
