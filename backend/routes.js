'use strict';

let path = require('path');
let request = require("request");

let temperature = 23;

module.exports = (app) => {

  app.get('/api/actualtemperature', (req, res) => {
    console.log(req.body)
    res.send({temperature:temperature})
  });

  app.post('/api/actualtemperature', (req, res) => {
    console.log(req.body)
    temperature = req.body.temperature;
    res.send(true)
  });

};
