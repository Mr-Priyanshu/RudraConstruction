const express = require('express');
const cors = require('cors');
require('dotenv').config()
const routes = require('./Routes/Routes')
const multer = require("multer")


// Setup multer for file uploads
const upload = multer({
  storage: multer.memoryStorage() // Save files in memory
});

const app = express();
const port = process.env.PORT 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use('/',))
app.use(cors());
app.use(upload.single('image')); // Handle single file upload
app.use(routes)

app.listen(port, () => {
  console.log(`Server is Live on port ${port}`);
});

