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
// window.onkeyup = function (event) {
//     a = event.keyCode;
// };

// animation
let canvas = document.getElementById("canvas");

function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozrequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

function cancelFullScreen() {
    if (element.cancelFullScreen) {
        element.cancelFullScreen();
    } else if (element.mozCancelFullScreen) {
        element.mozCancelFullScreen();
    } else if (element.webkitCancelFullScreen) {
        element.webkitCancelFullScreen();
    }
}

canvas.onclick = function() {
    launchFullScreen(canvas);
    // canvas.onclick=function(){
    // cancelFullScreen();
    // };
    // onfullscreenchange();
};
// let onfullscreenchange = function() {
//     let fullscreenElement =
//         document.fullscreenElement ||
//         document.mozFullscreenElement ||
//         document.webkitFullscreenElement;
//     let fullscreenEnabled =
//         document.fullscreenEnabled ||
//         document.mozFullscreenEnabled ||
//         document.webkitFullscreenEnabled;
//     console.log("fullscreenEnabled=" + fullscreenEnabled, ",fullscreenElement=", fullscreenElement);

// }

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
// клавиши
let keys = {
    "W": 87,
    "S": 83,
    "A": 65,
    "D": 68
}


function engine() {
    // context.clearRect(0, 0, 100, 100);
    if (isKeyDown('W'))
        context.fillText('W', 30, 60);
    if (isKeyDown('S'))
        context.fillText('S', 30, 70);
    if (isKeyDown('D'))
        context.fillText('D', 40, 70);
    if (isKeyDown('A'))
        context.fillText('A', 20, 70);
    // if (isKeyDown('W'))

    //     document.getElementById('key').innerHTML = "knopka W";
    // if (isKeyDown('S'))

    //     document.getElementById('key').innerHTML = "knopka S";

    // if (isKeyDown('D'))

    //     document.getElementById('key').innerHTML = "knopka D";

    // if (isKeyDown('A'))

    //     document.getElementById('key').innerHTML = "knopka A";
    // else {
    //     document.getElementById('key').innerHTML = "";
    // }
}
let keyDown = {};
let setKey = function(keyCode) {
    keyDown[keyCode] = true;
}
let clearKey = function(keyCode) {
    keyDown[keyCode] = false;
}
let isKeyDown = function(keyName) {
    return keyDown[keys[keyName]] == true;
}

let gameEngine = function() {
    if (typeof engine == 'function')
        engine();
    else
        document.body, innerHTML = 'ne opred  func engin';


    requestAnimationFrame(gameEngine);
}
window.onload = function() {

    window.onkeydown = function(e) {
        setKey(e.keyCode);
        a = e.keyCode;

    };
    window.onkeyup = function(e) {
        clearKey(e.keyCode);
        // position.innerHTML = "position of cursor:" + x + "/" + y;

    };

    gameEngine();
}

// курсор мыши
let position = document.getElementById('position');
let cursor = document.getElementById('cursor');

let x = 0,
    y = 0;
position.innerHTML = "position of cursor:" + x + "/" + y;

setInterval(function() {

    position.innerHTML = "position of cursor:" + x + "/" + y;
    cursor.style.left = x - 25 + 'px';
    cursor.style.top = y - 25 + 'px';
}, 1000 / 60)

window.onmousemove = function(event) {
    x = event.pageX;
    y = event.pageY;
};
// window.onclick = function() {

// };