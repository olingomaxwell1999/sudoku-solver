const PORT = 5000

const express = require('express')

const cors = require('cors')

const axios = require('axios').default

require('dotenv').config()

const app = express()

app.use(cors())

app.use(express.json)

app.post('/solve', (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://solve-sodoku.p.rapidapi.com',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'solve-sodoku.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        },
        data: {
            puzzle: req.body.numbers
        }
    }

    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})