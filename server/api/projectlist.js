var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;

exports.updatesearch = function (page, params) {
    page.update('flexdeployerprojects', params);
}