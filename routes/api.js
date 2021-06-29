const express = require('express');
const router = express.Router();
const data = require('../data/db.json')

router.get('/books', (req, res) => {
    res.json(data)
})

module.exports = router;