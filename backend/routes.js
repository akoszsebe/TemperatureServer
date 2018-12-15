'use strict';

let path = require('path');
let request = require("request");

require("appdynamics").profile({
  controllerHostName: 'amelia201812141654263.saas.appdynamics.com',
  controllerPort: 443, 
  // If SSL, be sure to enable the next line
  controllerSslEnabled: true,
  accountName: 'amelia201812141654263',
  accountAccessKey: '9dv8hvd09f56',
  applicationName: 'TemperatureServer',
  tierName: 'TierSeccond',
  nodeName: 'process' // The controller will automatically append the node name with a unique number
 });

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
