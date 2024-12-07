const uuid = require('uuid')

class Doctor {
    constructor(id = uuid.v4(),name,hospital) {
        this.id = uuid 
        
        this.name = name
        this.hospital = hospital
    }

    static create({id,name,hospital}) {
        return new Doctor(id,name,hospital)
    }
}   

module.exports = Doctor