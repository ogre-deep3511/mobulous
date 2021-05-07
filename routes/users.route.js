const express = require('express');
const userController = require('../controllers/users.controller');
const { check } = require('express-validator');
const router = express.Router();

router.post('/register', [
    check('name', 'Name must be 3+ character long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .exists()
        .isEmail(),
    check('phone', 'Phone number must be 10 character long')
        .exists()
        .isLength({ min: 10 }),
    check('age', 'Age must be a number')
        .isDecimal()
        .optional(),
    check('gender', 'Gender must be male, female or others')
        .isIn(['Male', 'Female', 'Others', 'male', 'female', 'others', 'MALE', 'FEMALE', 'OTHERS'])
        .optional(),
    check('password', 'Password must be at least alphanumeric')
        .exists()
        .isAscii()
], userController.register);
router.post('/login', userController.login);

module.exports = router;