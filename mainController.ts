module LoginApp {

    export class MainController {
    	static $inject = [
          'userService',
          '$uibModal'
        ];
        constructor(
            private userService: IUserService,
            private $uibModalInstance:ng.ui.bootstrap.IModalService,
            ){
            var self = this;            
            this.userService
                    .loadAllUsers()
                    .then((users: User[]) => {
                      console.log(users);
                      self.users = users;
                      self.selectedUser = users[0];
                      self.userService.selectedUser = users[0];
                    });
        }
        message: string = 'Hello World';
        users: User[] = null;
        selectedUser: User = null;
        editUser(user) {
            var options : ng.ui.bootstrap.IModalSettings = {
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              controller: 'editUserController as editUserCtrl',
              templateUrl: './views/editUserModal.html',
              resolve: {
                    user: () => user 
                }
            }
            this.$uibModalInstance.open(options).result
                .then(updatedItem => this.updateUser(updatedItem));
            }

        updateUser(userData: any): void {
          this.userService.updateUser(userData)
                    .then((users: User[]) => {
                      this.users = users;
                      
                      });
          } 

        deleteUser(userData: any): void {
          this.userService.deleteUser(userData)
                    .then((users: User[]) => {
                      this.users = users;
                      
                      });
          } 


        }

        
   
    }