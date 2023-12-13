import Employees from './Employees'

class Manager extends Employees {
    #employeesManaged = []; 
    constructor(department, employeesManaged){
        this.department = department; 
        this.#employeesManaged = employeesManaged
    }
    getEmployeesManaged(){
        return this.#employeesManaged
    }

    setEmployeesManaged(employee){
        this.#employeesManaged = employee
    }
    
}

module.exports = {
    Manager,
}