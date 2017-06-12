module LoginApp {

    export class LoginController {
        
        message: string = 'Hello World';
        formScope : any;
        loginUser(scope) {
        	this.formScope = scope;
        	window.location.href = 'http://127.0.0.1:8080/#!/dashboard'
        }
   
    }
}