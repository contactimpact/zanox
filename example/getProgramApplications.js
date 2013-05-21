// Generated by CoffeeScript 1.3.3
(function() {
  var Zanox, adspace, config, connectId, params, secretKey, zanox, _ref;

  Zanox = require('../lib/Zanox');

  _ref = config = require('./config'), connectId = _ref.connectId, secretKey = _ref.secretKey, adspace = _ref.adspace;

  zanox = Zanox(connectId, secretKey);

  params = {
    adspace: adspace,
    status: 'confirmed'
  };

  zanox.getAllProgramApplications(params, function(err, data) {
    if (err != null) {
      return console.log('error', err);
    }
    return console.log('%j', data);
  });

}).call(this);
