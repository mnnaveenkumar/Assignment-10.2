//Using OOPS Class Concept in Javascript

class Airplane{
    constructor(name, occupancy, speed){
        this.name = name;
        this.occupancy=occupancy;
        this.speed = speed;
    }

    //Using setter function to validate and update the objects properties.
    set Name(value){
        if(value == undefined || value == " "){
                throw new Error('Nmae Cannot be Empty'); 
        }
        this.name = value;
    }

    set Occupancy(value){
        if(value == undefined || value == " "){
            throw new Error("Occupancy Cannot be Empty");
        }
        else if(value < 0 && value >180 ){
            throw new Error("Occupancy cannot be less then 0 and more than 180");
        }
        this.occupancy = value;
    }

    set Speed(value){
        if(value == undefined || value == " "){
            throw new Error("Speed Cannot be Empty");
        }
        else if(value < 0 && value >900 ){
            throw new Error("Speed cannot be less then 0 and more than 900");
        }
        this.speed = value;
    }
    
    //Using ojects methods to update the objects 'Speed' property
    increaseSpeed(value){
        this.speed += value;
    }

    decreaseSpeed(value){
        this.speed -= value;
    }
    
    //Using getter function to get and displayu the objects properties in the console.
    get Status(){
        console.log("Airplane: " + this.name + " with " + this.occupancy + " occupancy, is moving at " + this.speed + "km/hr.");
    }
}

//Create 3 Plane objects with different airplane info
let Plane_1 = new Airplane("Airbus A380", 853, 1020);
let Plane_2 = new Airplane("Boeing 777", 314, 950);
let Plane_3 = new Airplane("Antonov An-22", 290, 740);

//Display the status of plane objects created above
Plane_1.Status;
Plane_2.Status;
Plane_3.Status;

//Increase the speed of all planes by 200 using objects methods.
console.log('\nSpeed is increased by 200 in all the plane objects.');
Plane_1.increaseSpeed(200);
Plane_2.increaseSpeed(200);
Plane_3.increaseSpeed(200);

//Display the status of plane objects after above updates
Plane_1.Status;
Plane_2.Status;
Plane_3.Status;