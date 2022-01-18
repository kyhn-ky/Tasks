//1.1	Aufwärm Übung 1 & 2
// var  student = {
//     name : "Kayhan Kaya",
//     class : "A101",
//     number : "123"
// }

// console.log(Object.getOwnPropertyNames(student))

// console.log(student)

// delete student.number 

// console.log(student)

//1.3	Aufwärm Übung 3

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: true
//     }];

// for (var i = 0; i < library.length; i++){
//     console.log(library[i].readingStatus)
// }

//1.4	Aufwärm Übung 4 anlamadım...

// 1.5	The sum of a range

// var num = new Array();


// const newArray = (start, end, step = 1) => {
//     for (let i = 0; i <= (end - start); i = i + step) {
//         num[i] = i + start
//         num = num.filter(obj => obj != null)
//     }
    
//     console.log(num)

//     const sum = (num) => {
//         var total = num.reduce((acc, obj) => {
//             return acc + obj
//         })
//         console.log(total)
//     }
    
// sum(num);
// }

// newArray(2, 15, 3);

// 1.6	Reversing an array

// const num = [1,2,3,4,5,6,7]
// var newArr = new Array()



// const reverseArray = (arr) => {
//     for (let i = arr.length - 1; i > -1; i--){
//         newArr.push(arr[i])    
//     }

//     console.log(newArr)
// }
// reverseArray(num) //Bu daha efektif gibi


// const reverseInPlace = (arr) => {
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
// }
// console.log(arr);
// }

// reverseInPlace(num)

//1.7	A list

// A list yapamadım :(

// const arrayToList = (a, b, c) => {

//     var list = {
//         value: a,
//         rest: {
//             value: b,
//             rest: {
//                 value: c,
//                 rest: null
//             }
//         }
//     }
//     console.log(list)
// }

// arrayToList(10,20)

// 1.9	The Recipe Card

// const recipe = {
//     title: "Mole",
//     serving: 2,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
// }

// console.log(recipe.title)
// console.log(`Serves: ${recipe.serving}`)
// console.log("Ingredients:")
// console.log(recipe.ingredients[0])
// console.log(recipe.ingredients[1])
// console.log(recipe.ingredients[2])

// 1.10	The Reading List

const list = [
    {
        title: "1984",
        author: "George Orwell",
        read: true
    },
    {
        title: "Iliad",
        author: "Homeros",
        read: true
    },
    {
        title: "Shibumi",
        author: "Trevian",
        read: false
    }
]

const book = (arr) => {
    arr.forEach(element => {
        // console.log(`${element.title} by ${element.author}`)
        element.read === true ? 
        console.log(`You read ${element.title} by ${element.author}`) :
        console.log(`You still need to read ${element.title} by ${element.author}`)
    })
}

book(list)

// 1.11	The Movie Database

const favMovie = {
    title: "AI",
    duration: 1.5,
    stars: ["Kayhan Kaya", " Atakan Kaya"]
}

console.log(`${favMovie.title} lasts for ${favMovie.duration}.
Stars: ${favMovie.stars}`)




