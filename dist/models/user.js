var LoginApp;
(function (LoginApp) {
    var User = (function () {
        function User(username, email) {
            this.username = username;
            this.email = email;
        }
        User.fromCreate = function (user) {
            return user;
        };
        return User;
    }());
    LoginApp.User = User;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=user.js.map