const express = require('express')
const bodyParser = require('body-parser')
const patientsRouter = require('./routes/patients')
const indexRouter = require('./routes/index')
const router = require('./routes/index')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

router.use('/patients', patientsRouter)
router.use('/', indexRouter)

app.listen(3000, () => {
    console. log('started listening on 3000')
})