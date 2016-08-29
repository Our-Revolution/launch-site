var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var candidates = require('../data/candidates');
var issues = require('../data/issues');

chai.use(chaiHttp);

describe('Routing', function() {
  it('should load index page on / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });

  it('should load about page on /about GET', function(done) {
    chai.request(server)
      .get('/about')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });

  it('should load issues page on /issues GET', function(done) {
    chai.request(server)
      .get('/issues')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });

  it('should load issue page on /issues/:issue GET', function(done) {
    var issuesProccessed = 0;

    issues.forEach( function(issue) {
      issuesProccessed++;

      chai.request(server)
        .get('/issues/asdas' + issue.slug)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.html;
        });

        if(issuesProccessed === issues.length)
          done();
    });
  });

});
