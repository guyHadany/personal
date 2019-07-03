// class human{
//     constructor(name, age, isFriendly){
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
// }

// const guy = new human("guy", 33, true)

// console.log(guy)

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }

//     giveBirth(name){
//         this.children.push(name)
//     }
// }

// const cat = new Animal("Puss", 4)



// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿

// class Vehicle{
//     constructor(x, y, speed){
//         this.x = x
//         this.y = y
//         this.speed = speed
//         Vehicle.carsSold++;
//     }

  
//     static calculateMoney(){
//         console.log(Vehicle.carsSold * 30000)
//     }
    
//     static getInfo(){
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.")
//     }
// }

// Vehicle.carsSold = 0

// const car1 = new Vehicle(2, 4, 200)
// const car2 = new Vehicle(3, 5, 300)

// Vehicle.calculateMoney()

class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel
    }

    get speed(){
        return this._speed
    }

    set fuel(fuel){
            if(fuel < 0 || fuel > 150){
                return console.log("not good")
            }
        this._fuel = fuel
        }


    get fuel(){
        return this._fuel
    }
    

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
}

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10
console.log(c.speed)

const b = new Vehicle()
b.fuel = 160
console.log(b.fuel)





