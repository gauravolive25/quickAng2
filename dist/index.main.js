var LoginApp;
(function (LoginApp) {
    angular.module('loginApp', ["ngRoute", "ui.bootstrap"])
        .controller('mainController', LoginApp.MainController)
        .controller('loginController', LoginApp.LoginController)
        .controller('editUserController', LoginApp.EditUserController)
        .service('userService', LoginApp.UserService);
    angular.module('loginApp').config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/views/login.html",
            controller: "loginController as vm"
        })
            .when("/dashboard", {
            templateUrl: "/views/dashboard.html",
            controller: "mainController as vm"
        }).otherwise("/");
    }
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=index.main.js.map