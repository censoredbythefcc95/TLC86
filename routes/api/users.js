const express = require('express');
// New version of Validator no longer requires "check"
const { check, validationResult } = require('express-validator');
const router = express.Router();

// @route  POST api/users
// @desc   Register new user
// @access Public

router.post('/', [
    check('name', 'Name is missing. Please enter a valid name.')
    .not()
    .isEmpty(),
    check('email', 'Email address is missing.')
    .isEmail(),
    check('password', 'Please enter a password that is at least 6 characters.')
    .isLength({ min: 6 }),
], (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('This would be the user route')
});

module.exports = router;

