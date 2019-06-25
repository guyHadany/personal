// -----------------------------Callbacks & Arrow Functions


// const pushPull = a => a()

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

//   ------------------------------------------

// const time = new Date()
// const getTime = function(a){
//     a(time)
// }

// const returnTime = (time) => alert('The current time is: ' + time)
//  
  
//   getTime(returnTime)

//   ------------------------------------------

// const displayData = (alertDataFunc, logDataFunc, data) => {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
//   displayData(alert, console.log, "I like to party")
  
//   ------------------------------------------


// const add = (a, b, c) => console.log(a + b + c)
//  add(2,2,2)

//   ------------------------------------------

// const capitalize = name => console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

//   ------------------------------------------

// const commentOnWeather = (temp) => {
// console.log("it's " + determineWeather(temp))
// }

// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

//   ------------------------------------------

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
// }

// const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
// const makeSound = (sound) => alert(sound)

// explode(shineLight, makeSound, "boom")

// -----------------------------Closures & Modules-----------------

// const family = function(){
//     const members = []
//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = family()
// giveBirth("guy")
// giveBirth("nuna")
// giveBirth("jasper")

//   ------------------------------------------

// const sqre = function(){
//     const sqre2 = function(x){
//         return x * x
//     }
//     const sqre3 = function(x){
//         return x * x * x
//     }
//     const sqre4 = function(x){
//         return x * x * x * x
//     }
//     return {
//         sqre2,
//         sqre3,
//         sqre4
//     }
// }

// const m = sqre()
// console.log(m.sqre4(2))

//   ------------------------------------------

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('guy')
// usersModule.addUser('naama')
// usersModule.listUsers()
// console.log(usersModule.users)

//   ------------------------------------------

// const StringFormatter = function(){
//     const capitalizeFirst = function(str){
//         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
//     }
//     const skewerCase = function(str){
//         return str.replace(/ /g, '-');
//     }
//     return{
//         capitalizeFirst,
//         skewerCase
//     }
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box

//   ------------------------------------------

// const Bank = function(){
//     let money = 500
//     const depositCash = function(cash){
//         money += cash
//         return money
//     }
//     const checkBa = function(){
//         return console.log(money)
//     }
//     return {
//         deposit: depositCash,
//         showBalance: checkBa
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

//   ------------------------------------------

const SongsManager = function(){
    const songs = {}
    const addSong = function(name, url){ 
        const newUrl = url.slice(33)
        songs[name] = newUrl
    }
    const getSong = function(name){
        return console.log("https://www.youtube.com/watch?v=" + songs[name])
    }
    return{
        addSong,
        getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
// console.log(songsManager.songs





