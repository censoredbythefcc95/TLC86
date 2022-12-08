const { application } = require('express');
const express = require('express');

const router = express.Router();

// @route  GET api/profile
// @desc   Testing this route
// @access Public

router.get('/', (req, res) => res.send('This would be the profile route'));

module.exports = router;

