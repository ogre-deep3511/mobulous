const express = require('express');
const storyController = require('../controllers/stories.controller');
const router = express.Router();

router.post('/stories', storyController.addStory);

module.exports = router;