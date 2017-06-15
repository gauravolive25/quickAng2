var LoginApp;
(function (LoginApp) {
    var UserService = (function () {
        function UserService($q, $http) {
            this.$q = $q;
            this.$http = $http;
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
            var _this = this;
            var result = this.$http({
                method: 'GET',
                url: 'http://localhost:1337/user/getUsers'
            }).then(function (response) { return _this.handlerResponded(response); }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
            return result;
        };
        UserService.prototype.updateUser = function (userData) {
            var _this = this;
            console.log(userData);
            var result = this.$http({
                method: 'POST',
                url: 'http://localhost:1337/user/updateUser',
                data: userData
            }).then(function (response) { return _this.handlerResponded(response); }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
            return result;
        };
        UserService.prototype.handlerResponded = function (response) {
            return response.data;
        };
        return UserService;
    }());
    UserService.$inject = ['$q', '$http'];
    LoginApp.UserService = UserService;
})(LoginApp || (LoginApp = {}));
//# sourceMappingURL=user.service.js.map