'use strict';

let express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  http = require('http').Server(app)

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

// set port
app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// run
http.listen(app.get('port'), () => {
  console.info('App is running on port ', app.get('port'))
});

exports = module.exports = app;

// routing
require('./backend/routes')(app);
