const { application } = require('express');
const express = require('express');

const router = express.Router();

// @route  GET api/post
// @desc   Testing this route
// @access Public

router.get('/', (req, res) => res.send('This would be the post route'));

module.exports = router;

