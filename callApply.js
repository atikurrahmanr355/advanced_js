const normalParson = {
    firstName : "Habib",
    lastName : "Ullah",
    salary : 15000,
    getFullName : function(){
        return this.firstName + ' ' + this.lastName;
    },
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroParson = {
    firstName : "Mamun",
    lastName : "Mollah",
    salary : 25000,
}
const friendlyParson = {
    firstName : "Rayhan",
    lastName : "Sharkar",
    salary : 22000,
}
// console.log(normalParson.chargeBill(232));
const heroChargeBill = normalParson.chargeBill.bind(heroParson);
const friendlyChargeBill = normalParson.chargeBill.bind(friendlyParson);
const heroFullName = normalParson.getFullName.bind(heroParson);
const friendlyFullName = normalParson.getFullName.bind(friendlyParson);

// heroChargeBill(2000);
// heroChargeBill(2000);
// friendlyChargeBill(2000);
// friendlyChargeBill(2000);
// console.log(heroParson.salary);
// console.log(friendlyParson.salary);
console.log(heroFullName());
console.log(friendlyFullName());
console.log(normalParson.getFullName());
// console.log(normalParson);
// console.log(normalParson.chargeBill(700));
// console.log(normalParson.chargeBill(3000));