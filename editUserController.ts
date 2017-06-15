module LoginApp {

    export class EditUserController {
        private scope: ng.IScope;
        static $inject = ['$uibModalInstance', 'user'];

        constructor(
            private $uibModalInstance: ng.ui.bootstrap.IModalInstanceService, public  user:any) {
        }
        save(user) {

            this.$uibModalInstance.close(user);
        }
    }
}