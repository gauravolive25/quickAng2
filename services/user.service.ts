module LoginApp {
    
    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }
    
    export class UserService implements IUserService {
        static $inject = ['$q'];
        
        constructor(private $q: ng.IQService) {
        }
        
        selectedUser: User = null;
        
        loadAllUsers() : ng.IPromise<User[]> {
            return this.$q.when(this.users);
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
    }
    
}