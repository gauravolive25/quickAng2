var LoginApp;
(function (LoginApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    username: 'Gaggy',
                    email: 'gaggy@gmail.com'
                }, {
                    username: 'Guddu',
                    email: 'guddu@gmail.com'
                }, {
                    username: 'pops',
                    email: 'pops@gmail.com'
                }, {
                    username: 'maggy',
                    email: 'maggy@gmail.com'
                },
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        return UserService;
    }());
    UserService.$inject = ['$q'];
    LoginApp.UserService = UserService;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=user.service.js.map