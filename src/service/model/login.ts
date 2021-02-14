import { isConstructorDeclaration } from "typescript";

class ModelLogin{
    email;
    password;

    constructor(email: any,password: any){
        this.email=email;
        this.password=password;
    }
}

export default ModelLogin;
