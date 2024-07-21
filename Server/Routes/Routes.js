const express = require('express');
const router = express.Router();
const {
  contactInfo,
  showContactInfo,
  AddOngoingProjects,
  FetchOngoingProject,

} = require('../Controller/iteamController')

// Route for add contact request 
router.post('/api/rudra-constrctions/contactInfo', contactInfo);

// Route for show contact kead data 
router.get('/api/rudra-constrctions/contact-request-info', showContactInfo)

// Add ongoing Projects by admin pannel 
router.post('/api/rudra-constrctions/add-orngoing-projects', AddOngoingProjects);
// Fetch project all ongoing 
router.get("/api/rudra-construction/ongoning-projects", FetchOngoingProject)




module.exports = router;