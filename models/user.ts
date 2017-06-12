module LoginApp {

    export class User {
        
        constructor(
            public username: string,
            public email: string)  {      
        }
        
        
        static fromCreate(user: User): User {
            return user;
        }
        
    }
   
}