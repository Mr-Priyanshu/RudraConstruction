const express = require('express');
const router = express.Router();
const {
  contactInfo,

} = require('../Controller/iteamController')


router.post('/api/rudra-constrctions/contactInfo', contactInfo);


module.exports = router;