"use strict"
// создаем 2д пространоство
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x = 10,
    y = 10;
let gameEngine;
// рисуем квадрат
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
    // едет вправо
let gameLoopRight = function() {
    drawRect();
    x += 5;
    if (x >= 250) {
        setGameEngine(gameLoopLeft);
    }
};
// едет влево
let gameLoopLeft = function() {
    drawRect();
    x -= 5;
    if (x < 0) {
        setGameEngine(gameLoopRight);
    }
};

gameEngineStart(gameLoopRight)

// загрузка аудио
function loadAudio(arr) {
    let audio = document.createElement("audio")
    for (let i = 0, len = arr.length; i < len; i += 1) {
        let source = document.createElement("source")
        source.src = arr[i];
        audio.appendChild(source);
    }

    let o = {
        dom: false,
        state: "stop",
        play: function() {
            this.dom.play();
            this.state = "play";
        },
        pause: function() {
            this.dom.pause();
            this.state = "pause";
        },
        stop: function() {
            this.dom.pause();
            this.dom.currentTime = 0;
            this.state = "stop";
        }


    };
    o.dom = audio
    return o;
}
let a1 = loadAudio(['jumpo.wav']);
let a2 = loadAudio(['theme.mp3']);
a1.play();