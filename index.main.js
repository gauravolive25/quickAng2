/// <reference path="typings/main.d.ts" />
var LoginApp;
(function (LoginApp) {
    angular.module('loginApp', [])
        .controller('mainController', LoginApp.MainController);
})(LoginApp || (LoginApp = {}));
