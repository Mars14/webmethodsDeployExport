angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.flexdeployerprojects', {
        views: {
            app: {
                controller: 'app_flexdeployerprojects',
                templateProvider: function (app) {
                    return app.templateProvider('app.flexdeployerprojects');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.menu1', {
        views: {
            app: {
                controller: 'app_menu1',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu1');
                }
            }
        }
    });
});