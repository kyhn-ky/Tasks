// 1.1	Aufwärm Übung 1

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// }

// function all_properties(obj) 
// {
//  return Object.keys(obj);
// }

// console.log(all_properties(student));

//1.2	Aufwärm Übung 2

// delete(student.rollno)

// console.log(all_properties(student));

// 1.3	Aufwärm Übung 3

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];



var isRead = (arr) => {
    
    arr.forEach(element => {
        var statuss = element.readingStatus === true ? "read" : "not read"
            
            console.log(`${element.author} by ${element.title} is ${statuss}`)
    
    })
}

isRead(library);

console.log(library.length)
