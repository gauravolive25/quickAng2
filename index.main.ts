module LoginApp {
    
    angular.module('loginApp', ["ngRoute", "ui.bootstrap"])
        .controller('mainController', MainController)
        .controller('loginController', LoginController)
        .controller('editUserController', EditUserController)
        .service('userService', UserService);

    angular.module('loginApp').config(routeConfig);
 
	routeConfig.$inject = ["$routeProvider"];
	function routeConfig($routeProvider: ng.route.IRouteProvider): void{
	   $routeProvider
	   	  .when("/", {
	         templateUrl: "/views/login.html",
	         controller: "loginController as vm"
	      })	
	      .when("/dashboard", {
	         templateUrl: "/views/dashboard.html",
	         controller: "mainController as vm"
	      }).otherwise("/");
	}    
    
}

