const { Story } = require('../models/schema');

const addStory = (req, res, next) => {
    Story.create(req.body)
    .then(() => {
        res.json({
            success: true,
            message: 'Successfully created story!!!'
        });
    }).catch(err => {
        res.json({
            success: false,
            message: 'Failed to create story',
            error: err
        });
    });
};

module.exports = { addStory };