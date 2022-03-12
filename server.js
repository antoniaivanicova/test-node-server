'use strict';

const express = require('express')

const PORT = process.env.PORT || 8080

const app = express();

app.get('/', (req, res) => {
    res.json({test: 123})
})

app.listen(PORT)
