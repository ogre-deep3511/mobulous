const { User } = require('../models/schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const register = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    }

    User.findOne({phone: req.body.phone})
    .then(user => {
        if(user) {
            res.json({
                message: "This phone number is already registered"
            });
        }else {
            bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
                if(err) {
                    res.json({
                        error: err
                    });
                }

                let user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    age: req.body.age,
                    gender: req.body.gender,
                    password: hashedPass
                });

                user.save().then(user => {
                    res.json({
                        message: "User registered successfully!!!"
                    });
                }).catch(err => {
                    res.json({
                        error: err,
                        message: "An error occured!!!"
                    });
                });
            });
        }
    });
}

const login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.json({
                        error: err
                    });
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, process.env.SECRET, {expiresIn: '5h'});
                    res.json({
                        message: "Login Successfully!!!",
                        token: token
                    });
                }else {
                    res.json({
                        message: "***Password did not match***"
                    });
                }
            });
        }else {
            res.json({
                message: "No user found!!!"
            });
        }
    });
}

module.exports = { register, login }