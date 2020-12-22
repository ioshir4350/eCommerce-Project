const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hey')
})

app.listen(5000, () => {
    console.log('server on 5000');
})