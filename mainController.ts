module LoginApp {

    export class MainController {
    	static $inject = [
          'userService',
        ];
        constructor(
            private userService: IUserService){
            var self = this;            
            this.userService
                    .loadAllUsers()
                    .then((users: User[]) => {
                      self.users = users;
                      self.selectedUser = users[0];
                      self.userService.selectedUser = users[0];
                    });
        }
        message: string = 'Hello World';
        users: User[] = null;
        selectedUser: User = null;
   
    }
}