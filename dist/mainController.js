var LoginApp;
(function (LoginApp) {
    var MainController = (function () {
        function MainController(userService, $uibModalInstance) {
            this.userService = userService;
            this.$uibModalInstance = $uibModalInstance;
            this.message = 'Hello World';
            this.users = null;
            this.selectedUser = null;
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                console.log(users);
                self.users = users;
                self.selectedUser = users[0];
                self.userService.selectedUser = users[0];
            });
        }
        MainController.prototype.editUser = function (user) {
            var _this = this;
            var options = {
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                controller: 'editUserController as editUserCtrl',
                templateUrl: './views/editUserModal.html',
                resolve: {
                    user: function () { return user; }
                }
            };
            this.$uibModalInstance.open(options).result
                .then(function (updatedItem) { return _this.updateUser(updatedItem); });
        };
        MainController.prototype.updateUser = function (userData) {
            this.userService.updateUser(userData)
                .then(function (users) {
                console.log(users);
            });
        };
        return MainController;
    }());
    MainController.$inject = [
        'userService',
        '$uibModal'
    ];
    LoginApp.MainController = MainController;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=mainController.js.map