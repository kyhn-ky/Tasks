//1.1.1	What number's bigger?
// const greaterNum = (a, b) => {
//     const result = a - b > 0 ? a : b

//     console.log(result)
// }
// greaterNum(10,3)

//1.1.2	The World Translator

// function helloWorld(lang = "en") {
//     if (lang === "es"){
//         console.log("Hola Mundia!")
//     }else if (lang === "de"){
//         console.log("Hallo die Welt!")
//     }else if (lang === "en"){
//         console.log("Hello World!")
//     }else {
//         console.log("Unknown Language!")
//     }
// } 




//1.1.3	The Grade Assigner / 1.1.7	The Grade Assigner2

// const assignGrade = (score) => {
//     if (score >= 90){
// console.log(`Your grade is A`)
//     }else if (score > 80){
//         console.log(`Your grade is B`)
//     }else if (score > 70){
//         console.log(`Your grade is C`)
//     }else if (score > 65){
//         console.log(`Your grade is D`)
//     }else {
//         console.log(`Your grade is F`)
//     }
// }

// assignGrade(89)

// 1.1.4	The Pluralizer

// const plurize = (str, num) => {
//     if (str !== "sheep" && str !== "geese"){
//         var plural = str + "s"
//     }else {
//         var plural = str
//     }

//     console.log(`${num} ${plural}`)

// }

// 1.1.5	The even/odd reporter
// const evenOdd = (num) => 
//     num % 2 === 0 ? console.log("Even Number") : console.log("Odd Number")

// evenOdd(7)


//1.1.6	Multiplication Tables

// const multiply = () => {
//     for (i = 0; i <= 10 ; i++){

//         for (x = 0; x <= 10; x++){
//             exp = i * x
//             console.log(exp)
//         }

//     }
// }

// multiply()

// 1.1.8	Your top choices
// const choises = ["red", "yellow", "blue"];

// const printChoise = (color) =>
//     color === choises[0] ? console.log(`My 1st choise is ${color}`) :
//     color === choises[1] ? console.log(`My 2nd choise is ${color}`) :
//     console.log(`My 3st choise is ${color}`)

// printChoise("blue")

// 2.1.1	The Word guesser

// const arr = ["_", "_", "_"];
// const answer = ["F", "O", "X"];
// const letter = new String()
// document.getElementById("arr").innerHTML = arr
// var reward = 0

// const guessLetter = (letter) => {
    
    
//     const newIndex = answer.findIndex((element) =>
//         element === letter)
//     arr[newIndex] = letter
//     document.getElementById("arr").innerHTML = arr
//     if (arr.filter((obj) =>
//         obj === "_").length == 0) {
//         alert("Tebrikler, Kazandınız")
//     } else {
//         alert(`${arr.filter((obj) =>
//             obj === "_").length} tane daha harf bilmeniz lazım`)
//     }
//     if (answer.includes(letter) === true){
//         alert("Doğru Tahmin")
//         reward = reward + 100
//     }else{
//         alert("Yanlış Tahmin")
//         reward = reward - 20
//     }
//     console.log(reward)
// }

//guessLetter("A")

var output = "_ " + "_ " + "_ " 

var answer = "FOX"

const guessLetter = (letter) => {
    newIndex = answer.split("").findIndex(obj => {
        obj = letter
    })
    
}
document.getElementById("arr").innerHTML = output

2.1.2	The Calculator

function calculateAll(num) {
    
        var half = num / 2
        console.log(`The half of ${num} is ${half}`)
    
        var square = Math.pow(num, 2)
        area = (Math.PI * num * num).toFixed(2)
        console.log(`The result of squaring ${num} is ${square}`)
    
        var area = (Math.PI * num * num).toFixed(2)
        console.log(`The area for a circle with radius ${num} is ${area}`)
    
        var per = (num * area / 100).toFixed(2)
        console.log(`${num} is %${per} of ${area}`)
    
}

calculateAll(5)

// 2.1.3	DrEvil

// function drEvil (amount) {
//     if(amount !== 1000000) {
//         console.log(`${amount} dollar`)
//     }else {
//         console.log(`${amount} dollar (pinky)`)
//     }
// }

// drEvil(10);
// drEvil(1000000);

// 2.1.4	MixUp

// function mixUp(str1, str2) {
//     var firstTwo1 = [str1[0] + str1[1]]
//     var secondTwo2 = [str2[0] + str2[1]]
//     str1 = secondTwo2 + str1.substr(2)
//     str2 = firstTwo1 + str2.substr(2)
//     console.log(str1, str2)
// }

// mixUp("Kayhan", "ööaa")

// 2.1.5	FixStart

// function fixStart(str) {

//     var str = str.split("")
//     const len = str.length

//     var newStr = str[0];
//     for (i = 1; i < 6; i++) {
//         if (str[0] === str[i]) {
//             newStr += "*"

//         } else {
//             newStr += str[i]

//         }

//     }

//     console.log(newStr)
// }

// fixStart("atakan")



//2.1.6	Verbing

// function verbing(str) {
//     if(str.length < 3) {
//         str = str
//     }
//     else if (str.includes("ing")) {
//         str = str + "ly"
//     }
//     else {
//         str = str + "ing"
//     }
//     return str
// }

// console.log(verbing("reading"))


// 2.1.7	Not Bad


// function notBad(str) {
//     if(str.includes("not") && str.indexOf("not") < str.indexOf("bad")) {
//        str = str.slice(0, str.indexOf("not"))
//        console.log()
//        return str = str + "good"
//     }else {
//         return str
//     }
// }

// console.log(notBad("This play is not as bad as yesterday!"))







