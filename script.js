const bubbleContainer = document.getElementById('bubble-container');
const lines = document.querySelectorAll('.line');

let lineIndex = 0;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.top = window.innerHeight + 'px';
    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 4000);
}

function showNextLine() {
    lines.forEach(line => line.style.opacity = 0); // ẩn hết
    if (lineIndex >= lines.length) return;
    lines[lineIndex].style.opacity = 1;
    setTimeout(() => {
        lines[lineIndex].style.opacity = 0;
        lineIndex++;
        showNextLine(); // hiển thị câu tiếp theo
    }, 3000); // mỗi câu hiển thị 3s
}

setInterval(createBubble, 100);
setTimeout(showNextLine, 2000); // bắt đầu sau 2s
