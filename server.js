'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //req.body
const cors = require('cors'); //8080
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
let contacts = require('./data');

const mongodbUri = 'mongodb://slyram69:Lazane03@ds011495.mlab.com:11495/api-sly';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(express.static(__dirname + "/client"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {

  mongoose.connect(mongooseUri, dbOptions, (err) => {
    if (err){
      console.log(err);
    }
   console.log(`Server is running at http://${hostname}:${port}`);
  });

});
