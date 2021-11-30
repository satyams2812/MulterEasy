const express = require('express');
const mongoose = require('mongoose');
const app = express();
 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db = require('./config/keys').mongoURI;

const router = require('./routes/api/product')
mongoose
  .connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

 
app.use(express.static('uploads'));
 
app.use('/', router);

 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));