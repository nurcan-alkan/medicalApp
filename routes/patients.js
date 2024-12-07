const { patientDatabase, doctorDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => { 
    const patients = await patientDatabase.load()
    
    res.render('patients', { patients })
} )

router.post('/', async (req, res) => {
    const patient = await patientDatabase.insert(req.body)

    res.send(patient)
})

router.delete('/:patientId', async (req, res) => {
    await patientDatabase.removeBy('id', req.params.passengerId)

    res.send('OK')
})

router.get('/:patientId', async (req, res) => {
    const patient = await patientDatabase.find(req.params.patientId)
    if (!patient) return res.status(404).send('Cannot find patient')
    res.render('patient', { patient })
})

router.post('/:patientId/bookings', async (req, res) => {
    const { patientId } = req.params
    const { doctorId, hospital } = req.body

    const patient = await patientDatabase.find(patientId)
    const doctor = await doctorDatabase.find(doctorId)

    patient.book(doctor, hospital)

    await patientDatabase.update(patient)

    res.send(flatted.stringify(patient))
})

module.exports = router