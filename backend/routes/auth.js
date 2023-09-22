const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'i@mCoder'






// ROUTE 1 : creat a User using POST "/api/auth/createuser" . NO login required
router.post('/createuser', [
    body('name', 'Enter a valid name!').isLength({ min: 3 }),
    body('email', 'Enter a valid Email!').isEmail(),
    body('password', 'Password length must be min 5 characters! ').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    // If there are errors ,return Bad request & errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Check whether the user with the same email exits already
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({success, errors: "Sorry user with the same email is already exists!" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //    Create a new User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });


        // .then(user => res.json(user))
        // .catch( err => res.json({errors:'Please enter a different values!', message : err.message}));

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // res.json({user });
        success= true;
        res.json({success, authToken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured!")
    }
})













//ROUTE 2 : Authenticate a User using POST "/api/auth/login" . NO login required

router.post('/login', [
    body('email', 'Enter a valid Email!').isEmail(),
    body('password', 'Password cannot be blank!').exists()
], async (req, res) => {
    let success = false
    // If there are errors ,return Bad request & errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({success, error: "Please try to login with correct Informations!" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Please try to login with correct Informations!" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken });


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured!")
    }

})















//ROUTE 3 : Get logedin user details  using POST "/api/auth/getuser" . NO login required

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured!")
    }


})

module.exports = router