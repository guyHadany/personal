// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]

//    let b = vegetables.filter(v => v.color === "orange")
//    console.log(b)

//    let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// const namedF = function(person){
//     if(person.goodPerformance){
//         person.salary += 300
//     }

// }

// people.forEach(namedF)
// people.forEach(p => console.log(p.salary)) 

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]
// let x = messagesFromDad.map(m => m.toLowerCase())
// console.log(x)

// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

// const findById = id => posts.find(p => p.id === id)
// // console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}


// const findCommentById = (postID, commentID) => {
//     let post = findById(postID)
//     return post.comments.find(c => c.id == commentID)
// }
// console.log(findCommentById(1, 0)) // {id: 0, text: "here I am"}

// let ages = [31, 28, 23, 27, 25, 16, 24]
// // ages.every(a => a > 18) //returns false
// console.log(ages.every(a => a > 18))

// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]

// if(movies.some(m => m.studio === "marvel")){
//     console.log("Let's go watch some movies")
// } else {
//     console.log("Let's stay home")
// }
// if(movies.every(m => m.year > 2020)){
//     console.log("Futuristic stuff")
// } else {
//     console.log("Yawn")
// }

let countries = [
    { name: "Greece", population: 500 },
    { name: "Namibia", population: 1200 },
    { name: "Finland", population: 100 },
    { name: "Switzerland", population: 300 },
    { name: "Peru", population: 200 }
]

let smallCountries = countries.filter(c => c.population < 500).map(c => c.name)
console.log(smallCountries)
