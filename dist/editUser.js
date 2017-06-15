var LoginApp;
(function (LoginApp) {
    var EditUserController = (function () {
        function EditUserController($uibModalInstance) {
            this.$uibModalInstance = $uibModalInstance;
        }
        EditUserController.prototype.save = function (user) {
            console.log(user);
            this.$uibModalInstance.close(user);
        };
        return EditUserController;
    }());
    EditUserController.$inject = ['$uibModalInstance'];
    LoginApp.EditUserController = EditUserController;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=editUser.js.map