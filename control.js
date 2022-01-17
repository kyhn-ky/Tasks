//GreaterNum
// const greaterNum = (a, b) => {
//     const result = a - b > 0 ? a : b

//     console.log(result)
// }
// greaterNum(10,3)

// The World Translator

// const helloWorld = (lang) => {
//     if (lang === "es") {
//         console.log("Ola Mundo")
//     } else if (lang === "de") {
//         console.log("Hallo die Welt")
//     } else {
//         console.log("Hello World")
//     }

// }

// helloWorld("de")

// Grading

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

// Plurize

// const plurize = (str, num) => {
//     if (str !== "sheep" && str !== "geese"){
//         var plural = str + "s"
//     }else {
//         var plural = str
//     }

//     console.log(`${num} ${plural}`)

// }

// plurize("tree", 3)

// Odd-Even
// const evenOdd = (num) => 
//     num % 2 === 0 ? console.log("Even Number") : console.log("Odd Number")

// evenOdd(7)


// Multiplication Tables

// const multiply = () => {
//     for (i = 0; i <= 10 ; i++){

//         for (x = 0; x <= 10; x++){
//             exp = i * x
//             console.log(exp)
//         }

//     }
// }

// multiply()

// Choises
// const choises = ["red", "yellow", "blue"];

// const printChoise = (color) =>
//     color === choises[0] ? console.log(`My 1st choise is ${color}`) :
//     color === choises[1] ? console.log(`My 2nd choise is ${color}`) :
//     console.log(`My 3st choise is ${color}`)

// printChoise("blue")

// The Word Guesser

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








