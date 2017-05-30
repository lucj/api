const request = require('supertest'),
      app     = require('../app');
      winston = require('winston'),
      util    = require('util'),
      port    = 3000,
      baseURL = util.format('http://localhost:%s', port);

before(function(){
    app.listen(port, function(){
        winston.info(util.format("server listening on port %s", port));
    });
});

describe('City', function(){
  it('should return a dummy city', function(done){
    request(baseURL)
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) throw err;
        done();
      })
  });
});
