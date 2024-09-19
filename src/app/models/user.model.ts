export class User {

    id?: any;
    email: string;
    password: string;  // El signo de interrogación hace que este campo sea opcional
  
    constructor(email: string, password: string, id?: any) {
      this.id = id;
      this.email = email;
      this.password = password;
    }
}
