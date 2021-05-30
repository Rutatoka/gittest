"use strict"
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x = 10,
    y = 10;
let gameEngine;

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

let gameEngineStart = function(callback) {
    gameEngine = callback;
    gameEngineStep();
}
let gameEngineStep = function() {
    gameEngine();
    nexGameStep(gameEngineStep);
};
let setGameEngine = function(callback) {
    gameEngine = callback;
}
let gameLoopRight = function() {
    drawRect();
    x += 1;
    if (x >= 250) {
        setGameEngine(gameLoopLeft);
    }
};
let gameLoopLeft = function() {
    drawRect();
    x -= 1;

    if (x < 0) {
        setGameEngine(gameLoopRight);
    }
};


gameEngineStart(gameLoopRight)