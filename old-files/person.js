const person = {
    name: 'abbi turing',
    countriesVisited: '4',
}


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    greeting(){
        console.log(`name: ${this.name} is ${this.age} years old`);
    }
}

// module.exports=person;
module.exports=Person;