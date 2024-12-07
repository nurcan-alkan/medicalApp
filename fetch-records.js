const{ patientDatabase, doctorDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
  const mert = await doctorDatabase.findBy('name', 'Mert')
  const nurcan = await patientDatabase.findByName('Nurcan')
    
  nurcan.book = (mert,'X Hospital')
  patientDatabase.update(nurcan)
    
  printBookingHistory(nurcan)
    
  console.log(patientDatabase.findBy())
}

main()

