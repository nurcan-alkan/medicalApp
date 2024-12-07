function printBooking(booking) {
    console.log(`${booking.patient.doctor} `)
}

function printBookingHistory(patient) {
    if(patient.bookings.length == 0)
        return console.log(`${(patient.name)} has no bookings yet.`)

    patient.bookings.forEach(printBooking)
}

module.exports = printBookingHistory