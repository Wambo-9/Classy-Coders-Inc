import Employee from './Employees'

class SoftwareEngineer extends Employee{
    #programmingLanguages = []; 
    constructor(programmingLanguages){
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages; 
    }

    setProgrammingLanguage(language){
        this.#programmingLanguages = language; 
    }
    
}

module.exports = {
    SoftwareEngineer,
}