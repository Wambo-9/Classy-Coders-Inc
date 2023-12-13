class Employees {
    #salary;
    #isHired = true;
    static #allEmployees  = [ ]; 

    constructor(name, position, salary, isHired){
        this.name = name;
        this.position = position;
        this.#salary = salary; 
        this.#isHired = isHired; 
       
        //return Employees.push()
    }
    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        return this.#salary = amount
    }

    getStatus(){
        return this.#isHired
    }

    setStatus(command){
        if(command === "hire"){
            this.#isHired = true 
        } else if(command === 'fire'){
            this.#isHired = false
        }
    }

    static getEmployees(){
        return this.#allEmployees
    }

    static getTotalPayroll(){
        return this.#allEmployees = salary
    }

    static Employees.allEmployees(Employee){
        return Employee.push()
    }
}

module.exports = {
    Employees,
}