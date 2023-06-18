const letterFreak = ["q","j"]

// "v","v","v","v","v","k","k","k","k","k","k",

// "w","w","w","w","w","w","w",

// "y","y","y","y","y","y","y","y","y",

// "f","f","f","f","f","f","f","f","f",

// "b","b","b","b","b","b","b","b","b","b","b",

// "g","g","g","g","g","g","g","g","g","g","g","g","g",

// "h","h","h","h","h","h","h","h","h","h","h","h","h","h","h",

// "m","m","m","m","m","m","m","m","m","m","m","m","m","m","m",

// "p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p",

// "d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d",

// "u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u",

// "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c",

// "l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l",

// "s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s","s",

// "n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",

// "t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t","t",

// "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",

// "i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",

// "r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r","r",

// "a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a",

// "e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e"
// ]

//array joined with the string provided as a parameter within ""
// const printTestArray = letterFreak.join("")

// function genRanLet() {
//     return printTestArray[Math.floor(Math.random() * 561)]
// }

const printALetter = letterFreak.join("")

function genRanLet() {
    return printALetter[Math.floor(Math.random() * printALetter.length)]
}

const fixQ = () => {
    let genRanLetFixQ = genRanLet().toUpperCase()
    if (genRanLetFixQ == "Q"){
        genRanLetFixQ = "Qu"
    }
    return genRanLetFixQ
}


// const testArray = ["i", "ate", "bugs"]

console.log(fixQ());





