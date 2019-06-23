// let p1 = {
//     name: "Jill",
//     age: 30,
//     city: "tel-aviv"
// }
// let p2 = {
//     name: "Roberst",
//     age: 30,
//     city: "tel-aviv"
// }
// if(p1.age == p2.age){
//     if(p1.city == p2.city){
//         console.log("Jill wanted to date Robert")
//     }
//     else {
//         console.log("Jill wanted to date Robert, but couldn't")
//     }
// }

// ------------------------------------------------

// const myList = [
//     {name: "guy",age: 30},
//     {name: "nuna", age: 30}
// ]

// myList[0].name = "adar"
// myList.splice(1)

// const arr = [
//     {name: "imry", age: 20},
//     {name: "naama", age: 34}
// ]

// myList.push(...arr)

// console.log(myList)

// ------------------------------------------------

// const library = {
//     books: [
//         {title: "lion king", author: "guy"},
//         {title: "me", author: "nuna"},
//         {title: "you", author: "Adar"},
//         {title: "him", author: "Dani"},
//     ]
// }

// myList.push(...library.books)

// console.log(myList)

// ------------------------------------------------

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//   let name = prompt('Please enter the name for your reservation');

//   name = name.toLowerCase()
//   name = name.charAt(0).toUpperCase() + name.slice(1)

//   if(reservations[name] && !reservations[name].claimed){
//       console.log("Welcome, Bob")
//   } else if(reservations[name] && reservations[name].claimed) {
//     console.log("Hmm, someone already claimed this reservation")
//   } else {
//       reservations[name] = {claimed: true}
//   }

// ------------------------------------------------loop exercises

// let arr1 = ["guy", "nuna", "jasper"]
// let arr2 = [33, 30, 50]

// for(let i = 0; i < 3; i++){
//     console.log(`${arr1[i]} is ${arr2[i]} years old`)
// }

// ------------------------------------------------

// let arr = [2,4,2,3,4]
// let sum = 0

// for(let num of arr){
//     sum += num;
// }

// console.log(sum)

// ------------------------------------------------

// let arr = [2,4,2,3,4]
// let sum = 0

// for(let num of arr){
//     sum += num;
// }

// console.log(sum/arr.length)

// ------------------------------------------------

// let nums = []
// for(let i = 0; i <= 100; i++){
//     nums.push(i)
// }
// console.log(nums)

// ------------------------------------------------

// let nums = []
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//     nums.push(i)
//     }
// }
// console.log(nums)

// ------------------------------------------------

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for(let num in nums){
//     if(709 === nums[num]){
//         console.log(num)
//     }
// }

// ------------------------------------------------

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for(let index in names){
//     people.push({name: names[index], age: ages[index]})
// }

// console.log(people)

// ------------------------------------------------

// let people = [
//     {name: "Ashley", age: 23},
//     {name: "Donovan", age: 47},
//     {name: "Lucas", age: 18}
//   ]
  
// for(let index in people){
//     console.log(`${people[index].name} is ${people[index].age} years old`)
// }

// ------------------------------------------------

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

// for(let i = 0; i < posts.length; i++){
//     if(posts[i].id === 2){
//         posts.splice(i, 1)
//     }
// }
// console.log(posts)

// ------------------------------------------------

const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []},
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []}
  ]

  
  