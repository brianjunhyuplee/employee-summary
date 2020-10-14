// TODO: Write code to define and export the Employee class
class Employee{
    // constructor(){
    //     //create a new employee
    // }
    // constructor(name){
    //     this.name = name;
    // }
    // constructor(name, id){
    //     this.name = name;
    //     this.id = id;
    // }
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
     getRole(){
        return "Employee";
    }
}

module.exports = Employee;