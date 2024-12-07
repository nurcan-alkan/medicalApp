const Patient = require('./models/patient')
const Doctor = require('./models/doctor')
const patientDatabase = require('./database/patient-database')
const doctorDatabase = require('./database/doctor-database')

const printBookingHistory = require('./lib/print-booking-history')
 
const nurcan = Patient.create({name:'Nurcan'})
const mert = Doctor.create({name:'Mert',hospital:'X Hospital'})

nurcan.book(mert,'X Hospital')

async function main() {
  try {
    await patientDatabase.save([nurcan,mert])

    await doctorDatabase.save([mert])

    const betul = Patient.create({ name: 'Betul'})

    await patientDatabase.insert(betul)
    const patients = patientDatabase.load()
    patients.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}   

main()