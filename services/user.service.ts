module LoginApp {
    
    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        updateUser(user: any): ng.IPromise<User[]>;
        deleteUser(user: any): ng.IPromise<User[]>;
        selectedUser: User;
    }
    
    export class UserService implements IUserService {
        static $inject = ['$q', '$http'];
        
        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
        }
        
        selectedUser: User = null;
        
        loadAllUsers() : ng.IPromise<User[]> {
            
            var result: ng.IPromise< any > = this.$http({
                method: 'GET',
                    url: 'http://localhost:1337/user/getUsers'
                }).then(( response: any ): ng.IPromise< any > => this.handlerResponded( response), function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            return result;
        }
        
        updateUser(userData) : ng.IPromise<User[]> {
            var result: ng.IPromise< any > = this.$http({
                method: 'POST',
                    url: 'http://localhost:1337/user/updateOrCreate',
                    data: userData
                }).then(( response: any ): ng.IPromise< any > => this.handlerResponded( response), function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            return result;
        }

        deleteUser(userData) : ng.IPromise<User[]> {
            var result: ng.IPromise< any > = this.$http({
                method: 'POST',
                    url: 'http://localhost:1337/user/deleteUser',
                    data: userData
                }).then(( response: any ): ng.IPromise< any > => this.handlerResponded( response), function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            return result;
        }

        private users: User[] = [
            {
                username : 'Gaggy',
                email : 'gaggy@gmail.com'
            },{
                username : 'Guddu',
                email : 'guddu@gmail.com'
            },{
                username : 'pops',
                email : 'pops@gmail.com'
            },{
                username : 'maggy',
                email : 'maggy@gmail.com'
            },
        ];

        handlerResponded( response: any): any
          {
            return response.data;
          }
    }
    
}