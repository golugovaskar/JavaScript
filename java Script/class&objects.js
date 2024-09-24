const employee = {
clacTax(){
console.log("tax rate is 10%");
},
};

const karanArjun = {
    salary: 50000,
    calsTax (){
        console.log("tax rate is 20%");
    },
};

karanArgun._proto_ = employee;  


/// crating class and objects

class  ToyotaCar{
    start(){
        console.log("stop");
    }

    stop(){
        console.log("stop");
    }
    
    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus"); 