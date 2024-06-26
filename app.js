

let num1 = 0;
let num2 = 0;
let num3 = 0;
let timer;

function updatevalue() {
    var hour = document.getElementById("timerh");
    var min = document.getElementById("timerm");
    var sec = document.getElementById("timers");
    sec.innerHTML = num1++;

    if (num1 > 60) {
        num1 = 0;
        min.innerHTML = num2++ + ":";
    }else if (num1 <= 9) {
        
        sec.innerHTML ="0"+ num1 ;
    }else if (num1 > 9) {
        
        sec.innerHTML = num1 ;
    }
     if (num2 <= 9) {
        min.innerHTML = "0" + num2 + ":";
    }
    else if (num2 > 9) {
        min.innerHTML = num2 + ":";
    }
    if (num2 > 60) {
        num2 = 0;
        hour.innerHTML = num3++ + ":";
    }
    else if (num3 <= 9) {
        hour.innerHTML = "0" + num3 + ":";
    }
    else if (num3 > 9) {
        num3.innerHTML = num3 + ":";
    }
}

function start() {

    timer = setInterval(updatevalue, 1)

}

function stop() {
    clearInterval(timer);

}
function rest() {
    clearInterval(timer)

    num1 = 0;
    num2 = 0;
    num3 = 0;



}



// function play() {

//     var img = document.getElementById("img");

//     let num = Math.floor(Math.random() * 7);

//     if (num === 1) {

//         img.src = "https://w7.pngwing.com/pngs/604/326/png-transparent-dice-dice-1-image-file-formats-rectangle-dice-thumbnail.png"

//     } else if (num === 2) {

//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJgz61Sq6M9Ac1DCQLhDrE05ncnjtcEWRMCJi11cJpw&s"
//     }
//     else if (num === 3) {

//         img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg"
//     }

//     else if (num === 4) {

//         img.src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png"
//     }
//     else if (num === 5) {

//         img.src = "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622_1280.png"
//     } else if (num === 6) {

//         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsyhOXrpZpcNLckh2Qoq74NZhHpz1DnhpO18sA5y_ag&s"
//     }





// }

