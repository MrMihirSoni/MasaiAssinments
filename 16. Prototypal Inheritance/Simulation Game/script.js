function Vehicle(brand,model,speed,fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType
}

Vehicle.prototype.accelerate = function(increase){
    this.speed+=increase;
    console.log(`${this.brand} ${this.model}'s speed is increased to ${this.speed}`)
}

Vehicle.prototype.break = function(decrease){
    this.speed-=decrease;
    console.log(`${this.brand} ${this.model}'s speed is decreased to ${this.speed}`)
}

Vehicle.prototype.refule = function(){
    console.log(`${this.brand} ${this.model} is refuling`)
}

let Car = function(brand,model,speed,fuelType,noOfWheel){
    Vehicle.call(this,brand,model,speed,fuelType);
    this.noOfWheel=noOfWheel;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.honk = function(){
    console.log(`${this.brand} ${this.model} is honking (PeePee PooPoo)`)
}

let Airplane = function(brand,model,speed,fuelType,numberOfEngines){
    Vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfEngines=numberOfEngines;
}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype);

Airplane.prototype.takeOff = function(){
    console.log(`${this.brand} ${this.model} is taking off`)
}

Airplane.prototype.land = function(){
    console.log(`${this.brand} ${this.model} is landed succsessfully`)
}

let car1 = new Car("TATA","Nexon",140,"Petrol",4)
car1.honk();
car1.accelerate(30);
car1.break(46);
car1.refule();

let airplane1 = new Airplane("Boing","747",550,"Hydrogen",4);
airplane1.accelerate(50);
airplane1.takeOff();
airplane1.land();
airplane1.break(60);