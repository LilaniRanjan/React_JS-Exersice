import React, {Componet} from 'react'

class Animal{
    constructor(name, speed){
        this.Name= name;
        this.Speed= speed;
        document.write("inside Animal class  <br>")

    }

    run(){
        return 'My name is ' + this.Name + '. ' + "I'm run with " + this.Speed;
    }
    
}

class Rabbit extends Animal{
    constructor(name, speed){
        super(name, speed);
        document.write("inside children class  <br>")
        }

        hide(){
            return this.Name + ' hide!';
    }
    
    //Override the functionality of Animal class
    // run(){
    //     return 'My name is ' + this.Name + '. I am jummping with speed ' + this.Speed;

    // }
}

export default Rabbit;