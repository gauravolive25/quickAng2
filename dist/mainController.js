var LoginApp;
(function (LoginApp) {
    var MainController = (function () {
        function MainController(userService) {
            this.userService = userService;
            this.message = 'Hello World';
            this.users = null;
            this.selectedUser = null;
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selectedUser = users[0];
                self.userService.selectedUser = users[0];
            });
        }
        return MainController;
    }());
    MainController.$inject = [
        'userService',
    ];
    LoginApp.MainController = MainController;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=mainController.js.map