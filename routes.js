const express = require('express');
const router = express.Router();
const {index,contact,about,error} = require('./controller');

router.get('/',index);
router.get('/about',about);
router.get('/contact',contact);
router.get('/:any',error);

module.exports = router;