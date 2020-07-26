class Person{
    constructor(name='Anonymous',age='0'){
        this.name=name
        this.age=age
    }
    getGretings(){
        return `HI, I am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major=major
    }
    getDescription(){
        let description=super.getDescription()
        if(this.major){
            return description+=`. Their major is ${this.major}`
        }
        return description
    }
}
class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation=homeLocation
    }
    getGretings(){
        let gretings=super.getGretings()
        if(this.homeLocation){
            return gretings+=`. I'm visiting from ${this.homeLocation}`
        }
        return gretings
    }

}
const p1=new Traveler('riyaz','21','Potonovo')
const p2=new Traveler()
console.log(p1.getGretings(),'\n'+p2.getGretings())