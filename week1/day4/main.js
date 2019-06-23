
//------------------------------------------loops exercise

// const greet = function(name, timeOfDay){
//     if(timeOfDay == 1){
//         console.log("Good " + "morning" + ", " + name)
//     } else if (timeOfDay == 2){
//         console.log("Good " + "afternoon" + ", " + name)
//     } else if(timeOfDay == 3){
//         console.log("Good " + "evening" + ", " + name)
//     }
//   }

//   //calling the function
//   greet("guy", 4)

  //----------------------------------------------------

//   const newUser = function(name, age){
//       const user = {name: name, age: age}
//       console.log(user)
//   }
  
//   newUser("guy", 30)

  //----------------------------------------------------

//   const createUser = function(name, age){
//       let usernames = ["guy", "nuna", "jasper"]
//       let userages = [30, 29, 50]
//       let userhobby = ["walk", "run", "sleep"]
//       let myUsers = []

//       for(let p in usernames){
//             myUsers.push({name: usernames[p], age: userages[p], hobby: userhobby[p]})
//       }
    
//     console.log(myUsers)
//   }
  
//   createUser()

  //----------------------------------------------------
  
//   const calcAge = function(x, y){
//         return x - y
//   }
  
//   const age = calcAge(2017, 1989)
//   console.log(age)

  //----------------------------------------------------

//     const calcAge = function(today, born){
//         let max = today - born
//         return `You are either ${max - 1} or ${max} years old`
//     }

//   const age = calcAge(2018,2015)
//   console.log(age)
  
  //----------------------------------------------------

//   let isEven = function(x){
//       if(x % 2 === 0){
//           return true
//       }
//       else {
//           return false
//       }
//   }

//   let num = prompt("pick a number")
//   console.log(isEven(num))

  //----------------------------------------------------

// let oddArr = []
// let arr = [2, 4, 5, 7, 8, 1, 9]


//   let checkArr = function(x){
//       for(let p of arr)
//       if(p % 2 != 0){
//           oddArr.push(p)
//       }
//   }

//   checkArr()
//   console.log(oddArr)

  //----------------------------------------------------

//   let arr = [2, 4, 2, 4, 6, 7, 4]
//   let x = 3

//   const check = function(arr, x){
//       for(let i = 0; i < arr.length; i++){
//           if(arr[i] === x){
//               return true
//           }
//       }
//       return false
//   }


//   console.log(check(arr,x))

  //----------------------------------------------------

//   let calculator = {
//       add: function(x, y){
//           return x + y
//       },
//       subtract: function(x, y){
//           return x - y
//       }
//   }

//   const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42

  //----------------------------------------------------

// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// const increaseByNameLength = function(money, name){
//     return name.length * money
// }

// const makeRegal = function(a){
//     return `His Royal Highness, ${a}`
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

  //----------------------js this----------------------

//   const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }
  
//   person.feed() //should alert "I'm no longer hungry"
  
  //----------------------------------------------------

//   const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + this.amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  
  //----------------------------------------------------
  
//   const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     fuel: 0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  


//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

  //----------------------------------------------------

//   const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function() {
//         this.coinCount -= 1;
//     }
//   };
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  
  //----------------------------------------------------
  
  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (avi, revealSecret) {
    avi.revealItAll = revealSecret;
    const result = avi.revealItAll();
    alert(avi.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!",
    revealItAll: revealSecret()
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
  
  