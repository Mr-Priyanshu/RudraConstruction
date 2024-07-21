db = require('../config/db')
const { Buffer } = require('buffer');

const contactInfo = (req, res) => {

  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);
  const query = `INSERT INTO lead_info (name, email, subject, message) VALUES(?, ?, ?, ?)`;

  db.query(query, [
    name,
    email,
    subject,
    message
  ], (err, result) => {
    console.log(result);
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    res.send('Request Send ')
  });
};

// Fetch contact request data 

const showContactInfo = (req, res) => {

  const query = `SELECT * FROM lead_info `
  db.query(
    query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      console.log(result);
      res.json(result);
    }
  );
};

// Admin Add Projects API
const AddOngoingProjects = (req, res) => {
  const { project_name, category, location, description } = req.body;
  const image = req.file ? req.file.buffer : null; // Get image from multer

  if (!image) {
    return res.status(400).send('Image is required');
  }

  const query = `INSERT INTO add_ongoing_projects (project_name, category, location, description, image) VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [project_name, category, location, description, image], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Project Added');
  });
};

// Fetch Ongoing Projects
const FetchOngoingProject = (req, res) => {
  const query = `SELECT * FROM add_ongoing_projects`;
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Convert binary image data to base64 string
    const projects = result.map(project => ({
      ...project,
      image: project.image ? Buffer.from(project.image).toString('base64') : null
    }));

    res.json(projects);
  });
};


module.exports = {
  contactInfo,
  showContactInfo,
  AddOngoingProjects,
  FetchOngoingProject,

}