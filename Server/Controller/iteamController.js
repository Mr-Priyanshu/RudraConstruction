db = require('../config/db')

const contactInfo = (req, res) => {
  

  const {name, email, subject, message} = req.body;
  console.log(name, email, subject, message);
  const query = `INSERT INTO lead_info (name, email, subject, message) VALUES(?, ?, ?, ?)`;
  
  db.query(query, [
    name,
    email,
    subject,
    message
  ], (err, result) => {
    console.log(result);
    if(err){
      console.error(err)
      return res.status(500).send(err)
    }
    res.send('Request Send ')
  });
};

module.exports = {
  contactInfo,
  
}