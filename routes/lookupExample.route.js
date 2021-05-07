const express = require('express');

const lookupExample = require('../controllers/mongoLookupExample');

const router = express.Router();

router.get('/lookup', lookupExample.lookupExample);

module.exports = router;