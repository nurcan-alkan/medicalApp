const BaseDatabase = require('./base-database')
const Doctor = require('../models/doctor')

class DoctorDatabase extends BaseDatabase {
    findByName(name) {
      return this.findBy('name', name)  
    }

    findByHospital(hospital) {
      return this.findBy('hospital', hospital)
    }
}

module.exports = new DoctorDatabase(Doctor)