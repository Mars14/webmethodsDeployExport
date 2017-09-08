var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;

exports.updatesearch = function (page, params) {
    //delete params.listItems;
    page.update('flexdeployerprojects', params);


    setTimeout(function() {
        page.extract('flexdeployerprojects')
            .screen('flexdeployerprojects');
    }, 1000);
}