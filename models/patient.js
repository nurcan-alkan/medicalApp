const Booking = require('./booking')
const uuid = require('uuid')

class Patient {
    constructor(id = uuid.v4(),name,bookings = []) {
        this.id = uuid

        this.name = name
        this.bookings = bookings
    }

    book(doctor,hospital) {
        const booking = new Booking(doctor,this,hospital)

        this.bookings.push(booking)
        return booking
    }

    static create({id,name,bookings}) {
        return new Patient(id,name,bookings)
    }
}

module.exports = Patient