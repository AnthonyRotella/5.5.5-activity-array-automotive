class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
        } else {
            return this.started = false;
            console.log("no fuel");
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " Ill have to come back, full up.");

            }
        } else {
            console.log(this.model + " " + this.make + " too many peeps");
        }
    }