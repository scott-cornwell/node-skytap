var chai      = require('chai')
  , expect    = chai.expect
  , Skytap    = require('../lib/skytap')
  , nockspect = require('./util/nockspect')
  , _         = require('underscore');

describe('Skytap.users', function () {
  var skytap = Skytap.init({ username: 'foo', token: 'bar' });

  describe('.list', function () {
    it('requests a list of users', function () {
      return nockspect(function (nock) {
        nock.get('/users').reply(200);
        return _.bind(skytap.users.list, skytap.users);
      });
    });

    it('takes optional parameters', function () {
      return nockspect(function (nock) {
        nock.get('/users?foo=bar').reply(200);
        return _.bind(skytap.users.list, skytap.users, {
          foo: 'bar'
        });
      });
    });
  });

  describe('.get', function () {
    it('requests a specific user', function () {
      return nockspect(function (nock) {
        nock.get('/users/1').reply(200);
        return _.bind(skytap.users.get, skytap.users, {
          user_id: 1
        });
      });
    });
  });
});
