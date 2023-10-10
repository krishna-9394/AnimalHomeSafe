const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ekank Palace');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send('Ekank palace: ');
});

module.exports = router;