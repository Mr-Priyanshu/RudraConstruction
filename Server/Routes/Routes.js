const express = require('express');
const router = express.Router();
const {
  contactInfo,
  showContactInfo,

} = require('../Controller/iteamController')

// Route for add contact request 
router.post('/api/rudra-constrctions/contactInfo', contactInfo);

// Route for show contact kead data 
router.get('/api/rudra-constrctions/contact-request-info', showContactInfo)




module.exports = router;