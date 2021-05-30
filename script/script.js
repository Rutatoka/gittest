"use strict"
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x = 10,
    y = 10;

function drawRect() {
    context.fillStyle = "black";
    context.clearRect(0, 0, 300, 300)
    context.fillRect(x, y, 50, 50);
}
let nexGameStep = (function() {
    return requestAnimationFrame ||
        webkitRequestAnimationFrame ||
        nozRequestAnimationFrame ||
        oRequestAnimationFrame ||
        nsRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
let gameLoop = function() {
    drawRect();
    x += 1;
    nexGameStep(gameLoop);
};
gameLoop();