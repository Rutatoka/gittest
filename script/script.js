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
theme.setVolume(0.7);
jump.setVolume(0.3);

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
let width = 100,
    height = 100;
let image = document.getElementById("image");
let x = 0;
let i = 1;
setInterval(function() {
    drawImage("last-guardian-sprites/amg3_rt2.gif", i, 3);
    if (i >= 2) i = 1;
    else i += 1;
}, 200)

function drawImage(img, num, speed) {
    num = num ? num - 1 : 0;
    x += speed ? speed : 0;
    image.onload = function() {
        width = image.width;
        height = image.height;
        context.clearRect(0, 0, 100, 100);
        context.drawImage(image, 32 * num, 0, 32, 32, x, 0, 32, 32);
        image.style.display = "none";
    };
    image.src = img;
}


//    
// function drawImage(img, num) {
//     num = num ? num - 1 : 0;
//     image1.onload = function() {
//         width = image1.width;
//         height = image1.height;
//         context.drawImage(image1, 16 * num, 0, 16, 27, 0, 0, 16, 27);
//         image1.style.display = "none"
//     };
//     image2.onload = function() {
//         width = image2.width;
//         height = image2.height;
//         context.drawImage(image2, 16 * num, 0, 16, 27, 0, 0, 16, 27);
//         image2.style.display = "none"
//     };
//     
// }