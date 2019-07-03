

// class Animal {
//     constructor(name, type, feeder) {
//         this.name = name
//         this.type = type
//         this.feeder = feeder //dependency injection!
//     }

//     _consume(food) {
//         console.log("Just consumed " + food + ". Feels good.")
//     }

//     eat() {
//         const food = this.feeder.getFood(this.type)
//         this._consume(food)
//     }
// }

// class CheapFeeder {
//     getFood(animalType) {
//         return "scraps"
//     }
// }




// class LuxuryFeeder {
//     getFood(animalType) {
//         if (animalType == "lion") {
//             return "chia seeds"
//         }
//         if (animalType == "elephant") {
//             return "peanuts"
//         }

//         return "scraps"
//     }
// }

// // const tiger = new Animal("tiger", "cat", relevantFeeder)
// const luxuryFeeder = new LuxuryFeeder()
// const cheapFeeder = new CheapFeeder()
// let weArePoor = false
// let relevantFeeder
// if(weArePoor){
//     relevantFeeder = cheapFeeder
// } else {
//     relevantFeeder = luxuryFeeder
// }

// const tiger = new Animal("tiger", "cat", relevantFeeder)
// tiger.eat()


class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary){
        super(name, startYear)
        this.salary = salary
        this.courses = {}
    }
    giveGrade(student, course, grade){
        let s = student
        s.receiveGrade(course, grade)
    }

    addCourse(course){
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[cours] = 1
    }
}

// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"﻿

class Principal extends Person{
    constructor(name,startYear){
        super(name, startYear)
        this.teachers = []
        this.students = []
    }
    hireTeacher(teacher){
        let t = teacher
        this.teachers.push(t)
        console.log(`${this.name} just hired ${t.name}`)
    }
    recruitStudent(student){
        let s = student
        this.students.push(s)
    }
    expelStudent(student){
        let index = this.students.findIndex(a => a.name === student.name)
        this.students.splice(index, 1)  
        }
    transferStudent(student, principle){
        let index = this.students.findIndex(a => a.name === student.name)
        let s = this.students[index]
        let p = principle
        this.students.splice(index, 1)  
        p.students.push(s)
    }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)



const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)


//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron


