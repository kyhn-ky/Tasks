//1.1.1	Aufwärm Übung 1

// function volumeCalculator (radius, height){
//     this.radius = radius;
//     this.height = height;
// }

// volumeCalculator.prototype.newVolume =function(){
//     var volume = this.radius * this.radius * Math.PI * this.height
//     console.log(volume)
// }

// var volume1 = new volumeCalculator(2,4)

// console.log(volume1)


// 1.1.2	Aufwärm Übung 2

// var data = [6, 40, 0, 7, 3, 5, 1, -3];


// const bubbleSort = (arr) => {
//     const len = arr.length;
//     const swap =(arr, left, right) => [arr[left], arr[right]] = [arr[right], arr[left]]
//     for (let i = 0; i < len-1; i++) {
        
//         for (let x = 0; x <len-1-i; x++){
//             console.log("counter")
//             if (arr[x] > arr[x + 1]) {
//                 const temp = arr[x];
//                 swap(arr, x, x+1)
//                 // arr[x] = arr[x + 1]
//                 // arr[x + 1] = temp
//             }
//         }
        
//     }
    
//     return arr
// }
    
// console.log(bubbleSort(data))

// 1.1.3	Aufwärm Übung 3

// const sample = "dog";
// var newArr = [];

// const subset =(str) => {
//     var newStr = str.split("")
//     var temp ="";
//     var temp1 ="";
//     for (let i = 0; i < newStr.length; i++){
         
//          let element = temp + newStr[i];
//          var temp = element
//          console.log(element)
//          newArr[i] = element
//          len = newArr.length
//     } 
    
//     for (let x = 1; x < newStr.length; x++){
//         let element = temp1 + newStr[x];
//          var temp1 = element
//          console.log(element)
//          newArr[len + x -1] = element;
//     }
//     console.log(newArr)
// }

// subset(sample)

// 1.1.4	Aufwärm Übung 4

// function time (){
//     this.x = 11;
//     this.y = 10;
    
// }

// time.prototype.clock = function(){
// var date = new Date();
// var hour = date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// var timer = hour + ":" + min + ":" + sec

// console.log(timer)

// setInterval(this.clock, 1000)

// }


// var a = new time().clock()

// 1.1.5	Aufwärm Übung 5

function circle(radius){
    this.radius = radius;
    
}

circle.prototype.area = function(){
    
    var area = this.radius * this.radius * Math.PI;
    console.log(`The area of the circle is ${area}`);
}

circle.prototype.perimeter = function(){
    
    var perimeter = 2 * this.radius  * Math.PI;
    console.log(`The perimeter of the circle is ${perimeter}`);
}

// var daire = new circle(3).area()
// var daire = new circle(3).perimeter()


// 1.1.6	Aufwärm Übung 6

// function FindAllMethods(obj) {
//     return Object.getOwnPropertyNames(obj).filter(function(property) {
//         return typeof obj[property] == "function";
//     });
// }
// //above code finds methods only
// //Following code finds both properties and methods 
// console.log(FindAllMethods(Math));
// console.log(FindAllMethods(Array));

// function all_properties(obj) 
// {
//  return Object.getOwnPropertyNames(obj);
// }


// console.log(all_properties(Math));

// console.log(all_properties(Array));

// 1.1.7	A vector type

function vector(x,y){
    this.x = x;
    this.y = y
}

vector.prototype.plus = function(v){
    return `Vec{x: ${this.x + v.x}, y: ${this.y + v.y}}`
}

vector.prototype.minus = function(v){
    return `Vec{x: ${this.x - v.x}, y: ${this.y - v.y}}`
}

vector.prototype.lengt = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
}

newVector = new vector(1,2).plus(new vector(2,3))
new1Vector = new vector(1,2).minus(new vector(2,3))
console.log(newVector)
console.log(new1Vector)
console.log(new vector(3,4).lengt())























