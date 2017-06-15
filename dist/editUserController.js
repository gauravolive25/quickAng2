var LoginApp;
(function (LoginApp) {
    var EditUserController = (function () {
        function EditUserController($uibModalInstance, user) {
            this.$uibModalInstance = $uibModalInstance;
            this.user = user;
        }
        EditUserController.prototype.save = function (user) {
            this.$uibModalInstance.close(user);
        };
        return EditUserController;
    }());
    EditUserController.$inject = ['$uibModalInstance', 'user'];
    LoginApp.EditUserController = EditUserController;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=editUserController.js.map