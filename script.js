// Simple bouncing ball animation for hobbies page

const canvas = document.getElementById("hobbyCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let dx = 2;
let dy = 3;
let radius = 20;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#4CAF50";  // green ball
    ctx.fill();
    ctx.closePath();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();

    // Bounce off walls
    if (x + dx > canvas.width - radius || x + dx < radius) dx = -dx;
    if (y + dy > canvas.height - radius || y + dy < radius) dy = -dy;

    x += dx;
    y += dy;

    requestAnimationFrame(animate);
}

animate();
