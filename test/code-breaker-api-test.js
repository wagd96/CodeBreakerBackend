var supertest = require('supertest');
var chai = require('chai');
var should = require('should');
var assert = require('assert');
var app = require('../app/app');

var request = supertest(app);
var expect = chai.expect;

describe('GET /setsecret/:secret', function () {
    it('should return code 200', (done) => {
        request.get('/setsecret/1234')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.message);
                done(err);
            });
    });

    it('should return JSON Content-Type application/json', (done) => {
        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                done(err);
            });
    });
})

describe('GET /guess/:number', () => {
    it('should return code 200', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.message);

                done(err);
            });
    });

    it('should return JSON Content-Type application/json', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                done(err);
            });
    });

    it('should return a correct JSON object', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.message);

                done(err);
            });
    });

    it('should return a correct answer', (done) => {
        request.get('/guess/1234')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.not.exist(err);
                should.exist(res);
                res.body.should.be.an.Object;
                should.exist(res.body.message);
                assert.equal('XXXX', res.body.result);

                done(err);
            });
    });

})