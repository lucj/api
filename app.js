const express = require('express'),
      Chance  = require('chance'),
      winston = require('winston'),
      moment  = require('moment'),
      os      = require('os'),
      util    = require('util'),
      chance  = new Chance(),
      port    = process.env.PORT || 80;

// Create express application
let app = module.exports = express();

app.get('/', function(req, res) {
    winston.log("info", util.format("new request at [%s]", moment().toISOString()));
    res.json({msg: util.format("%s suggests to visit %s", os.hostname(), chance.city()) });
});
