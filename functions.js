// Fortune Teller

// var numberKid = [3, 0, 4]
// var partnerName = ["Kemal", "Oksan", "Tayyip"]
// var lokasyon = ["Istanbul", "Berlin", "New York"]
// var job = ["Doktor", "İşsiz", "Orospu"]

// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min
// }

// console.log(randomInt(0, job.length))

// for (i = 0; i < job.length; i++) {
//     console.log("You will be a " + job[randomInt(0, job.length)] + " in " + lokasyon[randomInt(0, job.length)] +
//         " and married to " + partnerName[randomInt(0, job.length)] + " with " + numberKid[randomInt(0, job.length)] + " kids")
// }

// Age Calculator



// const calculateAge = (year1, year2) =>   {
//     const currentYear = new Date().getFullYear();

//     const age1 = currentYear - year1;
//     const age2 = currentYear - year2;
//     console.log(`You are either ${age1} or ${age2}`)

// }

// calculateAge(1988,1989)


// Lifetime Supply Calculator

// const calculateSupply = (age, amount) => {
//     const maxAge = 80;
//     const supply = Math.round((maxAge - age) * amount);
//     console.log(supply)
// }

// calculateSupply(35,1200.123)

//Geometrizer

const calcCircumference = (radius) => {
    const circumference = 2 * Math.PI * radius

    console.log(`The circumference is ${circumference}`)

}

const calcArea = (radius) => {
    const area = Math.PI * radius * radius

    console.log(`The area is ${area}`)
}

calcCircumference(3)
calcArea(3)
    