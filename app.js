// use roll() to create 16 variables and feed a single letter from the alphabet from letterFreak into the 4x4 gameboard matrix 

const roll = () => {
    for (i=1; i<17; i++){
        let letterNumber = `letter${i}`; 
        document.getElementById(letterNumber).innerHTML = fixQ();
    }
    
}

// 561 letters in letterFreak 
// based on 
//https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html

const letterFreak = ["q","j","z","x",

"v","v","v","v","v","k","k","k","k","k","k",

"w","w","w","w","w","w","w",

"y","y","y","y","y","y","y","y","y",

"f","f","f","f","f","f","f","f","f",

"b","b","b","b","b","b","b","b","b","b","b",

"g","g","g","g","g","g","g","g","g","g","g","g","g",

"h","h","h","h","h","h","h","h","h","h","h","h","h","h","h",

"m","m","m","m","m","m","m","m","m","m","m","m","m","m","m",

"p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p",

"d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d",

"u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u",

"c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c",

"l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l",

"s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s",

"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",

"t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t",

"o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",

"i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",

"r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r",

"a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a",

"e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e"]

// 561 letters in letterFreak 
// convert letterFreak from array to string
const printALetter = letterFreak.join("")

// get a letter from printALetter string
function genRanLet() {
    return printALetter[Math.floor(Math.random() * printALetter.length)]
}

// capitalize and make Q into Qu
const fixQ = () => {
    let genRanLetFixQ = genRanLet().toUpperCase()
    if (genRanLetFixQ == "Q"){
        genRanLetFixQ = "Qu"
    }
    return genRanLetFixQ
}

//  The StopWatch (Geeks For Geeks) -----------------------------

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
 
let hour = "";
let minute = 00;
let second = 00;
let count = 00;
 
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();

});
 
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = "";
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
 
function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            // hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = "";
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}