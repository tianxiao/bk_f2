import { Injectable } from '@angular/core'
import { Router }     from '@angular/router'


export class User {
    constructor(
        public email: string,
        public passwd: string){}
}


var users = [
    new User('test', 'test'),
    new User('andy','andy')
];


@Injectable()
export class AuthenticationService {

    constructor(
        private _router: Router ) {}

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    }

    login(user) {
        var authenticatedUser = users.find(u=> u.email===user.email);
        if (authenticatedUser&&authenticatedUser.passwd===user.passwd){
            // localStorage.setItem("user", authenticatedUser);
            localStorage.setItem("user", "set_some_thing");  // mock
            this._router.navigate(['home']);
            return true;
        }

        return false;
    }

    checkCredentials() {
        if (localStorage.getItem("user")===null) {
            this._router.navigate(['login']);
        }
    }
}

