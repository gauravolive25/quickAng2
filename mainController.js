var loginApp;
(function (loginApp) {
    var MainController = (function () {
        function MainController() {
            this.message = 'Hello World';
        }
        return MainController;
    }());
    loginApp.MainController = MainController;
})(loginApp || (loginApp = {}));
