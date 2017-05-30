const express = require('express'),
      Chance  = require('chance'),
      winston = require('winston'),
      moment  = require('moment'),
      os      = require('os'),
      util    = require('util'),
      app     = express(),
      chance  = new Chance(),
      port    = process.env.PORT || 80;

app.get('/', function(req, res) {
    winston.log("info", util.format("new request at [%s]", moment().toISOString()));
    res.json({msg: util.format("%s suggests to visit %s", os.hostname(), chance.city()) });
});
app.listen(port);

winston.log("info", util.format("waiting for request on port %s", port));
