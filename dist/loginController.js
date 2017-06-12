var LoginApp;
(function (LoginApp) {
    var LoginController = (function () {
        function LoginController() {
            this.message = 'Hello World';
        }
        LoginController.prototype.loginUser = function (scope) {
            this.formScope = scope;
            window.location.href = 'http://127.0.0.1:8080/#!/dashboard';
        };
        return LoginController;
    }());
    LoginApp.LoginController = LoginController;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=loginController.js.map