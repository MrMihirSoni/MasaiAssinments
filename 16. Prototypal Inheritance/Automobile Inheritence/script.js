let fourWheeler = {
    brand : "TATA",
    numberOfWheels : 4,
    numberOfSeats : 5,
    numberOfLights : 5,
    bodyType : "aluminium",
    numberOfGears : 6,
    gearShift : function(num){ // num is always +1 or -1
        let currentGear=0;
        if(currentGear+num<0){
            console.log(`You cannot shift gear any lower!`);
        }
        else if(currentGear+num>this.numberOfGears){
            console.log(`You cannot shiftgear any higher!`)
        }
        else if(num<0){
            console.log(`Gear Shifted from ${currentGear--} to ${currentGear}`);
        }
        else if(num>0){
            console.log(`Gear Shifted from ${currentGear++} to ${currentGear}`)
        }
    },
    lightsTurnOn : function(){
        console.log(`${this.brand} ${this.model}'s lights are turned On!`)
    },
    lightsTurnOff : function(){
        console.log(`${this.brand} ${this.model}'s lights are turned Off!`)
    },
    honk : function(model){
        console.log(`${this.brand} ${this.model} is honking (PeePee PooPoo)`)
    },
    accelerate : function(){
        console.log(`${this.brand} ${this.model} is accelerating`)
    },
    break : function(){
        console.log(`${this.brand} ${this.model} applied breaks`)
    },
}

let car1 = Object.create(fourWheeler);
car1.model = "Nexon";
car1.numberOfSeats = 7;

console.log(car1);
console.log(`Number of gears ${car1.numberOfGears}`);
console.log(`Number of wheels ${car1.numberOfWheels}`);
console.log(`Number of seats ${car1.numberOfSeats}`);
(car1.gearShift(+1));
(car1.break());
(car1.lightsTurnOn());
(car1.lightsTurnOff());
(car1.accelerate());
(car1.honk());

