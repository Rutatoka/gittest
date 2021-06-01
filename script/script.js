"use strict"
// создаем 2д пространоство
// let canvas = document.getElementById("canvas");
// let context = canvas.getContext("2d");
// let x = 10,
//     y = 10;
// let gameEngine;
// // рисуем квадрат
// function drawRect() {
//     context.fillStyle = "white";
//     context.clearRect(0, 0, 300, 300)
//     context.fillRect(x, y, 50, 50);
// }

// let nexGameStep = (function() {
//     return requestAnimationFrame ||
//         webkitRequestAnimationFrame ||
//         nozRequestAnimationFrame ||
//         oRequestAnimationFrame ||
//         nsRequestAnimationFrame ||
//         function(callback) {
//             window.setTimeout(callback, 1000 / 60);
//         };
// })();

// let gameEngineStart = function(callback) {
//     gameEngine = callback;
//     gameEngineStep();
// }
// let gameEngineStep = function() {
//     gameEngine();
//     nexGameStep(gameEngineStep);
// };
// let setGameEngine = function(callback) {
//         gameEngine = callback;
//     }
//     // едет вправо
// let gameLoopRight = function() {
//     drawRect();
//     x += 5;
//     if (x >= 250) {
//         setGameEngine(gameLoopLeft);
//     }
// };
// // едет влево
// let gameLoopLeft = function() {
//     drawRect();
//     x -= 5;
//     if (x < 0) {
//         setGameEngine(gameLoopRight);
//     }
// };

// gameEngineStart(gameLoopRight)

// загрузка аудио
function loadAudio(arr, vol) {
    let audio = document.createElement("audio")
    for (let i = 0, len = arr.length; i < len; i += 1) {
        let source = document.createElement("source")
        source.src = arr[i];
        audio.appendChild(source);
    }
    audio.volume = 1 || vol;
    let o = {
        dom: false,
        state: "stop",
        play: function() {
            this.dom.currentTime = 0;
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
        },

        setVolume: function(vol) {
            this.dom.volume = vol;
        }

    };
    o.dom = audio
    return o;
}
let jump = loadAudio(['jump.wav']);
let theme = loadAudio(['theme.mp3']);
let a;
theme.setVolume(0.4);
jump.setVolume(0.6);

theme.play();
setInterval(function() {
    if (a == 32) {
        jump.play();
    }
    if (a == 27) {
        theme.stop();
    }
    if (a == 17) {
        theme.play();
    }
    a = 0;
}, 20);
window.onkeyup = function(e) {
    a = e.keyCode;
};

// animation
let context = document.getElementById("canvas").getContext("2d");
let width = 200,
    height = 100;
let girl = loadImage("last-guardian-sprites/amg3_rt2.gif", 32, 32, 2);
let girl2 = loadImage("last-guardian-sprites/amg3_lf2.gif", 32, 32, 2);

setInterval(function() {
    context.clearRect(0, 0, 200, 100);
    drawImage(girl, 0, 0);
    drawImage(girl2, 70, 23);

}, 200)

function drawImage(img, x, y) {
    if (img.num >= img.count) img.num = 1
    else img.num += 1;
    context.drawImage(img.dom, img.width * (img.num - 1), 0, img.width, img.height, x, y, 32, 32);
}

function loadImage(path, width, height, count) {
    let image = document.createElement("img");
    let result = {
        dom: image,
        width: width,
        height: height,
        count: count,
        loaded: false,
        num: 1
    };

    image.onload = function() {
        result.loaded = true;
    };

    image.src = path;
    return result;
}